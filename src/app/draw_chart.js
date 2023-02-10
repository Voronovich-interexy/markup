import Chart from 'chart.js/auto';

const worker = new Worker('../worker.js');

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

worker.onmessage = (e) => {
  new Chart(document.getElementById('line-chart'), {
    type: 'line',
    data: {
      labels: e.data.xVal,
      datasets: [
        {
          data: e.data.yVal,
          label: 'Some info',
          borderColor: '#3e95cd',
          fill: false,
          backgroundColor: '#3e95cd',
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Chart',
      },
      plugins: {
        customCanvasBackgroundColor: {
          color: '#e2c9ff',
        },
      },
    },
    plugins: [plugin],
  });
};
