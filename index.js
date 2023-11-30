let w = 80
let l = 20
calcrank(w, l)

function calcrank(win, lose){
    let saldo = win - lose
    let elo = ''
    if(saldo<10){
        elo = 'ferro'
    } else if(saldo>10 && saldo<=20){
        elo = 'bronze'
    } else if(saldo>20 && saldo<=50){
        elo = 'prata'
    } else if(saldo>50 && saldo<=80){
        elo = 'ouro'
    } else if(saldo>80 && saldo<=90){
        elo = 'diamante'
    } else if(saldo>90 && saldo<=100){
        elo = 'lendário'
    } else if(saldo>100){
        elo = 'imortal'
    }

    console.log(`O herói tem o saldo de vitórias de ${saldo} e está no nivel ${elo}`)
}

