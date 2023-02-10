# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

Desktop 
![](./screenshots/Social%20Media%20Dashboard%20-%20Desktop%20Light.png)
![](./screenshots/Social%20Media%20Dashboard%20-%20Desktop%20Dark.png)

Mobile  
![](./screenshots/Social%20Media%20Dashboard%20-%20Mobile%20Light.png)
![](./screenshots/Social%20Media%20Dashboard%20-%20Mobile%20Dark.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](sass-lang.com) - CSS Preprocessor

### What I learned

I think there were two most challenging situations on this one.

The first one was about the gradient border on the instagram card. I did not work the usual way (``border-top: 1px solid linear.../respective variable``), so in order to solve this I used two containers and three classes, the first one being the ``header-card`` for setting a default to all cards and the second one ``inner-elements-wrapper`` as the one which contains the info. I used the third class ``h-{media}`` to personalize each card based on their media. In this example was ``h-instagram``.

```html
<div class="header-card h-instagram">
  <div class="inner-elements-wrapper">
    <div class="media-user">
      <img class="media" src="./images/icon-instagram.svg" alt="Facebook">
      <p class="user">@realnathanf</p>
    </div>

    <div class="amount-followers">
      <p class="amount">11k</p>
      <p class="followers">Followers</p>
    </div>

    <div class="daily-changes">
      <img src="./images/icon-up.svg" alt="up">
      <p class="up">1099 Today</p>
    </div>
  </div>
</div>
```
```css
$p-Twitter: hsl(203, 89%, 53%);
$p-Instagram: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));

.h-twitter{
    background: $p-Twitter;
}

.h-instagram{
    background: $p-Instagram;
}
```

The ``inner...`` was slightly smaller than ``header-card`` so we can see the background effect on the top. 

The second situation was about switching themes attributes. SCSS variables is not the same as CSS ones, so I had to declare them like pure CSS (the first lines are SCSS and from ``:root`` and on are pure CSS).

```
$p-LimeGreen: hsl(163, 72%, 41%);
$p-BrightRed: hsl(356, 69%, 56%);
$p-Facebook: hsl(208, 92%, 53%);
$p-Twitter: hsl(203, 89%, 53%);
$p-Instagram: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
$p-YouTube: hsl(348, 97%, 39%);

:root{
    --bg: hsl(0, 0%, 100%);
    --top-bg-pattern: hsl(225, 100%, 98%);
    --card-bg: hsl(227, 47%, 96%);
    --card-bg-hover: hsl(232, 33%, 91%);
    --heading-text: hsl(228, 12%, 44%);
    --content-text: hsl(230, 17%, 14%);
    --primary-switch-toggle: hsl(230, 22%, 74%);
    --secondary-switch-toggle: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
}

.dark{
    --bg: hsl(230, 17%, 14%);
    --top-bg-pattern: hsl(232, 19%, 15%);
    --card-bg: hsl(228, 28%, 20%);
    --card-bg-hover: hsl(228, 26%, 27%);
    --btn: hsl(233, 24%, 27%);
    --heading-text: hsl(228, 34%, 66%);
    --content-text: hsl(0, 0%, 100%);
}
```

I have found out that this can be done with scss mixings but I do not know how to use it yet and this way seemed less complicated.


### Continued development

Well, it felt kind of wrong using pure css variables on scss since it has a way to do it on its own (mixings), so I intend to learn that.

### Useful resources

- [How to implement switchable themes in scss?](https://stackoverflow.com/questions/64390664/how-to-implement-switchable-themes-in-scss) - This section brings up some ways to set up theme switch with scss.

## Author

- Frontend Mentor - [@nicoams](https://www.frontendmentor.io/profile/nicoams)