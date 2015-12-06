console.log(window.cleanData)
// [ [year, age group, number], ...[] ... [] .....]

function filterByYear(year){
  year = year.toString();
  console.log(year + "I was called!");
  return _.filter(window.cleanData, function(data){
    return data[0] === year;

  });
}

function howManyYears(){
  var onlyYears =_.map(window.cleanData, function(data){
    return data[0];
  })
  return _.uniq(onlyYears)
}

var appendYears = d3.select('body .years').selectAll('button')
                                          .data(howManyYears())
                                          .enter().append('button')
                                          .text(function(d){
                                            return d;
                                          })
                                          .attr('onclick', function(d){

                                            return 'render('+d+')'
                                          })
                                          ;

var render = function(year){
  d3.select('body .yearIndicator').selectAll('p').remove();
  var dataArray = filterByYear(year);
  var showYear = d3.select('body .yearIndicator').append('p').text('Year Selected: ' + year)
  var buildCharts = d3.select('body .visual').selectAll('div')
                                             .data(dataArray)
                                             .attr('style', function(d){
                                              return 'width:' + d[2]/100 + 'px';  
                                             })
                                             .text(function(d){
                                              return d[1]
                                             });

                                             buildCharts.enter().append('div')
                                             .attr('style', function(d){
                                              return 'width:' + d[2]/100 + 'px';  
                                             })
                                             .text(function(d){
                                              return d[1]
                                             });
  var showYear = d3.select('body ')

}