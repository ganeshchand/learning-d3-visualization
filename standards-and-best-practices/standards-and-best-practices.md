#D3 Standards and Best Practices

###Margin Convention
 First define the margin object with properties for the four sides (clockwise from the top, as in CSS).

 var margin = {top: 20, right: 10, bottom: 20, left: 10};
 Then define width and height as the inner dimensions of the chart area.

 var width = 960 - margin.left - margin.right,
     height = 500 - margin.top - margin.bottom;
 Lastly, define svg as a G element that translates the origin to the top-left corner of the chart area.

 var svg = d3.select("body").append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 With this convention, all subsequent code can ignore margins. For example, to create x and y scales, simply say:

 var x = d3.scale.linear()
     .range([0, width]);

 var y = d3.scale.linear()
     .range([height, 0]);
 If you want to add axes to the chart, they will be positioned correctly by default in the "left" and "top" orientations. For "right" or "bottom" orientation, translate the axis G element by the width or height, respectively.

 [Detail](http://bl.ocks.org/mbostock/3019563)
