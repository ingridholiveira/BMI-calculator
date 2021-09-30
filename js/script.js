const calculate = document.getElementById('calculate');

//Calcula o IMC conforme os dados inseridos e informa a necessidade de se buscar ajuda médica
function bmi(){
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const outcome = document.getElementById('outcome');

    if (name !== '' && height !== '' && weight !==''){
        const bmiValue = ( weight/(height*height)).toFixed(2);

        let seriation = '';
        
        if (bmiValue < 18.50){
            seriation = 'abaixo do peso. Busque ajuda médica.';
        } else if (bmiValue<25.00){
            seriation = 'com o peso ideal. Parabéns!';
        } else if (bmiValue<30.00) {
            seriation = 'levemente acima do peso. Nada preocupante mas convém ficar alerta.';
        } else if (bmiValue<40.00){
            seriation = 'com obesidade. É recomendável buscar ajuda médica.';
        } else {
            seriation = 'morbidamente obeso(a)! Busque ajuda médica o mais rápido possível!'
        }


        outcome.textContent = `${name} seu IMC é ${bmiValue} e atualmente você está ${seriation}`;
        

    } else {
        outcome.textContent = 'Preencha todos os campos!';
    }

}

calculate.addEventListener('click',bmi);