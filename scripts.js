let rankingTentativas = [];
let escolha = "y"

while(escolha == "y") {
    let numeroSorteado = Math.floor((Math.random() * 100) + 1);
    let palpite = 0, contTentativas = 0;

    let username = prompt("Username: ");

    while(palpite != numeroSorteado) {
        palpite = prompt("Seu palpite");
        contTentativas++;

        if (palpite > numeroSorteado) {
            alert("Muito alto!");
        } else if(palpite < numeroSorteado) {
            alert("Muito baixo!");
        } else {
            alert("Parabéns, " + username + " você acertou em " + contTentativas + " tentativas!");

            rankingTentativas.push({
                username: username,
                tentativas: contTentativas
            });

            rankingTentativas.sort((a, b) => a.tentativas - b.tentativas);
            let top10 = rankingTentativas.slice(0, 10);

            console.log("\nRanking atualizado:");
            top10.forEach((rank, index) => {
                console.log(index + 1 + " - " + rank.username + ": " + rank.tentativas + " tentativa(s)");
            });

            escolha = prompt("Deseja continuar jogando? [y/n]");
        }
    }
}