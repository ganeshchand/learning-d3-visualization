


### Interactive and Live HTML/JavaScript development in IntelliJ

* Download LiveEdit Intellij Plugin
* Install JetBrains IDE Support extension in Chrome

* In Intellij, click on Debug. It should load the html on Chrome and any changes in
IntelliJ should reflect on the browser immediately.


### D3 Tips and Tricks

*   .attr("background-color", "red") won't work. Use .style("background-color", "red") instead
if you are specifying in-line element style

* Non d3 objects
if you are specifying attributes, for example, div, you have to specify using style
e.g.                       .style("width", "25px")
                           .style("height", "75px")

if you use style() and don't specify px, it won't work.

style() method is used to apply a CSS property and value directly to an HTML element.

*   You cannot insert/append non d3 objects such as <p> and <div> in svg.


When we use CSS rules to style SVG elements, only SVG attribute names - not regular CSS properties should be used.
This can be little consusing because many properties share the same names in both CSS
and SVG, but some do not. For example, in regular CSS, to set the color of some text
p{
 color: olive;
 }

In SVG
 text {
  color: olive; // will not work  . This will have no effect.
  fill: olive; // will work
 }

 TIPS: If SVG css effect is not working, ALWAYS review SVG property names and make sure
 you are not using CSS names.
 Complete SVG reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute

values for fill:

.path {

fill: none // other values: yes, actual color values:red, green, etc.

}



