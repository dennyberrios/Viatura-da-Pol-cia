const ledOn = document.querySelector(".ledOn");
const ledOff = document.querySelector(".ledOff");
const retrovisor1 = document.querySelector(".ledRetrovisor1");
const retrovisor2 = document.querySelector(".ledRetrovisor2");
const sinalizador1 = document.querySelector(".sinalizador1");
const sinalizador2 = document.querySelector(".sinalizador2");
const sinalizador3 = document.querySelector(".sinalizador3");
const sinalizador4 = document.querySelector(".sinalizador4");
const btnOn = document.querySelector('.giroflexOn');
const btnOff = document.querySelector('.giroflexOff');
const ledsFarolOn = document.querySelector(".ledsFarolOn");
const ledsFarolOff = document.querySelector(".ledsFarolOff");
const farolLigado = document.querySelector(".farolLigado");
const farolDesligado = document.querySelector(".farolDesligado");
const farolAlto = document.querySelector(".farolAlto");
const farolBaixo = document.querySelector(".farolBaixo");
const desligaAll = document.querySelector(".desligaAll");
const ligaAll = document.querySelector(".ligaAll");
const lentD1 = document.querySelector(".lentD1");
const lentD2 = document.querySelector(".lentD2");
const lentD3 = document.querySelector(".lentD3");
const lentE1 = document.querySelector(".lentE1");
const lentE2 = document.querySelector(".lentE2");
const lentE3 = document.querySelector(".lentE3");
const luz1 = document.querySelector(".luz1");
const luz2 = document.querySelector(".luz2");
const luzLedRetrovisor1 = document.querySelector(".luzLedRetrovisor1");
const luzLedRetrovisor2 = document.querySelector(".luzLedRetrovisor2");
const giroflex1 = document.querySelector(".gira1");
const giroflex2 = document.querySelector(".gira2");
const giroflex3 = document.querySelector(".gira3");
const giroflex4 = document.querySelector(".gira4");
const giroflex5 = document.querySelector(".gira5");
const giroflex6 = document.querySelector(".gira6");
const giroflex7 = document.querySelector(".gira7");
const giroflex8 = document.querySelector(".gira8");


// Liga led dos retrovisores do carro
function ligaLedDoRetrovisor() {
    retrovisor1.classList = ("ledRetrovisor1 ledRetrovisores");
    retrovisor2.classList = ("ledRetrovisor2 ledRetrovisores");
};

// Liga led do capo do carro
function ligaLedDoCapo() {
    sinalizador1.classList = ("sinalizador1 ledRetrovisores");
    sinalizador2.classList = ("sinalizador2 ledRetrovisores");
};

// Liga reflexo dos retrovisores
function ligaReflexoDoRetrovisor() {
    luzLedRetrovisor1.classList = ("luzLedRetrovisor1 reflexo");
    luzLedRetrovisor2.classList = ("luzLedRetrovisor2 reflexo");
};

// Liga reflexo do Led do capo
function ligaReflexoDoCapo() {
    sinalizador3.classList = ("sinalizador3 reflexo");
    sinalizador4.classList = ("sinalizador4 reflexo");
};

// No evento clique a função chama todas as outras funções:
// ligando leds do retrovisores, leds do capo, reflexo dos leds do retrovisor e capo.
ledOn.addEventListener("click", () => {
    ligaLedDoRetrovisor();
    ligaLedDoCapo();
    ligaReflexoDoRetrovisor();
    ligaReflexoDoCapo();
});


// Desliga led dos retrovisores do carro
function desligaLedDoRetrovisor() {
    retrovisor1.classList = ("ledRetrovisor1");
    retrovisor2.classList = ("ledRetrovisor2");
};

// Desliga led do capo do carro
function desligaLedDoCapo() {
    sinalizador1.classList = ("sinalizador1");
    sinalizador2.classList = ("sinalizador2");
};

// Desliga reflexo dos retrovisores
function desligaReflexoDoRetrovisor() {
    luzLedRetrovisor1.classList = ("luzLedRetrovisor1");
    luzLedRetrovisor2.classList = ("luzLedRetrovisor2");
};

// Desliga reflexo do Led do capo
function desligaReflexoDoCapo() {
    sinalizador3.classList = ("sinalizador3");
    sinalizador4.classList = ("sinalizador4");
};

