document.addEventListener('DOMContentLoaded', function () {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from('.hero-title', {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: 'bounce.out'
});

gsap.from('.tagline', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    delay: 0.5,
    ease: 'power2.out'
});

// Cloud animation
gsap.to('#top-cloud', {
    duration: 3,
    x: 50,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

gsap.to('.bottom-cloud', { 
    duration: 3,
    x: -50,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});
// Section animations with scroll trigger
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});
// Skill items animation
gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'back.out(1.7)'
});

// Project cards animation
gsap.from('.project-item', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out'
});


});
