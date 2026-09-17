document.getElementById("botao").addEventListener("click", function() {
    // Obter os valores dos inputs
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    const res1 = document.getElementById("resultado1");
    const res2 = document.getElementById("resultado2");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        res1.textContent = "Por favor, digite todas as notas.";
        res2.textContent = "";
        res1.style.color = "yellow";
        return;
    }

    
    const media = (n1 + n2 + n3) / 3;

   
    res1.textContent = `Média: ${media.toFixed(1)}`;

    
    if (media >= 7) {
        res2.textContent = "Situação: APROVADO!";
        res2.style.color = "#00ff7f";
    } else if (media >= 5) {
        res2.textContent = "Situação: RECUPERAÇÃO";
        res2.style.color = "orange";
    } else {
        res2.textContent = "Situação: REPROVADO";
        res2.style.color = "#ff4d4d"; 
    }
});