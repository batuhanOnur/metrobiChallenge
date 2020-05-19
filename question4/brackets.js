let controlBrackets = (str) => {
    let checkArray = [];

    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        //açılıs parantezi ise checkArray'e ekle
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            checkArray.push(str[i]);
        }

        //eğer karakter kapanan parantez ise array'den çıkar
        else {
            let last = checkArray.pop();

            if (str[i] !== brackets[last]) {
                return false;
            }
        }
    }

    //en sonda array boş kalmazsa false dön.
    if (checkArray.length !== 0) {
        return false
    }

    return true;
}


console.log(controlBrackets("(){}")); // true dönmeli

