function calculateSalary(salario){
    let total = 0;
    if(salario <= 1200){
        total = salario * 3 / 100; 
    } if(salario > 1200){
        total = salario * 5 / 100;
    }
    return `Seu salário é R$${salario} e sua comissão é R$${total}`;
}
calculateSalary(1200)

function calculateStock(qtdAtual, qtdMax, qtdMin){

    qtdMedia = (qtdMax + qtdMin) / 2;

    if(Math.round(qtdAtual) >= Math.round(qtdMedia)){
        return 'Não efetuar compra'
    } else{
        return 'Efetuar compra'
    }
}
calculateStock()

function calculateAge(anoNasc,anoAtual){

    let idadeAnos = anoAtual - anoNasc;

    let idadeMeses = idadeAnos * 12;

    let idadeSemanas = idadeAnos * 52;

    let idadeDias = idadeMeses * 365;

    return `Você tem ${idadeAnos} anos, ${idadeMeses} meses, ${idadeSemanas} semanas e ${idadeDias} dias de idade`
}
calculateAge()

function cashMachine(saque){ 

    let result = saque;
    let notas =[];

    if(result >= 100){        
        notas.push(`${Math.floor(result / 100)} nota(s) de R$ 100`);
        result  = result - Math.floor(result / 100) * 100;
    }if(result >= 50){
        notas.push(`${1} nota(s) de R$ 50` );
        result = result - 50;        
    }if(result >= 20){
        notas.push(`${Math.floor(result / 20)} nota(s) de R$ 20`);
        result = result - Math.floor(result / 20) * 20;
    }if(result >= 10){
        notas.push(`${1} nota(s) de R$ 10` );
        result = result - 10
    }if(result >= 5){
        notas.push(`${1} nota(s) de R$ 5` );
        result = result - 5; 
    }if(result >= 2){
        notas.push(`${Math.floor(result / 2)} nota(s) de R$ 2`);
        result = result - Math.floor(result / 20) * 2;
    }if(Math.floor(result) >= 1){
        notas.push(`${1} nota(s) de R$ 1`);        
    }        
   return notas.join(", ")
}
cashMachine(235)

