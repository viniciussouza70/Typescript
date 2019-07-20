class Negociacao {

    //resumindo a declaração das vars e tipos e a atribuição no miolo (this._data = data)
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}
    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }
}