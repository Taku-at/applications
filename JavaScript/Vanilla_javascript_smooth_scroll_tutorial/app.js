function smoothScroll(target, duration){
    var target = document.querySelector(target); // target is section 2
    var targetPosition = target.getBoundingClientRect().top;


    console.log(targetPosition);
} 

// call the function here
smoothScroll(".section1", 1000);