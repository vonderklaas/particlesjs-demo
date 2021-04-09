// Check if library is loaded
console.log(particlesJS);

particlesJS.load('particles-js', 'particles.json', () => {
    // Cb fires when json file, loaded correctly
    console.log('particle.json loaded...');
});