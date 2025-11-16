const sonido = document.getElementById("sonido-click");

document.querySelectorAll('[data-sonido="true"]').forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault(); // evitamos navegación inmediata
        sonido.currentTime = 0;
        sonido.play();

        const url = el.getAttribute("href");
        
        // retraso muy corto para que dé tiempo a oír el sonido
        setTimeout(() => {
            if(url && url !== "#") window.location.href = url;
        }, 300); // 120 ms
    });
});