// No evento clique a função chama todas as outras funções:
// desligando os leds do retrovisores, leds do capo, reflexo dos leds do retrovisor e capo.
ledOff.addEventListener("click", () => {
    desligaLedDoRetrovisor();
    desligaLedDoCapo();
    desligaLedDoRetrovisor();
    desligaReflexoDoCapo();
    desligaReflexoDoRetrovisor();
});

// Liga o giroflex do carro. 
function ligaGiroflex() {
    giroflex1.className = ("giroflexLed led1");
    giroflex2.className = ("giroflexLed led1");
    giroflex3.className = ("giroflexLed led1");
    giroflex4.className = ("giroflexLed led1");
    giroflex5.className = ("giroflexLed led2");
    giroflex6.className = ("giroflexLed led2");
    giroflex7.className = ("giroflexLed led2");
    giroflex8.className = ("giroflexLed led2");
};

// No evento clique a função chama outra função que liga o giroflex do carro.
btnOn.addEventListener('click', () => {
    ligaGiroflex();
});


// Desliga o giroflex do carro. 
function desligaGiroflex() {
    giroflex1.className = ("giroflexLed");
    giroflex2.className = ("giroflexLed");
    giroflex3.className = ("giroflexLed");
    giroflex4.className = ("giroflexLed");
    giroflex5.className = ("giroflexLed");
    giroflex6.className = ("giroflexLed");
    giroflex7.className = ("giroflexLed");
    giroflex8.className = ("giroflexLed");
};

// No evento clique a função adiciona a class giroflexLed para desliga o gireflex do carro.
btnOff.addEventListener('click', () => {
    ;
    desligaGiroflex();
});

// Liga os farois de emergencia do carro.
function ligaFaroisDeEmergencia() {
    lentD1.classList = ("lentD1 lenteFarol");
    lentD2.classList = ("lentD2 lenteFarol");
    lentD3.classList = ("lentD3 lenteFarol");
    lentE1.classList = ("lentE1 lenteFarol");
    lentE2.classList = ("lentE2 lenteFarol");
    lentE3.classList = ("lentE3 lenteFarol");
};

// Liga os farois de emergencia do carro.
function ligaReflexoDosFaroisDeEmergencia() {
    luz1.classList = ("luz1 LuzCireneOn");
    luz2.classList = ("luz2 LuzCireneOn");
};

// No evento clique a função chama todas as outras funções: ligando faróis.
ledsFarolOn.addEventListener('click', () => {
    ligaFaroisDeEmergencia();
    ligaReflexoDosFaroisDeEmergencia();
});

// Desliga os farois de emergencia do carro.
function desligaFaroisDeEmergencia() {
    lentD1.classList = ("lentD1");
    lentD2.classList = ("lentD2");
    lentD3.classList = ("lentD3");
    lentE1.classList = ("lentE1");
    lentE2.classList = ("lentE2");
    lentE3.classList = ("lentE3");
};

// Desliga os farois de emergencia do carro.
function desligaReflexoDosFaroisDeEmergencia() {
    luz1.classList = ("luz1");
    luz2.classList = ("luz2");
};

// No evento clique a função chama todas as outras funções: desligando faróis.
ledsFarolOff.addEventListener('click', () => {
    desligaFaroisDeEmergencia();
    desligaReflexoDosFaroisDeEmergencia();
});

// Liga farol baixo.
function ligaFarolBaixo() {
    lentD1.classList = ("lentD1 addFarolBaixo");
    lentD2.classList = ("lentD2 addFarolBaixo");
    lentD3.classList = ("lentD3 addFarolBaixo");
    lentE1.classList = ("lentE1 addFarolBaixo");
    lentE2.classList = ("lentE2 addFarolBaixo");
    lentE3.classList = ("lentE3 addFarolBaixo");
};

// Liga reflexo da luz baixa.
function ligaReflexoLuzBaixa() {
    luz1.classList = ("luz1 luzBaixa");
    luz2.classList = ("luz2 luzBaixa");
};

// No evento clique a função chama todas as outras funções: ligando faról baixo.
farolLigado.addEventListener("click", () => {
    ligaFarolBaixo();
    ligaReflexoLuzBaixa();
});

// Desligando farol baixo.
function desligaFarolBaixo() {
    lentD1.classList = ("lentD1");
    lentD2.classList = ("lentD2");
    lentD3.classList = ("lentD3");
    lentE1.classList = ("lentE1");
    lentE2.classList = ("lentE2");
    lentE3.classList = ("lentE3");
};

