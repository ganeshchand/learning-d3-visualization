##Axes

Similar to Scales, Axes are functions whose parameters you define.

Unlike scales, when an axis function is called, it **doesn't return a value**. It actually **generates the visual elements
of the axis**, including lines, labels and ticks.

**Important:**

*   Axis functions are **SVG-specific**, as they generate SVG elements.
*   Axis functions are intended to be used with **quantitative scales only**, as opposed to ordinal ones.

Axes are made up of path, line, and text elements.



###Setting up an Axis

var xAxis = d3.svg.axis();

At a minimum, each axis needs to be told on what _**scale**_ to operate.


xAxis.scale(xScale);

####Label orientation

Default orientation is "bottom". Other value is "top".

xAxis.orient("bottom");

Because, a call to axis() appends SVG elements to the DOM, we need to specify _where_ in the
DOM it should place the new elements.

This is usually done by appending a new _**g**_ element to the end of the SVG.
A _**g**_ is a **group** element. Group elements are invisible, unlike line, rect and circle
and they have no visual presence themselves. They typically helps us in two ways:

*   **g** elements can be used to group other elements
*   We can apply **transformations** to **g** elements, which affects how visual elements within that group are rendered.

on **g** element, you use call() function.

[D3's call() function](https://github.com/mbostock/d3/wiki/Selections#call) takes the incoming _selection_,
as received from the prior link in the chain, and hands that selection off to any _function_.

Example: In this example, call() hands off **g** to the **xAxis()** function, so our axis is generated
_within_ **g**.


svg.append("g")
    .call(
        d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
        );

To style axis, assign the appropriate class to the element and use CSS to style the element.

In the above example, we can assign "axis" class to the g element.

var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
svg.append("g").attr("class", "axis").call(xAxis);

CSS style:

<style>

.axis path,
.axis line {

fill: none;
stroke: black;
share-rendering: crispEdges;

}

.axis text {
    font-family: sans-serif;
    font-size: 11px;

}

</style>


When we use CSS rules to style SVG elements, only SVG attribute names - not regular CSS
properties should be used.
Example: in CSS, you use *color* attribute but in SVG element uses *fill* attribute

[Complete reference to SVG attribute list](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)

Use SVG transformations to push the axis to the bottom of the chart.

svg.append("g").attr("class", "axis").attr("transform", "translate("0,"+ (h - padding) + ")").call(xAxis);

[SVG transforms](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) can accept
several different kinds of transform definitions, including scales and rotations.


_**Translation**_ transforms are specified with the easy syntax of translate(x,y), where x and y are, obviously, the number of horizontal and vertical pixels by which to translate the element.


####Ticks
D3 **can automatically** examine scale (e.g. xScale and yScale) and make informed judgements to determine
_**how many**_ ticks are required and at _**what intervals**_

specifying your own number of ticks

var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(5);

When we specify **# of ticks** value, D3 can still **automatically** adjust the ticks if more are required.

D3 interprets the ticks() value as merely a suggestion and will override your suggestion with what it
determines to be the most clean and human-readable values.


**Formatting tick Labels**

The input value may not be in the format we want to display as label.
You use **tickFormat()** function.
To use tickFormat(), first define a new number-formatting function.

Example:
  var formatAsPercentage = d3.format(".1%");
  xAxis.tickFormat(formatAsPercentage);

[Formatting](https://github.com/mbostock/d3/wiki/Formatting) in D3

E.g. To zero fill to a four-digit number

var zero = d3.format("04d");
zero(2); // 0002
zero(123); // "0123

