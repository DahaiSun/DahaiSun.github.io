document.addEventListener('mousemove', function(e) {
    const cat = document.getElementById('cat');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cat.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
