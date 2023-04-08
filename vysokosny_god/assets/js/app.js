
    let year = +prompt(`Впишите год для проверки.`);
    console.log(year);

    if(year % 400 == 0){
        console.log(`Год ${year} высокосный.`);
        alert(`Год ${year} высокосный.`);
    } else if(year % 100 == 0){
        console.log(`Год ${year} не высокосный.`);
        alert(`Год ${year} не высокосный.`);
    } else if(year % 4 == 0){
        console.log(`Год ${year} высокосный.`);
        alert(`Год ${year} высокосный.`);
    } else{
        console.log(`Год ${year} не высокосный.`);
        alert(`Год ${year} не высокосный.`);
    }

    