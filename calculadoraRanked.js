let partidaRanked = 200;
let vitorias = 0;
let derrotas = 0;

function jogarPartida() {
	
    let resultadoMinimo = 0.5
    let resultadoVariavel = resultadoMinimo -(vitorias / partidaRanked) *0.1
     resultadoVariavel = Math.max (0.2, Math.min(0.8, resultadoVariavel));
    
    let chance = Math.random();
    
    if (chance < resultadoVariavel) {
    	return 'vitorias'
        
 	}else
     	return 'derrotas'     
}


for (let i = 1; i <= partidaRanked; i++) {
    let resultado = jogarPartida();

    if (resultado === 'vitorias') {
        vitorias++;
    } else {
        derrotas++;
    }
}

console.log("Total de vitórias: " + vitorias);

let saldoVitorias = vitorias;
let nivelHeroi = ['ferro', 'bronze', 'prata', 'ouro', 'diamante', 'lendário', 'imortal'];

let resultadoFinal;

switch(true){
    case vitorias < 10:
        resultadoFinal = 'ferro';
        break;

    case vitorias >= 10 && vitorias <= 20:
        resultadoFinal = 'bronze';
        break;

    case vitorias > 20 && vitorias <= 50:
        resultadoFinal = 'prata';
        break;

    case vitorias > 50 && vitorias <= 80:
        resultadoFinal = 'ouro';
        break;

    case vitorias > 80 && vitorias <= 90:
        resultadoFinal = 'diamante';
        break;

    case vitorias > 91 && vitorias <= 100:
        resultadoFinal = 'lendário';
        break;

    case vitorias > 100:
        resultadoFinal = 'imortal';
        break;
}

		console.log("seu herói tem o total de " + saldoVitorias + " vitórias e está no nível: " + resultadoFinal + ".")
