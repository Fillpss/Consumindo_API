async function getContent() {
    try {
        const response = await fetch('http://localhost:4567/');
        // Transformando o response em Json e guardando em data para visualizar apenas os dados da API
        
        const data = await response.json();

        show(data);

    } catch (error) {
        console.log(error);
    }
}

getContent();

// Função para transformar o objeto de usuarios em uma lista no HTML
function show(users) {

    let output = '';

    for(let user of users) {
        output += `<li>${user.name}</li>`
    }
    document.querySelector("main").innerHTML = output;
}