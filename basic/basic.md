## SVG (Scalable Vector Graphics)

SVG is a text-based format. Each SVG image is defined using markup code similar to HTML.
SVG code can be included directly within any HTML document, or inserted dynamically into the DOM.
Every web browser supports SVG except IE 8 or earlier.
SVG is XML-based.

In D3, before you can dray anything, you must create SVG element.
At a minimum, it's good to specify width and height values.

    <svg width="500", height="50">
    </svg>

Note: Pixels are teh default measurement units in D3. So, 500 is same as 500px.

####Simple Shapes

* rect
* circle
* ellipse
* line
* text
* path

#####rect - draws a rectangle
x, y : co-ordinate of the upper-left corner of the rectangle
width and height: specify dimensions of rectangle

    <rect x="0", y="0", width="500", height="50"/>

#####circle - draws a circle
cx, cy : co-ordinate of the center of the circle
r: radius

    <circle cx="250", y="25", r="25"/>

#####ellipse
ellipse is similar to a circle but expects radius values for each axis.

    <ellipse cx="250", cy="50", rx="100", ry="25"/>

#####line
x1,y1 - coordinates of one end of the line
x2,y2 - coordinates of the other end of the line
stroke color must be specified for the line to be visible

    <line x1="0", y1="0", x2="200", y2="50", stroke="black"/>

#####text

    <text x="250" y="25">Easy-peasy</text>

    <text x="250" y="25" font-family="serif" font-size="25" fill="grey">Sample Text</text>

#####Drawing basic rectangle

    <rect x="0", y="0", width="500", height="50">


####Styling SVG Elements

SVG's default style is a black fill with no stroke.
Common SVG properties:
* fill: a color value
* stroke: a color value
* stroke-width: a numeric measurement(default is pixels)
* opacity: a numeric value between 0.0 (completely transparent) and 1.0 (completely opaque)

There are two ways to apply styles to an SVG element.
* inline - as an attribute of the element
* CSS style rule
