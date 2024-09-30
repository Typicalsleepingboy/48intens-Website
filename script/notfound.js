// Make sure animationData is defined or imported properly
var animationData = { /* Your animation data */ };

// Load the animation
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    animationData: animationData // Use the correct variable name here
});
