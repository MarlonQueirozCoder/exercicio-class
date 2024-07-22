class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    golpear() {
        let golpe = "";
        switch (this.tipo) {

            case "mago":
                golpe = "magia";
                break;

            case "guerreiro":
                golpe = "espada";
                break;

            case "monge":
                golpe = "artes marciais";
                break;

            case "ninja":
                golpe = "shuriken";
                break;

            default:
                golpe = "Terremoto ";
        }

        console.log("O " + this.tipo + " atacou usando " + golpe);
    }
}


let h1 = new Heroi("Detox", 40, "guerreiro");
h1.golpear();  

let h2 = new Heroi("Ester", 100, "mago");
h2.golpear();  

let h3 = new Heroi("Saron", 45, "monge");
h3.golpear();  

let h4 = new Heroi("Vego", 150, "ninja");
h4.golpear(); 
