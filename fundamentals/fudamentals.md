<!-- note: Install Markdown Preview extension on Chrome Browser -->

##Fundamentals

####Working with D3 requires an appreciation of the following concepts.

### HTML
    Hypertext Markup Language is used to structure content for web browsers.
    The simplest HTML page looks like this:
        <html>
            <head>
                <title>Page Title</title>
            </head>
            <body>
                <h1>Page Title</h1>
                <p>This is a really interesting paragraph.</p>
            </body>
        </html>

### CSS
    Cascading Style Sheets are used to style the visual presentation of HTML pages.
    A simple CSS stylesheet looks like this:

        body {
            background-color: white;
            color: black;
        }
#### More on CSS
 CSS styles consist of selectors and rules (aka properties).
    Selectors are followed by properties, grouped in curly brackets.

    Selectors identify specific elements to which styles will be applied:

        h1          /* Selects level 1 headings              */
        p           /* Selects paragraphs                    */
        .caption    /* Selects elements with class "caption" */
        #subnav     /* Selects element with ID "subnav"      */

    Rules are properties that, cumulatively, form the styles:

        color: pink;
        background-color: yellow;
        margin: 10px;
        padding: 25px;

    We connect selectors and rules using curly brackets:

        p {
            font-size: 12px;
            line-height: 14px;
            color: black;
        }

    Same properties applied to multiple selectors

        p,
        li {
            font-size: 12px;
            line-height: 14px;
            color: orange
            }

    CSS Selectors: D3 uses CSS-style selectors
    *   Types selectors
        *   h1
        *   p
        *   strong
        *   em
        *   div
    *   Descendant selectors
        *   h1 em <!-- selects em elements contained in an h1 -->
        *   div p <!-- selects p elements contained in an a div -->
    *   Class selectors: These match elements of any type that have been assigned a specific class
        *   e.g.
             *   .caption    /* selects elements with class "caption" */
             *   .bar .highlight /* multiple class selectors */
    *   ID selectors: These match single element with a given ID
            *   e.g.
                 *   #header    /* selects elements with ID "header" */
                 *   #nav

    *   Combining selectors
        *   e.g.
            *   div.sidebar /* select all divs only with class "sidebar", ignore other divs */
            *   #button.on /*select element with ID "button" with class "on"
#### Properties and Values
Groups of property/value pairs cumulatively form the styles.
e.g.
margin: 10px;
padding: 25px;
background-color: yellow;
color: pink;
font-family: Helvetica, Ariel;

Colors can be specified in several ways:
Named colors: orange
Hex Values: #3388aa or #38a
RGB values: rgb(10, 150, 20)
RGB with alpha transparency(10, 150, 20, 0.5)

For complete CSS property reference, click [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

####Applying CSS styles
*   Embed CSS in your HTML: <style> </style>
*   Reference an external stylesheet from the HTML: <link rel="stylesheet" href="styles.css">
*   Attache inline style: <p style="color: blue; font-size: 48px"<p/>





