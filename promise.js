
class Mypromise {
    divisibility(denominator) {
        return new Promise((resolve, reject) => {
            let numerator = 6;
            let divisibility = numerator % denominator;
            if (divisibility == 0) {
                let data = {
                    result: denominator,
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
        });
    }
    number(num) {
        let d = 1 + num;
        return this.divisibility(d);
    }
}

let obj = new Mypromise();

obj.number(5).then((myname) => {
    console.log("successful", myname);
}).catch((joker) => {
    console.log("failed", joker);
})

