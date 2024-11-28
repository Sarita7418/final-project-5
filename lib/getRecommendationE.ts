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
        exceso_moderado: trimf(consumo, 1.13852242744063, 1.29, 1.42),
        critico_moderado: trimf(consumo, 1.33, 1.50527704485488, 1.67),
        critico_alto: trimf(consumo, 1.61, 1.75, 1.86675461741425),
        descontrolado: trimf(consumo, 1.78759894459103, 2.01, 2.01),
    };
}

function fuzzifyCantidadHuesped(cantidad: number): FuzzySet {
    return {
        exceso_leve: trimf(cantidad, 1, 1, 2.57915567282322),
        exceso_moderado: trimf(cantidad, 2.18, 3.34, 5.14379947229552),
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
        { value: 0.06, label: 'Mayor ocupación y uso de equipos Verificar los niveles de ocupación y ajustar los horarios de climatización y luz en lugares no concurridos.' },
        { value: 0.23, label: 'Equipos defectuosos o sistemas automáticos desajustados.Inspeccionar los sistemas de climatización y los equipos eléctricos de alto consumo.' },
        { value: 0.48, label: 'Fugas eléctricas o mal funcionamiento en sistemas de refrigeración.Realizar una revisión técnica completa del sistema eléctrico, incluyendo paneles y medidores del area.' },
        { value: 0.725, label: 'Uso ineficiente de energía o fallas graves en equipos eléctricos.Realizar una inspección completa de todos los equipos y sistemas de energía.Reemplazar equipos defectuosos o ineficientes, como sistemas de refrigeración, iluminación y ascensores del area.' },
        { value: 0.9, label: 'Sobrecarga en el sistema eléctrico, fallo de equipos principales o mal uso generalizado.Cortar temporalmente el suministro eléctrico en las áreas no críticas para evitar más desperdicio.Notificar a los encargados de mantenimiento para una revisión urgente de todo el sistema eléctrico.' }
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

export function getRecommendationE(consumo: number, cantidad: number): { value: number, label: string } {
    const consumoSet = fuzzifyConsumo(consumo);
    const cantidadSet = fuzzifyCantidadHuesped(cantidad);
    const recommendationSet = applyRules(consumoSet, cantidadSet);
    return defuzzify(recommendationSet);
}