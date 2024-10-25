const socket = io('https://data.gdscnsut.com');

socket.on('random_number', function(data) {
  myChart.data.datasets[0].data.push({
    x: Date.now(),
    y: data.number * 100000
});
myChart.update(); 
  
      
  });


const data = {
 labels: ['Mondayy', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[{
      label: "INR",
      data: [10,9,6,7,4,9,8] ,
      backgroundColor: 
        'rgba(76, 217, 113, 0.2)'
        

      ,
      borderColor: 
        'rgba(76, 217, 113, 1)'
        

      ,

      
      borderWidth: 1,
      barThickness: 10
    }]
};

const config = {
 type: 'line',
  data,
  options: {
    spanGaps: true,
  
    scales: {
     x:{
      type: 'realtime',
      realtime: {
        onRefresh: chart => {
          chart.data.datasets.forEach(dataset => {
           dataset.data.push({
            x: Date.now(), 
            y: data.number 
 
           });
           
          
      
      
            
          });
          
          
        },
      }
      
      
    },
      
      
      y: {
        beginAtZero: true
      }
    }
  }


};

const myChart = new Chart(
 document.getElementById('myChart'),
 config

);




