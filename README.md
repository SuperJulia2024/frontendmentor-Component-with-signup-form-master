# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
 - [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/SuperJulia2024/frontendmentor-Component-with-signup-form-master](https://github.com/SuperJulia2024/frontendmentor-Component-with-signup-form-master)
- Live Site URL: [https://superjulia2024.github.io/frontendmentor-Component-with-signup-form-master](https://superjulia2024.github.io/frontendmentor-Component-with-signup-form-master)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- Sass (scss)

### What I learned

Use of Sass (scss)

How to validate values in a form and display error messages:

```js
function buttonCheck() {
  if (!$("#first-name")[0].checkValidity()) {
    $("#label-first-name").css("display", "block");
    $("#first-name").css("border-color", "hsl(0, 100%, 74%)");
    $("#first-name").css("border-width", "2px");
    $("#first-name").attr("placeholder", "");
  } else {
    $("#label-first-name").css("display", "none");
    $("#first-name").css("border-color", "hsl(246, 25%, 77%)");
    $("#first-name").attr("placeholder", "First Name");
  }

  if (!$("#last-name")[0].checkValidity()) {
    $("#label-last-name").css("display", "block");
    $("#last-name").css("border-color", "hsl(0, 100%, 74%)");
    $("#last-name").css("border-width", "2px");
    $("#last-name").attr("placeholder", "");
  } else {
    $("#label-last-name").css("display", "none");
    $("#last-name").css("border-color", "hsl(246, 25%, 77%)");
    $("#last-name").attr("placeholder", "Last Name");
  }

  if (!$("#email")[0].checkValidity()) {
    $("#label-email").css("display", "block");
    $("#email").css("border-color", "hsl(0, 100%, 74%)");
    $("#email").css("border-width", "2px");
    $("#email").css("color", "hsl(0, 100%, 74%)");
    $("#email").attr("placeholder", "");
  } else {
    $("#label-email").css("display", "none");
    $("#email").css("border-color", "hsl(246, 25%, 77%)");
    $("#email").attr("placeholder", "Email Address");
  }

  if (!$("#password")[0].checkValidity()) {
    $("#label-password").css("display", "block");
    $("#password").css("border-color", "hsl(0, 100%, 74%)");
    $("#password").css("border-width", "2px");
    $("#password").attr("placeholder", "");
  } else {
    $("#label-password").css("display", "none");
    $("#password").css("border-color", "hsl(246, 25%, 77%)");
    $("#password").attr("placeholder", "Password Name");
  }
}
```

## Author

- Frontend Mentor - [@SuperJulia2024](https://www.frontendmentor.io/profile/SuperJulia2024)

## Acknowledgments

Thanks to FrontEndmentor for tyis amazing challenge
