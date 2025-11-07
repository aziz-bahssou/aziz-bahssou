document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#5D3FD3" },
            "shape": { "type": "circle" },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": { "enable": true, "speed": 1, "opacity_min": 0.4, "sync": false }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": { "enable": true, "speed": 2, "size_min": 1, "sync": false }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#E6E6FA",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "repulse": { "distance": 100, "duration": 0.4 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
});
