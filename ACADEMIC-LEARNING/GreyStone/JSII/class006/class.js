class Pessoa {
  constructor(nome) {
      this.nome = nome;
  }

  saudacao() {
      setTimeout(() => {
          console.log(`Olá, meu nome é ${this.nome}`);
      }, 1000);
  }
}

const pessoa = new Pessoa('Renan');
pessoa.saudacao();