import React, { useEffect } from 'react';
import { useAuthStore } from '@/app/store';
import { getRecommendationA } from '@/lib/getRecommendationA';
import Icon from './Icon';
import { getRecommendationE } from '@/lib/getRecommendationE';
import { getRecommendationG } from '@/lib/getRecommendationG';
import { Button } from './ui/button';
import Link from 'next/link';

interface AlertaProps {
  handleTabChange: (tab: string) => void;
}

const Alert: React.FC<AlertaProps> = ({ handleTabChange }) => {
  const handleEditClick = () => {
    handleTabChange("AlertasAnomaliasConsumo");
  };

  const { alertas, fetchAlertas } = useAuthStore();

  useEffect(() => {
    fetchAlertas();
  }, [fetchAlertas]);

  const currentMonth = new Date().getMonth() + 1;

  function dataAux(value: number) {
    let title: string, imagen: 'anomaly' | 'alert' | 'consumption' = 'alert';
    if (value < 0.2) {
      title = "Anomalia detectada";
      imagen = 'anomaly';
    } else {
      title = "Alerta detectada";
      imagen = 'alert';
    }
    return { title, imagen };
  }

  return (
    <div className="alerts">
      {alertas.map((alerta) => {
        let recommendation;
        let title: string = '', imagen: 'anomaly' | 'alert' | 'consumption' = 'alert';
        let label: string = '';

        if (alerta.uMedida === '[L]') {
          const consumo = Number(alerta.consumoActual) / Number(alerta.limiteConsumo);
          recommendation = getRecommendationA(consumo, currentMonth);
        } else if (alerta.uMedida === '[kWh]') {
          const consumo = Number(alerta.consumoActual) / Number(alerta.limiteConsumo);
          recommendation = getRecommendationE(consumo, currentMonth);
        } else if (alerta.uMedida === '[m^3]') {
          const consumo = Number(alerta.consumoActual) / Number(alerta.limiteConsumo);
          recommendation = getRecommendationG(consumo, currentMonth);
        }

        if (recommendation) {
          ({ title, imagen } = dataAux(recommendation.value));
          label = recommendation.label;
        }

        const currentDateTime = new Date();
        const formattedDate = currentDateTime.toLocaleDateString();
        const formattedTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
          <section className="alert-container" key={alerta.id}>
            <Icon type={imagen} />
            <div className="alert-content">
              <span id="alert-text">{title}</span>
              <span><strong>Fecha y Hora:</strong> {formattedDate} {formattedTime}</span>
              <span><strong>Limite de consumo:</strong> {alerta.limiteConsumo} {alerta.uMedida}</span>
              <span><strong>Consumo actual:</strong> {alerta.consumoActual} {alerta.uMedida}</span>
              <span><strong>Recomendación:</strong></span>
              <span>{label}</span>
            </div>
            <div className="alert-buttons">
            <Button variant="outline" className="buttondisabled">
              <Link href="">Eliminar</Link>
            </Button>
            <Button variant="outline" className="button">
              <Link href="/dashboard">Verificar</Link>
            </Button>
          </div>
          </section>
        );
      })}
    </div>
  );
};

export default Alert;