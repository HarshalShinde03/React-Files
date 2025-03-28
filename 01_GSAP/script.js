// gsap.to("#box", {
//     x : 900,
//     duration : 2,
//     delay : 1,
//     scale : 0.5,
//     backgroundColor : "yellow"
// }) 

// let header = document.querySelector('#second-div h1')
// console.log(header);

// gsap.from(header, {
//     opacity: 0,      // Start with opacity 0
//     y: -50,          // Move the header up by 50 pixels
//     duration: 1,     // Animation duration in seconds
//     ease: 'power2.inOut', // Easing function (optional)
// });

// gsap.to(header, {
//     x : 600,
//     // opacity : 0,
//     duration : 2,
//     delay : 0.3,
//    color : 'red',
//    ease: 'power2.inOut'
// })

// gsap.to("h1",{
//     x : 500,
//     duration: 1,
//     delay : 0.1,
//     // stagger : 1,
//     repeat : 2,
//     yoyo : true
//     }
// )




var tl = gsap.timeline();

tl.to("h1",{
    x : 500,
    duration : 1 ,
    yoyo :true,
    repeat : 6
})
tl.to("h2",{
    x : 400,
    duration : 2
})
tl.to("h3",{
    x : 300,
    duration : 1
})