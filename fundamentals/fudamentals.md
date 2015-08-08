<!-- note: Install Markdown Preview extension on Chrome Browser -->



## Fundamentals
#### Working with D3 requires an appreciation of the following concepts.
### HTML
Hypertext Markup Language is used to structure content for web browsers.
The simplest HTML page looks like this:

```html

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

CSS styles consist of selectors and rules.
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