# Clicky Game

## Overview
This is a memory game with React.


## Instructions

* The application renders images to the screen. Each image listens for click events.

* The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.

* Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

* Once the user's score is reset after an incorrect guess, the game restarts.


## Program Logic:

* Broke up application's UI into components, managed component state, and responded to user events.

* Used array methods map() with Math.random() and sort() to shuffle and render characters in different order each time

* Set clicked to false initially for each character

* Each image  listen for click events.

* on onCharacterClick 
    - if ( !this.state.characters[index].clicked )
            shuffled the characters and incremented score by 1
    - else
        reset score to 0