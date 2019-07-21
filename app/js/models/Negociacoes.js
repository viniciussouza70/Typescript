/* Essa classe vai encapsular o array de todas as negociações que iremos cadastrar. Só será possível
incluir negociações, nada de deletar, editar, etc. Todo acesso a arrays será feito por essa classe*/
class Negociacoes {
    constructor() {
        this._negociacoes = []; //só array da erro, temos que informar do que ele é. No caso, de objetos Negociacao
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao); //colocando no vetor negociações um elemento do tipo negociacao
    }
    //esse método exibe os elemntos do vetor em um outro vetor anônimo, que será uma cópia dele. Prog. defensv
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
