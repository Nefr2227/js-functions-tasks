// BEGIN
const sayPrimeOrNot = (number) => {
    if (number > 1){
        let bl = true;
        for (let i = 2; i <= number - 1; i += 1){
            if (number % i === 0){
                bl = false;
                break
            }
        }
        if (bl == true){
            console.log('yes');
        }
        else{
            console.log('no');
        }      
    }
    else{
        console.log('no');
    }
}

export default sayPrimeOrNot;
// END