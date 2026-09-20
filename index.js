
// Pequeño efecto extra: partículas de brillo
document.addEventListener('DOMContentLoaded', () => {
    const flower = document.getElementById('flor');
    
    // Crear pequeños brillos alrededor de la flor
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: #ffd700;
            border-radius: 50%;
            top: ${Math.random() * 180}px;
            left: ${Math.random() * 180}px;
            opacity: 0;
            animation: sparkle ${1.5 + Math.random()}s ${Math.random() * 2}s infinite;
            box-shadow: 0 0 8px #ffd700;
        `;
        flower.appendChild(sparkle);
    }

    // Agregar la animación de sparkle al CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
});
