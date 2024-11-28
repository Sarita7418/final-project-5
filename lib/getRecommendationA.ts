interface FuzzySet {
    exceso_leve: number;
    exceso_moderado: number;
    critico_moderado: number;
    critico_alto: number;
    descontrolado: number;
}

function trimf(x: number, a: number, b: number, c: number): number {
    return Math.max(Math.min((x - a) / (b - a), (c - x) / (c - b)), 0);
}

function fuzzifyConsumo(consumo: number): FuzzySet {
    return {
        exceso_leve: trimf(consumo, 1, 1, 1.133),
        exceso_moderado: trimf(consumo, 1.08575197889182, 1.2, 1.35),
        critico_moderado: trimf(consumo, 1.3, 1.5, 1.65),
        critico_alto: trimf(consumo, 1.6, 1.75, 1.85),
        descontrolado: trimf(consumo, 1.8, 2, 2),
    };
}

function fuzzifyCantidadHuesped(cantidad: number): FuzzySet {
    return {
        exceso_leve: trimf(cantidad, 1, 1, 2.41292875989446),
        exceso_moderado: trimf(cantidad, 2.08, 3.22031662269129, 4.19),
        critico_moderado: trimf(cantidad, 3.77, 5.36, 6.71108179419525),
        critico_alto: trimf(cantidad, 6.21240105540897, 7.55, 8.94),
        descontrolado: trimf(cantidad, 8.397, 10, 10),
    };
}

function applyRules(consumoSet: FuzzySet, cantidadSet: FuzzySet): FuzzySet {
    const recommendationSet: FuzzySet = {
        exceso_leve: 0,
        exceso_moderado: 0,
        critico_moderado: 0,
        critico_alto: 0,
        descontrolado: 0,
    };

    // Aplicar reglas difusas
    recommendationSet.exceso_leve = Math.max(
        Math.min(consumoSet.exceso_leve, cantidadSet.exceso_leve),
        Math.min(consumoSet.exceso_leve, cantidadSet.exceso_moderado),
        Math.min(consumoSet.exceso_leve, cantidadSet.critico_moderado),
        Math.min(consumoSet.exceso_leve, cantidadSet.critico_alto),
        Math.min(consumoSet.exceso_leve, cantidadSet.descontrolado)
    );

    recommendationSet.exceso_moderado = Math.max(
        Math.min(consumoSet.exceso_moderado, cantidadSet.exceso_leve),
        Math.min(consumoSet.exceso_moderado, cantidadSet.exceso_moderado),
        Math.min(consumoSet.exceso_moderado, cantidadSet.critico_moderado),
        Math.min(consumoSet.exceso_moderado, cantidadSet.critico_alto),
        Math.min(consumoSet.exceso_moderado, cantidadSet.descontrolado)
    );

    recommendationSet.critico_moderado = Math.max(
        Math.min(consumoSet.critico_moderado, cantidadSet.exceso_leve),
        Math.min(consumoSet.critico_moderado, cantidadSet.exceso_moderado),
        Math.min(consumoSet.critico_moderado, cantidadSet.critico_moderado),
        Math.min(consumoSet.critico_moderado, cantidadSet.critico_alto),
        Math.min(consumoSet.critico_moderado, cantidadSet.descontrolado)
    );

    recommendationSet.critico_alto = Math.max(
        Math.min(consumoSet.critico_alto, cantidadSet.exceso_leve),
        Math.min(consumoSet.critico_alto, cantidadSet.exceso_moderado),
        Math.min(consumoSet.critico_alto, cantidadSet.critico_moderado),
        Math.min(consumoSet.critico_alto, cantidadSet.critico_alto),
        Math.min(consumoSet.critico_alto, cantidadSet.descontrolado)
    );

    recommendationSet.descontrolado = Math.max(
        Math.min(consumoSet.descontrolado, cantidadSet.exceso_leve),
        Math.min(consumoSet.descontrolado, cantidadSet.exceso_moderado),
        Math.min(consumoSet.descontrolado, cantidadSet.critico_moderado),
        Math.min(consumoSet.descontrolado, cantidadSet.critico_alto),
        Math.min(consumoSet.descontrolado, cantidadSet.descontrolado)
    );

    return recommendationSet;
}

function defuzzify(fuzzySet: FuzzySet): { value: number, label: string } {
    const { exceso_leve, exceso_moderado, critico_moderado, critico_alto, descontrolado } = fuzzySet;

    const outputs = [
        { value: 0.075, label: 'Consumo ligeramente elevado Mayor ocupación en el area o uso intensivo temporal Verificar la ocupación del hotel y la programación de eventos Optimizar el uso de agua en el  área.' },
        { value: 0.225, label: 'Consumo moderadamente alto Posibles fugas menores , se recomienda revisar el mayor consumo posible del area y revisar las conexiones del area y regular el consumo de agua en esas áreas , ' },
        { value: 0.48, label: 'Fugas importantes en el sistema de distribución de agua. Detectar y reparar fugas mayores en tuberías, grifos y conexiones.Reducir el uso de agua en áreas no esenciales ' },
        { value: 0.725, label: 'Consumo alto  Mal uso del recurso  Revisar las instalaciones y sus conexiones en busca de fugas.' },
        { value: 0.9, label: 'Fugas masivas o fallas en sistemas de presión.Cortar temporalmente el suministro en las áreas afectadas y realizar una inspección urgente.Implementar medidas de contingencia para limitar el impacto en la operación del hotel.' }
    ];

    const numerator = 
        exceso_leve * outputs[0].value + 
        exceso_moderado * outputs[1].value + 
        critico_moderado * outputs[2].value + 
        critico_alto * outputs[3].value + 
        descontrolado * outputs[4].value;

    const denominator = 
        exceso_leve + 
        exceso_moderado + 
        critico_moderado + 
        critico_alto + 
        descontrolado;

    const defuzzifiedValue = numerator / denominator;

    // Encontrar la etiqueta correspondiente al valor defuzzificado
    let recommendation = outputs[0].label;
    let minDifference = Math.abs(defuzzifiedValue - outputs[0].value);

    for (let i = 1; i < outputs.length; i++) {
        const difference = Math.abs(defuzzifiedValue - outputs[i].value);
        if (difference < minDifference) {
            minDifference = difference;
            recommendation = outputs[i].label;
        }
    }

    return { value: defuzzifiedValue, label: recommendation };
}

export function getRecommendationA(consumo: number, cantidad: number): { value: number, label: string } {
    const consumoSet = fuzzifyConsumo(consumo);
    const cantidadSet = fuzzifyCantidadHuesped(cantidad);
    const recommendationSet = applyRules(consumoSet, cantidadSet);
    return defuzzify(recommendationSet);
}