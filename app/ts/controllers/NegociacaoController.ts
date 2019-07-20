class NegociacaoController {
    //essas propriedades como vão ser vinculadas com as do DOM, é do tipo HTMLInputElement
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        /*pegando os dados do DOM e convertendo os HTMLInputElement em tipos específicos (Date e numbers)
        Os tipos dos campos estão sendo passados como parâmetros na classe negociação */
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }
    
    adiciona(event: Event) { //event é do tipo evento
        
        event.preventDefault();
        //passando exatamente o que está nos campos do form 
        const negociacao = new Negociacao(
        //a data por padrão vem seoarada por hífen. Com uma exp. regular substituímos o hífen por uma vírgula
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }
}