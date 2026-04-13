const projetos = [
    {
        nome: "Calculadora Web",
        descricao: "Aplicação de calculadora feita com HTML, CSS e JavaScript."
    },
    {
        nome: "Lista de Tarefas",
        descricao: "Sistema simples para adicionar e remover tarefas."
    },
    {
        nome: "Landing Page",
        descricao: "Página de apresentação responsiva para empresa fictícia."
    }
];

const listaProjetos = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card-projeto");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
    `;

    listaProjetos.appendChild(card);
});