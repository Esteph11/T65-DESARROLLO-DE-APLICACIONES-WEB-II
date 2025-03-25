'use client'
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getPromedioProductoSegmento } from '@/app/Servicios/Api';

// Registrar los componentes necesarios para ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export default function Page() {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: '',
        data: [] as number[],
        borderColor: '',
        backgroundColor: '',
        fill: true,
      },
    ],
  });

  useEffect(() => {
    getPromedioProductoSegmento().then((data: any[]) => {
      const labels = data.map((item) => item.productSegmentCode);
      const averages = data.map((item) => item.promedio);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Promedio por segmento',
            data: averages,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}
