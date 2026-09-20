
document.addEventListener('DOMContentLoaded', () => {
    const flower = document.getElementById('flor');

    // Crear brillos dorados
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 5px;
            height: 5px;
            background: #ffd700;
            border-radius: 50%;
            top: ${20 + Math.random() * 160}px;
            left: ${20 + Math.random() * 160}px;
            opacity: 0;
            pointer-events: none;
            box-shadow: 0 0 10px #ffd700;
            animation: sparkle ${1.2 + Math.random() * 1.5}s ${Math.random() * 3}s infinite;
        `;
        flower.appendChild(sparkle);
    }

    // Agregar keyframes de sparkle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1.4); }
        }
    `;
    document.head.appendChild(style);
});
