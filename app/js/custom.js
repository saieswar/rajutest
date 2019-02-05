google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // First Graph Code
  var workqueue_items_data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Account Open', 74],
    ['Personal Loan', 22],
    ['Client Update',  4]
  ]);

  var workqueue_items_options = {
    title: 'Workqueue Items',
    is3D: true,
    backgroundColor: 'none',
    chartArea:{top: 20, width:'100%', height:'100%'},
    legend: {position: 'left', alignment: 'end', textStyle: {color: 'black', fontSize: 12}}
  };

  var chart = new google.visualization.PieChart(document.getElementById('workqueue-items'));

  chart.draw(workqueue_items_data, workqueue_items_options);

  // Second Graph Code
  var workqueue_items_data2 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Open', 30.6],
    ['Completed', 69.4]
  ]);

  var workqueue_items_options2 = {
    title: '',
    is3D: true,
    backgroundColor: 'none',
    chartArea:{top: 20, width:'100%', height:'100%'},
    legend: {position: 'left', alignment: 'end', textStyle: {color: 'black', fontSize: 12}}
  };

  var chart = new google.visualization.PieChart(document.getElementById('workqueue-items2'));

  chart.draw(workqueue_items_data2, workqueue_items_options2);
}