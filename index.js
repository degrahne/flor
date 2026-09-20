document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);

    let index = 0;
    let autoSlide;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let width = track.offsetWidth;

    function updateSlide(animate = true) {
        track.style.transition = animate ? 'transform 0.4s ease' : 'none';
        track.style.transform = `translateX(${-index * width}px)`;
    }

    function startAuto() {
        stopAuto();
        autoSlide = setInterval(() => {
            index = (index + 1) % slides.length;
            updateSlide();
        }, 3000);
    }

    function stopAuto() {
        clearInterval(autoSlide);
    }

    startAuto();

    function startDrag(e) {
        stopAuto();
        isDragging = true;
        startX = e.type.includes('mouse')
            ? e.pageX
            : e.touches[0].clientX;
        currentX = startX;
        track.style.cursor = 'grabbing';
    }

    function onDrag(e) {
        if (!isDragging) return;

        const x = e.type.includes('mouse')
            ? e.pageX
            : e.touches[0].clientX;

        const delta = x - startX;
        track.style.transition = 'none';
        track.style.transform = `translateX(${delta - index * width}px)`;
        currentX = x;
    }

    function endDrag() {
        if (!isDragging) return;

        const diff = currentX - startX;

        if (Math.abs(diff) > width / 4) {
            if (diff < 0) index++;
            else index--;
        }

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        updateSlide();
        isDragging = false;
        track.style.cursor = 'grab';
        startAuto();
    }

    track.addEventListener('mousedown', startDrag);
    track.addEventListener('touchstart', startDrag);


    window.addEventListener('mousemove', onDrag);
    window.addEventListener('touchmove', onDrag);

    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);

    window.addEventListener('resize', () => {
        width = track.offsetWidth;
        updateSlide(false);
    });
});

function abrirGaleria() {
  document.getElementById("modalGaleria").style.display = "block";
  document.body.style.overflow = "hidden";
}

function cerrarGaleria() {
  document.getElementById("modalGaleria").style.display = "none";
  document.body.style.overflow = "auto";
}
