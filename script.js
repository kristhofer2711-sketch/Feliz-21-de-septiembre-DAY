document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const content = document.getElementById('content');
    const flowers = document.getElementById('flowers');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const textParagraphs = document.querySelectorAll('.magic-text');

    const texts = [
        "Hola Angelinne, se que ha pasado mucho tiempo desde la última vez que hablamos, estoy aca de vuelta solo para decirte algo, hoy es 21 de septiembre y se que este dia se regalan flores amarillas, mas no estas cerca para poder darte algunas, se que ahora pensaras que porque eh aparecido de repente o no lo se, bueno no la hare larga.",
        "Quiero decirte que aunque estes lejos te buscaré en cada atardecer, en los colores que pintan el cielo, en la brisa que acaricia mi piel, en el silencio que envuelve la última luz del día, porque hay algo en ti en cada rincón del mundo que aun toca mi alma y en cada atardecer es mi forma de encontrarte otra vez.",
        "Tú, que sin ser azul te llamo cielo, Tú, que sin tener puertas te llamo hogar, Tú, que sin estar en mi pecho te llamo corazón, Tú, que sin ser sentimiento te llamo amor, Tú, que sin ser cobija te llamo calor, Tú, que sin ser lámpara te llamo luz, Tú, que sin ser estación te llamo primavera, Tú, que sin ser estrella te llamo sol, Tú, que sin ser noche te llamo luna, Tú, que sin ser océano te llamo infinito, Tú que sin ser oxígeno te llamo vida.",
        "Sé que seguro a veces diras que no eres perfecta, pero eres tierna, cariñosa, sincera, alegre, ocurrente y con un gran corazón, y eso te hace ser perfecta... te hace infinitamente única, infinitamente bella, infinitamente tú.",
        "Y por si nadie te lo ha dicho: Espero que sepas que traes tanta luz y alegría a la vida de quienes tienen la suerte de conocerte. Tu presencia brilla más de lo que imaginas, eres esa persona de alma bonita, que deja huella, que siembra sonrisas, que ilumina el mundo y hace que todo se sienta un poquito mejor. Nunca subestimes lo especial que eres, que estes aqui es un regalo, descansa con el corazón en paz, sabiendo que el mundo es mejor porque tú estás en él.",
        "Si me preguntan sobre ti dire: Esa mujer tan pequeña como una flor, como un pétalo a la deriva en el viento, me atrae a ella como la fuerza que ejerce la tierra, de pronto caí hacia ella sin razón, tal como lo hizo la manzana de Newton, con un latido, con un fuerte latido💝. Por último... si no podemos ver los fuegos artificiales este año, iremos el próximo y sino el siguiente, pero te prometo que veremos los fuegos artificiales juntos, te lo prometo. Y bueno dando reverencia a este dia, se que no te podre dar tus flores amarillas pero aqui te dejo unas de un sincero corazón, Te quiero mucho y disfruta de tus florecitas..."
    ];

    let currentParagraphIndex = 0;
    let charIndex = 0;
    const typingSpeed = 70;

    function typeWriter(paragraphElement, textToType, callback) {
        if (charIndex < textToType.length) {
            paragraphElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(() => typeWriter(paragraphElement, textToType, callback), typingSpeed);
        } else {
            charIndex = 0;
            if (callback) callback();
        }
    }

    function showNextParagraph() {
        if (currentParagraphIndex < texts.length) {
            const currentText = texts[currentParagraphIndex];
            const currentElement = textParagraphs[currentParagraphIndex];
            currentElement.classList.remove('hidden');

            typeWriter(currentElement, currentText, () => {
                currentParagraphIndex++;
                setTimeout(showNextParagraph, 1000);
            });
        } else {
            setTimeout(() => {
                flowers.classList.remove('hidden');
            }, 1500);
        }
    }

    textParagraphs.forEach(p => p.classList.add('hidden'));

    magicButton.addEventListener('click', () => {
        magicButton.classList.add('hidden');
        content.classList.remove('hidden');
        backgroundMusic.play();

        showNextParagraph();
    });
});