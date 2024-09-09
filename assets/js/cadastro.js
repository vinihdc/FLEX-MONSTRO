
function cadastrar(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    var usuario = document.getElementById("usuario").value;
    var nomeErro = document.getElementById("nomeErro");

    var senha = document.getElementById("senha").value;
    var senhaErro = document.getElementById("senhaErro");

    var confirmSenha = document.getElementById("confirmaSenha").value;
    var confirmSenhaErro = document.getElementById("confirmSenhaErro");

    // Variável para verificar se há erros
    var temErro = false;

    // Limpa mensagens de erro anteriores
    nomeErro.textContent = "";
    senhaErro.textContent = "";
    confirmSenhaErro.textContent = "";

    // Valida o nome de usuário
    if (usuario.length < 3) {
        nomeErro.textContent = "O nome de usuário deve ter pelo menos 3 caracteres.";
        temErro = true; // Marca que há um erro
    }

    // Valida a senha
    if (senha.length < 5) {
        senhaErro.textContent = "A senha deve ter pelo menos 5 caracteres.";
        temErro = true; // Marca que há um erro
    }

    // Valida a confirmação da senha
    if (confirmSenha !== senha) {
        confirmSenhaErro.textContent = "As senhas não conferem.";
        temErro = true; // Marca que há um erro
    }

    if (temErro) {
        return false; // Não permite o envio do formulário se houver erros
    }

    // Código para salvar os dados no localStorage, só executado se não houver erros
    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');

    listaUsuario.push({
        usuario: usuario,
        senha: senha
    });

    localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));

        setTimeout(()=>{
            location.href = "login.html"; 
        },1000)
}