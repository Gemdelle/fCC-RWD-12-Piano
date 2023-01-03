const C01 = document.getElementById('C01');
const D01 = document.getElementById('D01');
const E01 = document.getElementById('E01');
const F01 = document.getElementById('F01');
const G01 = document.getElementById('G01');
const A01 = document.getElementById('A01');
const B01 = document.getElementById('B01');

const C02 = document.getElementById('C02');
const D02 = document.getElementById('D02');
const E02 = document.getElementById('E02');
const F02 = document.getElementById('F02');
const G02 = document.getElementById('G02');
const A02 = document.getElementById('A02');
const B02 = document.getElementById('B02');

const playC01 = function () {
    var audioC01 = new Audio('Sounds/C01.mp3');
    audioC01.play();
}

const playD01 = function () {
    var audioD01 = new Audio('Sounds/D01.mp3');
    audioD01.play();
}

const playE01 = function () {
    var audioE01 = new Audio('Sounds/E01.mp3');
    audioE01.play();
}

const playF01 = function () {
    var audioF01 = new Audio('Sounds/F01.mp3');
    audioF01.play();
}

const playG01 = function () {
    var audioG01 = new Audio('Sounds/G01.mp3');
    audioG01.play();
}

const playA01 = function () {
    var audioA01 = new Audio('Sounds/A01.mp3');
    audioA01.play();
}

const playB01 = function () {
    var audioB01 = new Audio('Sounds/B01.mp3');
    audioB01.play();
}

/* 02 const */

const playC02 = function () {
    var audioC02 = new Audio('Sounds/C02.mp3');
    audioC02.play();
}

const playD02 = function () {
    var audioD02 = new Audio('Sounds/D02.mp3');
    audioD02.play();
}

const playE02 = function () {
    var audioE02 = new Audio('Sounds/E02.mp3');
    audioE02.play();
}

const playF02 = function () {
    var audioF02 = new Audio('Sounds/F02.mp3');
    audioF02.play();
}

const playG02 = function () {
    var audioG02 = new Audio('Sounds/G02.mp3');
    audioG02.play();
}

const playA02 = function () {
    var audioA02 = new Audio('Sounds/A02.mp3');
    audioA02.play();
}

const playB02 = function () {
    var audioB02 = new Audio('Sounds/B02.mp3');
    audioB02.play();
}

/* 01 EventListeners*/

C01.addEventListener("click", playC01)
D01.addEventListener("click", playD01)
E01.addEventListener("click", playE01)
F01.addEventListener("click", playF01)
G01.addEventListener("click", playG01)
A01.addEventListener("click", playA01)
B01.addEventListener("click", playB01)

/* 02 EventListeners*/

C02.addEventListener("click", playC02)
D02.addEventListener("click", playD02)
E02.addEventListener("click", playE02)
F02.addEventListener("click", playF02)
G02.addEventListener("click", playG02)
A02.addEventListener("click", playA02)
B02.addEventListener("click", playB02)

/* KEYS */

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 81) {
        //Q
        playC01();
        C01.classList.add("active");
        setTimeout(function () {
            C01.classList.remove("active");
        }, 300);
    }
    else if (event.keyCode == 87) {
        //W
        playD01();
        D01.classList.add("active");
        setTimeout(function () {
            D01.classList.remove("active");
        }, 300);
    }
    else if (event.keyCode == 69) {
        //E
        playE01();
        E01.classList.add("active");
        setTimeout(function () {
            E01.classList.remove("active");
        }, 300);
    }
    else if (event.keyCode == 82) {
        //R
        playF01();
        F01.classList.add("active");
        setTimeout(function () {
            F01.classList.remove("active");
        }, 300);
    }
    else if (event.keyCode == 84) {
        //T
        playG01();
        G01.classList.add("active");
        setTimeout(function () {
            G01.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 89) {
        //Y
        playA01();
        A01.classList.add("active");
        setTimeout(function () {
            A01.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 85) {
        //U
        playB01();
        B01.classList.add("active");
        setTimeout(function () {
            B01.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 65) {
        //A
        playC02();
        C02.classList.add("active");
        setTimeout(function () {
            C02.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 83) {
        //S
        playD02();
        D02.classList.add("active");
        setTimeout(function () {
            D02.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 68) {
        //D
        playE02();
        E02.classList.add("active");
        setTimeout(function () {
            E02.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 70) {
        //F
        playF02();
        F02.classList.add("active");
        setTimeout(function () {
            F02.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 71) {
        //G
        playG02();
        G02.classList.add("active");
        setTimeout(function () {
            G02.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 72) {
        //H
        playA02();
        A02.classList.add("active");
        setTimeout(function () {
            A02.classList.remove("active");
        }, 300)
    }
    else if (event.keyCode == 74) {
        //J
        playB02();
        B02.classList.add("active");
        setTimeout(function () {
            B02.classList.remove("active");
        }, 300)
    }
});