// const prompt = require('prompt-sync')();

class Heroi{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    defineAttack(){
        let blow;
        if (this.type == "mago"){
            blow = "magia";
        } else if (this.type == "guerreiro"){
            blow = "espada";
        } else if (this.type == "monge"){
            blow = "artes marciais";
        } else if (this.type == "ninja"){
            blow = "shuriken";
        }
        return blow;
    }

    attack(){
        const blow = this.defineAttack();
        console.log(`O ${this.type} atacou usando ${blow}`);
    }
}
/*
const nomeHeroi = prompt("Insira o nome do herói: ");
const idadeHeroi = prompt("Insira a idade do herói: ");
const tipoHeroi = prompt("Insira o tipo do herói: ");

const novoHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
*/
let novoHeroi = new Heroi("Ayumi", 19, "monge");
novoHeroi.attack();