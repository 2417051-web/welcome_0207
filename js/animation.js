/* FADE UP */

.reveal {

    opacity: 0;

    transform: translateY(40px);

    transition: 1s ease;

}


.reveal.active {

    opacity: 1;

    transform: translateY(0);

}


/* AI ORBITS */

.orbit-one {

    animation: rotateOrbit 12s linear infinite;

}


.orbit-two {

    animation: rotateOrbitReverse 18s linear infinite;

}


@keyframes rotateOrbit {

    from {

        transform: rotate(0deg);

    }

    to {

        transform: rotate(360deg);

    }

}


@keyframes rotateOrbitReverse {

    from {

        transform: rotate(360deg);

    }

    to {

        transform: rotate(0deg);

    }

}


/* FLOATING AI */

.ai-circle {

    animation: floatAI 3s ease-in-out infinite;

}


@keyframes floatAI {

    0%,

    100% {

        transform: translateY(0);

    }


    50% {

        transform: translateY(-15px);

    }

}


/* BUTTON PULSE */

.primary-btn {

    animation: buttonPulse 3s infinite;

}


@keyframes buttonPulse {

    0% {

        box-shadow: 0 0 0 0 rgba(212,175,55,0.4);

    }


    70% {

        box-shadow: 0 0 0 12px rgba(212,175,55,0);

    }


    100% {

        box-shadow: 0 0 0 0 rgba(212,175,55,0);

    }

}