// Desligando reflexo da luz baixa.
function desligaReflexoLuzBaixa() {
    luz1.classList = ("luz1");
    luz2.classList = ("luz2");
};

// No evento clique a função chama todas as outras funções: desligando faról baixo.
farolDesligado.addEventListener("click", () => {
    desligaFarolBaixo();
    desligaReflexoLuzBaixa();
});

// Liga farol alto do carro.
function ligaFarolAlto() {
    lentD1.classList = ("lentD1 addFarolAlto");
    lentD2.classList = ("lentD2 addFarolAlto");
    lentD3.classList = ("lentD3 addFarolAlto");
    lentE1.classList = ("lentE1 addFarolAlto");
    lentE2.classList = ("lentE2 addFarolAlto");
    lentE3.classList = ("lentE3 addFarolAlto");
};

// Liga reflexo do farol do carro.
function ligaReflexoDoFarol() {
    luz1.classList = ("luz1 luzAlta");
    luz2.classList = ("luz2 luzAlta");
};

//No evento clique a função chama todas as outras funções: ligando faról alto.
farolAlto.addEventListener("click", () => {
    ligaFarolAlto();
    ligaReflexoDoFarol();
});

//No evento clique a função chama todas as outras funções: ligando faról baixo.
farolBaixo.addEventListener("click", () => {
    ligaFarolBaixo();
    ligaReflexoLuzBaixa();
});

// No evento clique a função chama todas as outras funções: ligando o giroflex, 
// leds dos retrovisores, faróes, leds do capo, reflexos dos leds dos retrovisoes,
// reflexo dos faróis de emergencia, reflexo dos leds do capo.
ligaAll.addEventListener("click", () => {
    ligaGiroflex();
    ligaLedDoRetrovisor();
    ligaFaroisDeEmergencia();
    ligaLedDoCapo();
    ligaReflexoDoRetrovisor();
    ligaReflexoDosFaroisDeEmergencia();
    ligaReflexoDoCapo();
});

// No evento clique a função chama todas as outras funções: desligando o giroflex, 
// leds dos retrovisores, faróes, leds do capo, reflexos dos leds dos retrovisoes,
// reflexo dos faróis de emergencia, reflexo dos leds do capo.
desligaAll.addEventListener("click", () => {
    desligaGiroflex();
    desligaLedDoRetrovisor();
    desligaLedDoCapo();
    desligaLedDoRetrovisor();
    desligaReflexoDoCapo();
    desligaReflexoDoRetrovisor();
    desligaFaroisDeEmergencia();
    desligaReflexoDosFaroisDeEmergencia();
});

const pintura = document.querySelector(".pintura");
const btnColor = document.querySelector(".btnColor");
const capo1 = document.querySelector(".capo1");
const boxCapo = document.querySelector(".boxCapo");

btnColor.addEventListener("click", () => {
    capo1.style.backgroundColor = pintura.value;
    boxCapo.style.backgroundColor = pintura.value;
})

const colorTeto = document.querySelector(".colorTeto");
const btnTeto = document.querySelector(".btnTeto");
const teto1 = document.querySelector(".teto1");
const teto2 = document.querySelector(".teto2");
const suporteTetoGiroflex = document.querySelector(".suporteTetoGiroflex");

// Aplica estilo no teto e no suporte do giroflex que também fica no teto.
function estiloDeTeto() {
    teto1.style.borderRight = `150px solid ${colorTeto.value}`;
    teto2.style.borderLeft = `150px solid ${colorTeto.value}`;
    suporteTetoGiroflex.style.backgroundColor = colorTeto.value;
};

// No evento clique a função chama uma outra função que aplica estilo no teto do carro.
btnTeto.addEventListener("click", () => {
    estiloDeTeto();
});

const colorColunaTeto = document.querySelector(".colorColunaTeto");
const btnColunaTeto = document.querySelector(".btnColunaTeto");

// Aplica estilo nas colunas do teto do carro.
function estiloDasColunasDoTeto() {
    teto1.style.borderBottom = `80px solid ${colorColunaTeto.value}`;
    teto2.style.borderBottom = `80px solid ${colorColunaTeto.value}`;
};

// No evento clique a função chama uma outra função que aplica estilo na coluna do teto do carro.
btnColunaTeto.addEventListener("click", () => {
    estiloDasColunasDoTeto();
});

