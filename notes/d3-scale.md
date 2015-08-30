##Scales

Scales are functions that map from an input input domain to an output range.

[Mike Bostock's blog on d3 scale](https://github.com/mbostock/d3/wiki/Quantitative-Scales)


D3 scales are functions with parameters that you define.
Once they are created, you call the scale() function,
pass it a data value, and it returns a scaled output value.


A D3 Scale is **just a mathematical relationship**, with **no direct visual output**.

There are different types of [scales](https://github.com/mbostock/d3/wiki/Scales):

*   Quantitative Scales
    *   [linear](https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear)

*   [Ordinal Scales](https://github.com/mbostock/d3/wiki/Ordinal-Scales)


*   [Time Scales](https://github.com/mbostock/d3/wiki/Time-Scales)


A scale has **input domain** and **output range**

Input Domain is the range of possible input data values.

Output range is the range of possible output values, commonly used as display values in pixel units.

![ ](images/scale-input-domain-output-range.png)

###Normalization

Normalization is the process of mapping a numeric values to a new value
between 0 and 1, based on the possible minimum and maximum values.

With Linear scales, D3 automatically handles the math
required for the normalization process.

###Creating a Scale

d3.scale.<type>
e.g
var scale = d3.scale.linear();

setting input domain

scale.domain([100, 500]);

setting output range

scale.range([10, 350]);

getting scale output:
scale(100); // returns 10

Instead of specifying the fixed or hardcoded values for the domain,
always specify using the d3.min() and d3.max() values.

[See example here](basic/scales/scale-basic.html)





