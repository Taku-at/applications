// // takes three things, span, data-words attributes, waiting duration
// const TypeWritter = function(txtElement, words, wait = 300) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = ''; // Length of Text
//     this.wordIndex = 0; // Start at
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // Type Method
// TypeWritter.prototype.type = function() {
//     // Current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get ful; text of current word
//     const fullTxt = this.words[current];

//     if(this.isDeleting) {
//         // Remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // INsert txt into element
//     this.txtElement.innerHTML = `<sapn class="txt">${this.txt}</span>`

//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting) {
//         typeSpeed /= 2; // 150 
//     }

//     // If word is complete so full text
//     if(!this.isDeleting && this.txt === fullTxt) {
//         // Make pause at end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//         this.deleteing = false;
//         // MOve to next word
//         this.wordIndex++;
//         // Pause before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed)
// }

// ES6 Class create the template
class TypeWriter {
    constructor(txtElement, words, wait = 300) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = ''; // Length of Text
        this.wordIndex = 0; // Start at
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    // prototype method
    type() {
            // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get ful; text of current word
    const fullTxt = this.words[current];

    if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // INsert txt into element
    this.txtElement.innerHTML = `<sapn class="txt">${this.txt}</span>`

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2; // 150 
    }

    // If word is complete so full text
    if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // MOve to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
    }
}


// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute('data-wait');
    // Init Typewriter new is a instance
    new TypeWriter(txtElement, words, wait);
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);