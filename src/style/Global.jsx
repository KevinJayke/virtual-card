import { createGlobalStyle } from "styled-components";
import fontsCss from "./fonts.module.css";

// Welcome to Global Styles! This file resets all the default styling
// and provides a consistent base for the application's layout.

// Additionally, we import the fonts module and add it to the global theme,
// ensuring that all styled components have access to the custom fonts.

export const GlobalStyles = createGlobalStyle`
/* Import custom fonts */
${fontsCss}

/* Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
box-sizing: border-box;
}

/* Remove default margin */

* {
    margin: 0;
    }

/* Allow percentage-based heights in the application */
html,
body {
background-color: ${(props) => props.theme.colors.background};
height: 100%;
}

/* Improve typography */
body {
line-height: 1.5;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

/* Improve media defaults */
img,
picture,
video,
canvas,
svg {
display: block;
max-width: 100%;
}

/* Remove built-in form typography styles */
p,
h1,
h2,
h3,
h4,
h5,
h6,
input,
button,
textarea,
select {
font: inherit;
}

/* Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
overflow-wrap: break-word;
}

/* Create a root stacking context */
#root,
#__next {
isolation: isolate;
}


`;
