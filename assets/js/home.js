if(localStorage.getItem('token') == null){
    alert('Refaça o login por favor!');
}
function sair(){
    localStorage.removeItem('token');
    location.href = "./assets/html/login.html";
}

// Seleciona os elementos do DOM
const fileInput = document.getElementById('fileInput');
const profileImage = document.getElementById('profileImage');

// Função para carregar a imagem salva no localStorage, se existir
function loadProfileImage() {
    const savedImage = localStorage.getItem('avatarImage'); // Recupera a URL da imagem do localStorage
    if (savedImage) {
        profileImage.src = savedImage; // Atualiza o src da imagem do avatar
    }
}

// Função para salvar a imagem no localStorage
function saveProfileImage(imageSrc) {
    localStorage.setItem('avatarImage', imageSrc); // Salva a URL da imagem no localStorage
}

// Evento de mudança do input de arquivo
fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Obtém o arquivo selecionado

    // Verifica se há um arquivo selecionado e se é uma imagem
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        // Evento que ocorre quando a leitura do arquivo é concluída
        reader.onload = function (e) {
            const imageSrc = e.target.result; // Obtém a URL da imagem em base64
            profileImage.src = imageSrc; // Atualiza a imagem de perfil com a nova imagem
            saveProfileImage(imageSrc); // Salva a imagem no localStorage
        };

        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (base64)
    } else {
        alert('Por favor, selecione um arquivo de imagem válido.'); // Alerta caso o arquivo não seja uma imagem
    }
});

// Carrega a imagem salva quando a página é carregada
window.onload = loadProfileImage;

document.addEventListener('DOMContentLoaded', () => {
    const friendsButton = document.getElementById('friendsButton');
    const sidebar = document.getElementById('sidebar');
    const friendsList = document.getElementById('friendsList');
    const notifyButton = document.getElementById('notifyButton');

    // Lista de amigos, limite de 15 nomes
    const amigos = [
        'Amigo 1', 'Amigo 2', 'Amigo 3', 'Amigo 4', 'Amigo 5',
        'Amigo 6', 'Amigo 7', 'Amigo 8', 'Amigo 9', 'Amigo 10',
        'Amigo 11', 'Amigo 12', 'Amigo 13', 'Amigo 14', 'Amigo 15'
    ];

    // Adiciona os amigos na sidebar
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        friendsList.appendChild(li);
    });

    // Alterna a visibilidade da sidebar
    friendsButton.addEventListener('click', () => {
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-300px'; // Fecha a sidebar
        } else {
            sidebar.style.left = '0'; // Abre a sidebar
        }
    });

    // Função para enviar notificações
    notifyButton.addEventListener('click', () => {
        if (Notification.permission === 'granted') {
            new Notification('Nova notificação', {
                body: 'Este é o corpo da notificação!',
                icon: 'icon.png' // Ícone opcional
            });
        } else {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('Nova notificação', {
                        body: 'Este é o corpo da notificação!',
                        icon: 'icon.png'
                    });
                } else {
                    alert('Permissão para notificações não concedida.');
                }
            });
        }
    });
});
