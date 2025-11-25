function obterNivel(xp) {
    if (xp <= 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

const nomeDoHeroi = "Mario";
const xpDoHeroi = Math.floor(Math.random() * 101) * 100;
;
const nivelDoHeroi = obterNivel(xpDoHeroi);

const mensagem = `O Herói de nome <strong>${nomeDoHeroi}</strong> está no nível de <strong>${nivelDoHeroi}</strong>`;

const outputContainer = document.getElementById('output');
        
const resultadoElemento = document.createElement('p');
resultadoElemento.id = 'resultado';
resultadoElemento.innerHTML = mensagem; // innerHTML para renderizar as tags <strong>
        
outputContainer.innerHTML = '';
outputContainer.appendChild(resultadoElemento);

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);