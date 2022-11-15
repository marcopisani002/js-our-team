const teamMembers = document.getElementById("team-members");



const teamList = [
    /* 0 */ {
        foto: "wayne-barnett-founder-ceo.jpg",
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
    },
    /* 1 */ {
        foto: "walter-gordon-office-manager.jpg",
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Chief Editor",
    },
    /* 2 */ {
        foto: "angela-caroll-chief-editor.jpg",
        nome: "Angela",
        cognome: "Carrol",
        ruolo: "Office Manager",

    },
    /* 3 */ {
        foto: "angela-lopez-social-media-manager.jpg",
        nome: "Angela",
        cognome: "Lopez",
        ruolo: " Social Media Manager",
    },

    /* 4 */ {
        foto: "scott-estrada-developer.jpg",
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
    },

      /* 5 */ {
        foto: "barbara-ramos-graphic-designer.jpg",
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
    }
];
for (let i = 0; i < teamList.length; i++) {

    const member = teamList[i];
    console.log(member.nome + " " + member.cognome + " " + " " + " " + " " + member.ruolo + " " + " " + " " + " " + member.foto);
}

//MEMBRO N°1

//IMMAGINE
const imageEl = document.getElementById("image");
imageEl.innerHTML = `<img class="w-100" src="img/wayne-barnett-founder-ceo.jpg" alt="">`


//NOME
const nameEl = document.getElementById("nome");
nameEl.innerHTML = `<strong>Nome:</strong>   ${teamList[0].nome}`

//COGNOME
const cognomeEl = document.getElementById("cognome");
cognomeEl.innerHTML = `<strong>Cognome:</strong>   ${teamList[0].cognome}`



//RUOLO
const ruoloEl = document.getElementById("ruolo");
ruoloEl.innerHTML = `<strong>Ruolo:</strong>   ${teamList[0].ruolo}`



//MEMBRO N°2

//IMMAGINE
const image2El = document.getElementById("image2");
image2El.innerHTML = `<img class="w-100" src="img/walter-gordon-office-manager.jpg" alt="">`


//NOME
const name2El = document.getElementById("nome2");
name2El.innerHTML = `<strong>Nome:</strong>   ${teamList[1].nome}`

//COGNOME
const cognome2El = document.getElementById("cognome2");
cognome2El.innerHTML = `<strong>Cognome:</strong>   ${teamList[1].cognome}`



//RUOLO
const ruolo2El = document.getElementById("ruolo2");
ruolo2El.innerHTML = `<strong>Ruolo:</strong>   ${teamList[1].ruolo}`



//MEMBRO N°3

//IMMAGINE
const image3El = document.getElementById("image3");
image3El.innerHTML = `<img class="w-100" src="img/angela-caroll-chief-editor.jpg" alt="">`


//NOME
const name3El = document.getElementById("nome3");
name3El.innerHTML = `<strong>Nome:</strong>   ${teamList[2].nome}`

//COGNOME
const cognome3El = document.getElementById("cognome3");
cognome3El.innerHTML = `<strong>Cognome:</strong>   ${teamList[2].cognome}`



//RUOLO
const ruolo3El = document.getElementById("ruolo3");
ruolo3El.innerHTML = `<strong>Ruolo:</strong>   ${teamList[2].ruolo}`




//MEMBRO N°4

//IMMAGINE
const image4El = document.getElementById("image4");
image4El.innerHTML = `<img class="w-100" src="img/angela-lopez-social-media-manager.jpg" alt="">`


//NOME
const name4El = document.getElementById("nome4");
name4El.innerHTML = `<strong>Nome:</strong>   ${teamList[3].nome}`

//COGNOME
const cognome4El = document.getElementById("cognome4");
cognome4El.innerHTML = `<strong>Cognome:</strong>   ${teamList[3].cognome}`



//RUOLO
const ruolo4El = document.getElementById("ruolo4");
ruolo4El.innerHTML = `<strong>Ruolo:</strong>   ${teamList[3].ruolo}`



//MEMBRO N°5

//IMMAGINE
const image5El = document.getElementById("image5");
image5El.innerHTML = `<img class="w-100" src="img/scott-estrada-developer.jpg" alt="">`


//NOME
const name5El = document.getElementById("nome5");
name5El.innerHTML = `<strong>Nome:</strong>   ${teamList[4].nome}`

//COGNOME
const cognome5El = document.getElementById("cognome5");
cognome5El.innerHTML = `<strong>Cognome:</strong>   ${teamList[4].cognome}`



//RUOLO
const ruolo5El = document.getElementById("ruolo5");
ruolo5El.innerHTML = `<strong>Ruolo:</strong>   ${teamList[4].ruolo}`




//MEMBRO N°6

//IMMAGINE
const image6El = document.getElementById("image6");
image6El.innerHTML = `<img class="w-100" src="img/barbara-ramos-graphic-designer.jpg" alt="">`


//NOME
const name6El = document.getElementById("nome6");
name6El.innerHTML = `<strong>Nome:</strong>   ${teamList[5].nome}`

//COGNOME
const cognome6El = document.getElementById("cognome6");
cognome6El.innerHTML = `<strong>Cognome:</strong>   ${teamList[5].cognome}`



//RUOLO
const ruolo6El = document.getElementById("ruolo6");
ruolo6El.innerHTML = `<strong>Ruolo:</strong>   ${teamList[5].ruolo}`





