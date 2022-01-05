export const treeChartData = {
    type: "line",
    data: {
      labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
      datasets: [
        {
          label: "Number of trees planted in world by Resilience agency (millions)",
          data: [0, 0, 5, 10, 43, 78, 120],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      },
    }
  };
  
  export default treeChartData;