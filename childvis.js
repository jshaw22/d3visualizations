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

function ageGroups(){
  var onlyAges = _.map(window.cleanData, function(data){
    return data[1];
  })
  return _.unique(onlyAges)
}

console.log(ageGroups())
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

var preInitialize = d3.select('body .visual').selectAll('div')
                                             .data(_.range(9))
                                             .enter().append('div');


var render = function(year){
  console.log(d3.select(this))
  d3.select('body .yearIndicator').selectAll('p').remove();
  var dataArray = filterByYear(year);
  var showYear = d3.select('body .yearIndicator').append('p').text('Year Selected: ' + year);
  // var buildCharts = d3.select('body .visual').selectAll('div')
  //                                            .data(dataArray)
  //                                            .attr('style', function(d){
  //                                             return 'width:' + d[2]/200 + 'px';  
  //                                            })
  //                                            .text(function(d){
  //                                             return d[1]
  //                                            });

  preInitialize.data(dataArray).transition().duration(1000)
  .attr('style', function(d){
    return 'height:' + d[2]/400 + 'px; ' + "margin-top:" + (380-d[2]/400) + 'px';  
   })
   .text(function(d){
    return "Age Group: " + d[1] + "\n#: " + d[2]
   })
   .attr('class','bar');

 }


   // var initialAgeGroup = d3.select('body .ageGroup').selectAll('div')
   //                                           .data(ageGroups())
   //                                           .enter().append('div')
   //                                           .attr('class', 'ageAxis')
   //                                           .text(function(d){
   //                                            return d;
   //                                           })
                                             


// var i = 1988;
// setInterval(function(){
//   render(i)
//   i++;
//   if(i===2014){
//     i=1988;
//   }
// },800)






