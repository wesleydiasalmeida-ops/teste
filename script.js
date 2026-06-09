document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento padrão da página

    const emailInput = document.getElementById('email').value;

    if (emailInput.trim() === "") {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exemplo de comportamento: exibe os dados simulados
    console.log("Tentativa de login com:", emailInput);

    // Endereço de destino capturado do seu código original
    const urlDestino = "https://sites.google.com/escola.pr.gov.br/teste-/p%C3%A1gina-inicial";
    
    // Simula o redirecionamento após o preenchimento do e-mail
    alert("Login simulado com sucesso! Redirecionando...");
    window.location.href = urlDestino;
});
