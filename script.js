
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