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

// sample data set
var users = [
  {id: 1, name: 'Mark Miller'},
  {id: 2, name: 'Bill Wilson'},
  {id: 3, name: 'John Moore'},
  {id: 4, name: 'Alfred Taylor'}
];

// set the drop donw the drop down list
function setDropdDownList(keyword){
  // $("#search-results").addClass('show');
  $("#search-results").empty();
  var options = users.filter(function(user){
    if(keyword){
      return user.name.toLowerCase().search(keyword.toLowerCase()) != -1
    }else{
      return true;
    }
    
  }).map(function(user) {
    return '<a class="dropdown-item" href="#" data-user-id="'+user.id+'" onclick="selectUser($event)">'+user.name+'</a>'
  });

  $("#search-results").append(options);
};
// set drop down list on page load
setDropdDownList();

// on user select
function selectUser(user) {
  console.log(user)
}


// on search value change 
$("#search-input").bind("keyup", function(e) {
  console.log(e.target.value);
  setDropdDownList(e.target.value);

})

// on search focus display the drop down list
$( "#search-input" ).focus(function() {
  $("#search-results").addClass('show');
});

// on search focus out display the drop down list
$( "#search-input" ).blur(function() {
  $("#search-results").removeClass('show');
});


