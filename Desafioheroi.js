class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia'
                break;
            case 'guerreiro':
                ataque = 'usou espada'
                break;
            case 'monge':
                ataque = 'usou artes marciais'
                break;
            case 'ninja':
                ataque = 'usou shuriken'
                break;
            default:
                ataque = 'não especificado'
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}.`
        return mensagem
    }
}

// Exemplo de uso:
const heroiMago = new Heroi('Merlin', 35, 'mago')
console.log(heroiMago.atacar())

const heroiGuerreiro = new Heroi('Conan', 30, 'guerreiro')
console.log(heroiGuerreiro.atacar())


