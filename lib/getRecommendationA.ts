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
        exceso_leve: trimf(consumo, 1, 1, 1.15),
        exceso_moderado: trimf(consumo, 1.1, 1.2, 1.35),
        critico_moderado: trimf(consumo, 1.3, 1.5, 1.65),
        critico_alto: trimf(consumo, 1.6, 1.75, 1.85),
        descontrolado: trimf(consumo, 1.8, 2, 2),
    };
}

function fuzzifyMes(mes: number): FuzzySet {
    return {
        exceso_leve: trimf(mes, 1, 1, 2.65),
        exceso_moderado: trimf(mes, 2.5, 3, 3.5),
        critico_moderado: trimf(mes, 3.3, 5, 6.7),
        critico_alto: trimf(mes, 6.5, 7, 8),
        descontrolado: trimf(mes, 7.8, 9, 12),
    };
}

function applyRules(consumoSet: FuzzySet, mesSet: FuzzySet): FuzzySet {
    const recommendationSet: FuzzySet = {
        exceso_leve: 0,
        exceso_moderado: 0,
        critico_moderado: 0,
        critico_alto: 0,
        descontrolado: 0,
    };

    // Aplicar reglas difusas
    recommendationSet.exceso_leve = Math.max(
        Math.min(consumoSet.exceso_leve, mesSet.exceso_leve),
        Math.min(consumoSet.exceso_leve, mesSet.exceso_moderado),
        Math.min(consumoSet.exceso_leve, mesSet.critico_moderado),
        Math.min(consumoSet.exceso_leve, mesSet.critico_alto),
        Math.min(consumoSet.exceso_leve, mesSet.descontrolado)
    );

    recommendationSet.exceso_moderado = Math.max(
        Math.min(consumoSet.exceso_moderado, mesSet.exceso_leve),
        Math.min(consumoSet.exceso_moderado, mesSet.exceso_moderado),
        Math.min(consumoSet.exceso_moderado, mesSet.critico_moderado),
        Math.min(consumoSet.exceso_moderado, mesSet.critico_alto),
        Math.min(consumoSet.exceso_moderado, mesSet.descontrolado)
    );

    recommendationSet.critico_moderado = Math.max(
        Math.min(consumoSet.critico_moderado, mesSet.exceso_leve),
        Math.min(consumoSet.critico_moderado, mesSet.exceso_moderado),
        Math.min(consumoSet.critico_moderado, mesSet.critico_moderado),
        Math.min(consumoSet.critico_moderado, mesSet.critico_alto),
        Math.min(consumoSet.critico_moderado, mesSet.descontrolado)
    );

    recommendationSet.critico_alto = Math.max(
        Math.min(consumoSet.critico_alto, mesSet.exceso_leve),
        Math.min(consumoSet.critico_alto, mesSet.exceso_moderado),
        Math.min(consumoSet.critico_alto, mesSet.critico_moderado),
        Math.min(consumoSet.critico_alto, mesSet.critico_alto),
        Math.min(consumoSet.critico_alto, mesSet.descontrolado)
    );

    recommendationSet.descontrolado = Math.max(
        Math.min(consumoSet.descontrolado, mesSet.exceso_leve),
        Math.min(consumoSet.descontrolado, mesSet.exceso_moderado),
        Math.min(consumoSet.descontrolado, mesSet.critico_moderado),
        Math.min(consumoSet.descontrolado, mesSet.critico_alto),
        Math.min(consumoSet.descontrolado, mesSet.descontrolado)
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

export function getRecommendationA(consumo: number, mes: number): { value: number, label: string } {
    const consumoSet = fuzzifyConsumo(consumo);
    const mesSet = fuzzifyMes(mes);
    const recommendationSet = applyRules(consumoSet, mesSet);
    return defuzzify(recommendationSet);
}