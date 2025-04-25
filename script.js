const ctx = document.getElementById('tradeChart').getContext('2d');

const tradeChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Price ($)',
      data: [],
      borderColor: 'lime',
      backgroundColor: 'rgba(0,255,0,0.1)',
      pointRadius: 4,
      pointBackgroundColor: 'yellow',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    animation: false,
    scales: {
      x: {
        title: { display: true, text: 'Time' },
        ticks: { color: '#aaa' }
      },
      y: {
        title: { display: true, text: 'Price ($)' },
        ticks: { color: '#aaa' }
      }
    },
    plugins: {
      legend: { labels: { color: '#fff' } },
      tooltip: {
        callbacks: {
          label: ctx => `Price: $${ctx.parsed.y.toFixed(2)}`
        }
      }
    }
  }
});

function simulateTrade() {
  const now = new Date();
  const timeLabel = now.toLocaleTimeString('en-US', { hour12: false });

  const price = 200 + Math.random() * 40 - 20;

  tradeChart.data.labels.push(timeLabel);
  tradeChart.data.datasets[0].data.push(price);

  if (tradeChart.data.labels.length > 30) {
    tradeChart.data.labels.shift();
    tradeChart.data.datasets[0].data.shift();
  }

  tradeChart.update();
}

setInterval(simulateTrade, 2000);
