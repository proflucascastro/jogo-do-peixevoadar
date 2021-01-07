class Pontuacao {
    constructor(animacao) {
        this.animacao = animacao;
        this.pontos = 0;
    }

    get nome(){
        return Pontuacao.name;
    }

    incrementa(){
        this.pontos += 0.5;
    }

    atualizar() {
        
    }

    desenhar() {
        const ctx = this.animacao.contexto;
        ctx.save();

        ctx.textAlign = 'center';
        ctx.font = '  20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`Pontos: ${this.pontos} `, ctx.canvas.width/2, 25);

        ctx.restore();
    }
}