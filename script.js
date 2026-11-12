document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#h1-sozlar", {
        strings: ["MARS IT SCHOOL "],
        speed: 70,
        loop: true
    }).go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#p-sozlar", {
        strings: ["RTC-247 Guruh "],
        speed: 70,
        loop: true
    }).go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#h2-sozlar", {
        strings: ["Xoliqulov Ulug'bek "],
        speed: 70,
        loop: true
    }).go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#h6-sozlar", {
        strings: ["Yoşim:ni Etmayman;  "],
        speed: 70,
        loop: true
    }).go();
});


const darkAnDlight = document.getElementById('dark')
let m = 0;

darkAnDlight.addEventListener("click", function () {
    m++
    if (m % 2 == 0) {
        darkAnDlight.textContent = 'Dark';
        document.head.innerHTML = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #B2FEFA, #0ED2F7, #48C6EF);
    font-family: Arial, Helvetica, sans-serif;
}

.con {
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    position: relative;
}

.con-1 {
    width: 400px;
    height: 150px;
    padding: 20px;
    border-radius: 20px;
    color: white;
    padding-top: 30px;
    background: #00A6B2;
    border: 1px solid #008C99;
    box-shadow: 0 10px 30px #007F8730;
}

.con-2 {
    width: 400px;
    height: 150px;
    padding: 30px;
    border-radius: 20px;
    color: white;
    background: #007C91;
    border: 1px solid #006477;
    box-shadow: 0 10px 30px #007F8730;
}

.chiziq {
    height: 250px;
    border-left: 2px solid #008C99;
    border-radius: 100%;
}

h1 {
    font-size: 28px;
    color: #E0FFFF;
}

h2 {
    font-size: 25px;
    color: #CCFFFF;
}

h6 {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    color: #E0FFFF;
}

p {
    margin-top: 10px;
    font-size: 16px;
    color: #D5FAFF;
}

#dark {
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 10px 22px;
    border: 1px solid #008C99;
    border-radius: 10px;
    background: #007C91;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
}

#dark:hover {
    background: #00A6B2;
}

@media (max-width: 900px) {
    .con {
        flex-direction: column;
        gap: 30px;
        padding-top: 90px;
    }

    .con-1,
    .con-2 {
        width: 100%;
        max-width: 450px;
    }

    .chiziq {
        width: 80%;
        height: 0;
        border: none;
        border-top: 2px solid #008C99;
        border-radius: 0;
    }
}

@media (max-width: 480px) {
    .con {
        padding: 85px 15px 30px;
        gap: 22px;
    }

    .con-1,
    .con-2 {
        min-height: 130px;
        padding: 18px;
        border-radius: 15px;
    }

    .chiziq {
        width: 70%;
    }

    h1 {
        font-size: 23px;
    }

    h2 {
        font-size: 21px;
    }

    h6 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    #dark {
        top: 20px;
        right: 15px;
        padding: 9px 18px;
    }
}
</style> `
    }

    else {
        darkAnDlight.textContent = 'Aqua';
        document.head.innerHTML = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #080B18, #101B3D, #080B18);
    font-family: Arial, Helvetica, sans-serif;
}

.con {
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    position: relative;
}

.con-1 {
    width: 400px;
    height: 150px;
    padding: 20px;
    border-radius: 20px;
    color: white;
    padding-top: 30px;
    background: #172554;
    border: 1px solid #263B70;
    box-shadow: 0 10px 30px #00000040;
}

.con-2 {
    width: 400px;
    height: 150px;
    padding: 30px;
    border-radius: 20px;
    color: white;
    background: #0B122B;
    border: 1px solid #263B70;
    box-shadow: 0 10px 30px #00000040;
}

.chiziq {
    height: 250px;
    border-left: 2px solid #334B83;
    border-radius: 100%;
}

h1 {
    font-size: 28px;
    color: #60A5FA;
}

h2 {
    font-size: 25px;
    color: #93C5FD;
}

h6 {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    color: #CBD5E1;
}

p {
    margin-top: 10px;
    font-size: 16px;
    color: #94A3B8;
}

#dark {
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 10px 22px;
    border: 1px solid #3B82F6;
    border-radius: 10px;
    background: #172554;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
}

#dark:hover {
    background: #2563EB;
}

@media (max-width: 900px) {
    .con {
        flex-direction: column;
        gap: 30px;
        padding-top: 90px;
    }

    .con-1,
    .con-2 {
        width: 100%;
        max-width: 450px;
    }

    .chiziq {
        width: 80%;
        height: 0;
        border: none;
        border-top: 2px solid #334B83;
        border-radius: 0;
    }
}

@media (max-width: 480px) {
    .con {
        padding: 85px 15px 30px;
        gap: 22px;
    }

    .con-1,
    .con-2 {
        min-height: 130px;
        padding: 18px;
        border-radius: 15px;
    }

    .chiziq {
        width: 70%;
    }

    h1 {
        font-size: 23px;
    }

    h2 {
        font-size: 21px;
    }

    h6 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    #dark {
        top: 20px;
        right: 15px;
        padding: 9px 18px;
    }
}
</style> `
    }
});