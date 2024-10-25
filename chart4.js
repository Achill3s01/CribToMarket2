const ctx = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Bearish', 'Bullish'],
      datasets: [{
        label: 'Fear and Greed Index',
        data: [25, 75],
        backgroundColor: 
          [ 'rgba(250, 45, 45, 0.2)', 'rgba(45, 250, 62, 0.2)']
          
  
        ,
        borderColor: 
          ['rgba(250, 45, 45, 1)', 'rgba(45, 250, 62, 1)']
          
  
        ,
        borderWidth: 1
      }]
    },
    options: {
      
    }
  });
  