function divisibility(numerator) {
    return new Promise((resolve, reject) => {
        try {
            let denominator = 3;
            let divisibility = numerator % denominator;
            if (divisibility == 0) {
                let data = {
                    result: divisibility,
                    isEven: true,
                };
                resolve(data);
            }
            else {
                let data = {
                    result: denominator,
                    isEven: false,
                };
                reject(data);
            }
        }
        catch (error) {
            reject(error);
        }
    });
}
async function number(num) {
    try {
        let d = 1 + num;
        const result = await divisibility(d);
        return result;
    }
    catch (error) {
        return error;
    }
}

number(90).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
//


