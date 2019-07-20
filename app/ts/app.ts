const controller = new NegociacaoController();
//app.ts cria uma instância de NegociacaoController. Vamos associar o método adiciona com o evento de submissão do form:
document
    .querySelector('.form') //pegando o form
    .addEventListener('submit', controller.adiciona.bind(controller));
    //evento submit e depois o método adiciona, de NegociacaoController, referenciado pela constante controller 
