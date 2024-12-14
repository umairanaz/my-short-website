
let count = 0;
let counter = setInterval(function () {
    count++;
    document.querySelector(".counter").textContent = count.toString();
    if (count === 100) {
        clearInterval(counter);
        $('.counter').addClass('hide');
        $('.container').addClass('active');
    }
}, 10);

gsap.timeline()
    .from(".navbar h5", 
        { y: -50, 
            delay:3,
            opacity: 0, 
            duration: 1, 
            stagger: 0.3 })
    .from(".main", { x: -100, 
        opacity: 0,
         duration: 2 })
    .from(".about", { x: 1300, 
        opacity: 0, 
        duration: 2 });

gsap.from('.scroll h2', {
    x: -1300,
    duration: 1,
    scrollTrigger: {
        trigger: ".scroll",
        scrub: true,
        start: "top 0%",
        end: "top -100%",
        pin: true
    }
});

gsap.from('.last img', {
    x: -1300,
    duration: 1,
    scrollTrigger: {
        trigger: ".last",
        scrub: true,
        start: "top 0%",
        end: "top -100%",
        pin: true
    }
});


