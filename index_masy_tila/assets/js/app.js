
    let mass = +prompt('Масса (в кг.)');
    console.log(`Масса ${mass} кг.`);

    let height = +prompt('Рост (в метрах)');
    console.log(`Рост ${height} м.`);

    let index = mass / (height ** 2);
    alert(`ИМТ: ${index}`);
    console.log (`ИМТ: ${index}`)

    if(index < 18.5){
        console.log(`Недостатня маса`);
        alert(`Недостатня маса`);
    } else if(index < 25){
        console.log(`Норма`);
        alert(`Норма`);
    } else if(index < 30){
        console.log(`Передожиріння (гладкість)`);
        alert(`Передожиріння (гладкість)`);
    } else if(index < 35){
        console.log(`Ожиріння I ступеня`);
        alert(`Ожиріння I ступеня`);
    } else if(index < 40){
        console.log(`Ожиріння II ступеня`);
        alert(`Ожиріння II ступеня`);
    } else if(index > 40){
        console.log(`Ожиріння III ступеня`);
        alert(`Ожиріння III ступеня`);
    }