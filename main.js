var tl = gsap.timeline({
    
    scrollTrigger: {
        trigger: '.col-1',
        trigger: '.col-2',
        start: 'center bottom'
    }
})
tl.from('.col-2', {x: 200, opacity: 0, duration: 0.7})
tl.from('.col-1', {y: 300, opacity: 0, duration: 0.7}, "-=1")


var tl = gsap.timeline({
    
    scrollTrigger: {
        trigger: '.section2title',
        start: 'center bottom'
    }
})

tl.from('.section2title', {y: 200, opacity: 0, duration: 0.5})
tl.from('.grid-container2', {y: -300, opacity: 0, duration: 0.5}, "-=1")
tl.from('.grid-container', {y: -300, opacity: 0, duration: 0.5}, "-=1")


var tl = gsap.timeline({
    
    scrollTrigger: {
        trigger: '#section2',
        start: 'center bottom'
    }
})

tl.from('.section3title', {y: -300, opacity: 0, duration: 1})
tl.from('.sec3-col-1', {x: -200, opacity: 0, duration: 1}, "-=1")
tl.from('.sec3-col-2', {x: 500, opacity: 0, duration: 1.1}, "-=0.5")