const colorRetro = document.querySelector(".colorRetro");
const btnRetro = document.querySelector(".btnRetro");
const colunaRetrovisor1 = document.querySelector(".colunaRetrovisor1");
const colunaRetrovisor2 = document.querySelector(".colunaRetrovisor2");
const colorRetrovisor1 = document.querySelector(".retrovisor1");
const colorRetrovisor2 = document.querySelector(".retrovisor2");

// Aplica estilo no retrovisores.
function estiloRetrovisores() {
    colorRetrovisor1.style.backgroundColor = colorRetro.value;
    colorRetrovisor1.style.border = "1px solid black";
    colorRetrovisor2.style.backgroundColor = colorRetro.value;
    colorRetrovisor2.style.border = "1px solid black";
    colunaRetrovisor1.style.backgroundColor = colorRetro.value;
    colunaRetrovisor2.style.backgroundColor = colorRetro.value;
}

// No evento clique a função chama uma outra função que aplica estilo nos retrovisores.
btnRetro.addEventListener("click", () => {
    estiloRetrovisores();
});

const colorBodyKit = document.querySelector(".colorBodyKit");
const btnBodyKit = document.querySelector(".btnBodyKit");
const bigode = document.querySelector(".capoBico");
const aerofolio = document.querySelector(".aerofolio");
const aerofolio3 = document.querySelector(".aerofolio3");

// Aplica estilo no aerofolio do carro
function estiloAerofolio() {
    aerofolio.style.backgroundColor = colorBodyKit.value;
    aerofolio3.style.backgroundColor = colorBodyKit.value;
};

// Aplica estilo no Bigode do carro
function estiloBigode() {
    bigode.style.backgroundColor = colorBodyKit.value;
};

// No evento clique a função chama duas funções que aplicam estilo no aerofolio e no bigode do carro.
btnBodyKit.addEventListener("click", () => {
    estiloAerofolio();
    estiloBigode();
});

const colorBorda = document.querySelector(".colorBorda");
const btnBorda = document.querySelector(".btnBorda");
const aerofolio1 = document.querySelector(".aerofolio1");


// Aplica estilo na borda do aerofolio do carro.
function estiloBordaAerofolio() {
    aerofolio.style.borderLeft = `2px solid ${colorBorda.value}`;
    aerofolio.style.borderBottom = `2px solid ${colorBorda.value}`;
    aerofolio1.style.borderBottom = `2px solid ${colorBorda.value}`
};

// Aplica estilo na borda do bigode do carro. 
function estiloBordaBigode() {
    bigode.style.borderBottom = `2px solid ${colorBorda.value}`;
};

// No evento clique a função chama duas funções que aplica estilo na borda do aerofolio e bico do carro.
btnBorda.addEventListener("click", () => {
    estiloBordaAerofolio();
    estiloBordaBigode();
});

const colorVidro = document.querySelector(".colorVidro");
const btnVidro = document.querySelector(".btnVidro");
const vidro1 = document.querySelector(".vidro1");
const vidro2 = document.querySelector(".vidro2");

// Aplica estilo no vidro do carro.
function estiloVidro() {
    vidro1.style.borderRight = `140px solid ${colorVidro.value}`;
    vidro1.style.borderBottom = `70px solid ${colorVidro.value}`;
    vidro2.style.borderLeft = `140px solid ${colorVidro.value}`;
    vidro2.style.borderBottom = `70px solid ${colorVidro.value}`;
};

// No evento clique a função chama uma outra função que aplica estilo no vidro do carro.
btnVidro.addEventListener("click", () => {
    estiloVidro();
});

const secaoTuning = document.querySelector(".secaoTuning");
const btnDrop = document.querySelector(".btnDrop");
const btnFecha = document.querySelector(".btnFecha");

// Essa função mostra a seção tuning oculta.
function mostraSecaoTuning() {
    secaoTuning.classList = ("secaoTuning tuning");
};

// No evento clique a função chama uma outra função que mostra a seção tuning oculta.
btnDrop.addEventListener("click", () => {
    mostraSecaoTuning();
});

// Essa função oculta a seção tuning.
function ocultaSecaoTunnig() {
    secaoTuning.classList = ("secaoTuning");
};

// No evento clique a função chama uma outra função que oculta a seção tuning.
btnFecha.addEventListener("click", () => {
    ocultaSecaoTunnig();
});