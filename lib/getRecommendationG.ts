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
        exceso_leve: trimf(consumo, 1, 1, 1.19393139841689),
        exceso_moderado: trimf(consumo, 1.12269129287599, 1.24, 1.37),
        critico_moderado: trimf(consumo, 1.3, 1.5, 1.68),
        critico_alto: trimf(consumo, 1.6, 1.70580474934037, 1.9),
        descontrolado: trimf(consumo, 1.78759894459103, 2.01, 2.01),
    };
}

function fuzzifyCantidadHuesped(cantidad: number): FuzzySet {
    return {
        exceso_leve: trimf(cantidad, 1, 1, 2.57915567282322),
        exceso_moderado: trimf(cantidad, 2.1487598944591, 3.3387598944591, 4.6687598944591),
        critico_moderado: trimf(cantidad, 4.09894459102902, 5.67, 7.12),
        critico_alto: trimf(cantidad, 6.61609498680739, 7.64, 9.03),
        descontrolado: trimf(cantidad, 8.15963060686016, 10, 10),
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
        { value: 0.06, label: 'Consumo ligeramente elevado Ajustar las temperaturas de calefacción según la ocupación real del hotel.Verificar el uso de cocinas  del area y asegurar que estén funcionando de manera eficiente.' },
        { value: 0.23, label: 'Fugas menores o uso ineficiente,Revisar sistemas de calefacción y detectar posibles fugas en las tuberías de gas.' },
        { value: 0.48, label: 'Fugas de gas significativas o mal funcionamiento en sistemas de calefacción.Inspeccionar las instalaciones y sistemas de gas en busca de fugas o fallas.Cortar temporalmente el suministro en áreas afectadas mientras se realizan las reparaciones.Asegurar el correcto aislamiento de las instalaciones de gas para evitar pérdidas.' },
        { value: 0.725, label: 'Uso desmedido de gas.Realizar una inspección detallada de las calderas y equipos de calefacción, buscando fallas en la combustión o pérdida de eficiencia. Revisar exhaustivamente el sistema de gas, especialmente en las áreas de cocina, lavandería y en las conexiones de calefacción. En caso de detectar fugas importantes, detener el flujo de gas y contactar con en personal de mantenimiento de manera urgente.Implementar un plan de contingencia para garantizar que se sigan operaciones esenciales mientras se resuelve el problema.' },
        { value: 0.9, label: 'Fugas masivas o mal funcionamiento.Cortar inmediatamente el suministro de gas en las áreas afectadas y evacuar si es necesario. Realizar una inspección urgente de todo el sistema de gas, incluyendo el sistema central y todas las válvulas de seguridad. Implementar un plan de mantenimiento preventivo para revisar periódicamente las instalaciones de gas y evitar que surjan problemas graves.' }
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

export function getRecommendationG(consumo: number, cantidad: number): { value: number, label: string } {
    const consumoSet = fuzzifyConsumo(consumo);
    const cantidadSet = fuzzifyCantidadHuesped(cantidad);
    const recommendationSet = applyRules(consumoSet, cantidadSet);
    return defuzzify(recommendationSet);
}