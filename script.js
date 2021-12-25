const slideshow = document.querySelector(".slideshow");

// Now the way will do this slideshow, by removing first link element and add it back to the link as the 
// last link

//it takes two arguments, the first one is the callback function, which get executed after each interval, as
//for the second argument its the amount of interval itself.
setInterval(() => {
    const firstIcon = slideshow.firstElementChild;//it going to be th child of slideshow
    firstIcon.classList.add("faded-out");
    //So now the icon is removing, but without any fade effect because transition effect needs
    //some time, actually half of the second

    const thirdIcon = slideshow.children[3];
    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");

    //In order to that i am going to use one of the method, called settimeout, it allows us to
    //execute the function once after some delay time.
    setTimeout(() => {
        slideshow.removeChild(firstIcon);
        slideshow.appendChild(firstIcon);
        //So now item will be appended without any fade effect, so we need to wait for 
        //half seconds.
        setTimeout(() => {
            firstIcon.classList.remove("faded-out");
        }, 500);
    },500)
}, 3000);
 