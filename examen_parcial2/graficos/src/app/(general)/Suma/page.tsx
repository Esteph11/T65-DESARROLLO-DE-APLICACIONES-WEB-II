'use client'
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { getSumaProductosMarca } from '@/app/Servicios/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Page() { 
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: '',
      data: [] as number[], 
      backgroundColor: [] as any,
    }]
  });

  useEffect(() => {
    getSumaProductosMarca().then(data => {
      const labels = data.map((item: any) => `${item.brandCode}`);
      const counts = data.map((item: any) => (item.total_count)); 

      setCharData({
        labels,
        datasets: [{
          label: 'Cantidad de Productos por Marca',
          data: counts, 
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ]
        }]
      });
    });
  }, []);

  return (
    <div>
      <Pie data={charData} />
    </div>
  );
}
