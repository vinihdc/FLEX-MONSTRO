function logar(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    let login = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let Erro = document.getElementById("Erro");

    // Limpa mensagens de erro anteriores
    Erro.textContent = "";

    // Obtém a lista de usuários do localStorage
    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario')) || [];

    // Verifica se o usuário e senha estão na lista de usuários
    let usuarioValido = listaUsuario.find(item => item.usuario === login && item.senha === senha);
    
    if (usuarioValido) {
        let token = Math.random().toString(16).substring(2);
        console.log(token);
        localStorage.setItem('token', token);
        location.href = "../../home.html";
    } else {
        Erro.textContent = "Usuário ou senha incorretos!";
    }
}