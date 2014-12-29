var numbers = [20, 11, 9, 2, 42, 4, 8];

var x = d3.scale.linear()
    .domain([0, d3.max(numbers)])
    .range([0, 420]);

d3.select(".chart")
    .selectAll("div")
        .data(numbers)
    .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });