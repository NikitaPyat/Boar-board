<template>
  <header class="board-app__header">
    <div class="board-app__inner">
      <h1>Канбан-доска</h1>
    </div>
  </header>
  <board-component />
</template>

<script>
import { defineComponent } from 'vue'
import boardComponent from './components/Board/BoardComponent.vue'
export default defineComponent({
  name: 'App',
  components: {
    boardComponent
  }
})
</script>

<style>
@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "Muller";
  font-display: swap;
  src: local("Muller"), url("assets/fonts/MullerRegular.woff2") format("woff2"),
    url("assets/fonts/MullerRegular.woff") format("woff");
}

@font-face {
  font-style: normal;
  font-weight: 500;
  font-family: "Muller";
  font-display: swap;
  src: local("Muller"), url("assets/fonts/MullerMedium.woff2") format("woff2"),
    url("assets/fonts/MullerMedium.woff") format("woff");
}

@font-face {
  font-style: normal;
  font-weight: 700;
  font-family: "Muller";
  font-display: swap;
  src: local("Muller"), url("assets/fonts/MullerBold.woff2") format("woff2"),
    url("assets/fonts/MullerBold.woff") format("woff");
}

:root {
  --main-font: "Muller", "Helvetica", sans-serif;

  --main-blue: #2f80ed;
  --main-bg: #eef4fb;
  --text-main-color: #333333;
  --basket-red-color: #c9666c;

  --light-gray: #e3e3e3;
  --light-blue: #d6e7ff;
  --light-green: #d7f9e0;
  --light-red: #fbe3e3;
  --red: #c9666c;

  --btn-hover-color: #82b6ff;
  --btn-active-color: #0061e4;
  --btn-clear-hover-color: #d18d91;
  --btn-clear-active-color: #a04b50;

  --input-border-active-color: #82b6ff;
  --task-active-border-color: #d6d6d6;
  --inactive-color: #d0d0d0;

  --animation: 0.155s ease-in-out;
}
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  min-width: 1280px;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img,
video,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
  border-radius: 0;
}

textarea::placeholder {
  opacity: 1;
}

textarea:invalid {
  box-shadow: none;
}

select {
  border-radius: 0;
}

input::-ms-clear,
input::-ms-reveal {
  display: none;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  appearance: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

select,
textarea,
input:matches([type="email"], [type="number"], [type="password"], [type="search"], [type="tel"], [type="text"], [type="url"]) {
  appearance: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: none;
}

body {
  font-family: var(--main-font);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  color: #333333;
}

a {
  text-decoration: none;
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

template {
  display: none;
}

.button {
  display: flex;
  align-items: center;
  border: none;
  min-width: 165px;
  min-height: 46px;
  padding-left: 31px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  border-radius: 8px;
  transition: var(--animation);

  cursor: pointer;
}

.button svg {
  flex-shrink: 0;
  margin-right: 4px;
}

.button:hover {
  background-color: var(--btn-hover-color);
}

.button:active,
.button:focus {
  outline: none;
  background-color: var(--btn-active-color);
}

.button--clear {
  background-color: var(--red);
}

.button--clear:hover {
  background-color: var(--btn-clear-hover-color);
}

.button--clear:active,
.button--clear:focus {
  background-color: var(--btn-clear-active-color);
}

.button--clear:disabled {
  background-color: var(--light-gray);
  cursor: initial;
}

.button span {
  position: relative;
  top: 1px;
}

.board-app__inner {
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
}

.board-app__inner h1 {
  font-size: 32px;
}

.board-app__header {
  padding: 24px 0;
  padding-bottom: 20px;

  color: #ffffff;
  background-color: var(--main-blue);
}
</style>
