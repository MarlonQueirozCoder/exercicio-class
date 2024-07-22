class cozinha {
    constructor(tipo, nome, idade) {
        this.tipo= tipo;
        this.nome = nome;
        this.idade = idade;
    }

    comodos(){
     let comodo = "";
     switch (this.tipo) {

        case "sala":
            comodo = "quadro longo";
            break;

        case "quarto":
            comodo = "computador";
            break;

        case "cozinha":
            comodo = "fogao";
             break;

        default:
            comodo = "eu sou um lixo "

     }
     console.log(`No comodo ${this.tipo}  tem  um ${comodo}`)
    }
    
}

let c1 = new cozinha ("sala", "quadro", 30);
c1.comodos();

let c2 = new cozinha ("quarto", 55, "computador");
c2.comodos();

let c3 = new cozinha ("cozinha", 70, "fogao");
c3.comodos();


