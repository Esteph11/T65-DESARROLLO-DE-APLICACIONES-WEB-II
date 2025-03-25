'use client'
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getValorProductosCategoria } from '@/app/Servicios/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() { 
  const [chartData, setChartData] = useState({
    labels: [] as string[], 
    datasets: [
      {
        label: 'Valor Total por Categoría',
        data: [] as number[],
        backgroundColor: [] as any,
      }
    ]
  });

  useEffect(() => {
    getValorProductosCategoria().then((data: any[]) => {
      const labels = data.map((item) => (item.DEPARTMENT_ID)); 
      const totals = data.map((item) => (item.total_salary)); 

      setChartData({
        labels,
        datasets: [
          {
            label: 'Valor Total por Categoría',
            data: totals,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ]
          }
        ]
      });
    });
  }, []);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
}
