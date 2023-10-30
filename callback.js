
//callback functions are mainly used in asynchronous functions
function summ1(number, callback){
    const divisibility=number%4
    let answer;
    if(divisibility==0){
        answer={
            result: divisibility ,
            multiple_of_4: true  ,
        }
    }
    else{
        answer={
            result: divisibility ,
            multiple_of_4: false , 
        }
    }
    callback(answer);
}

function add(results){
    console.log("the results are as follows");
    console.log(results)
}
summ1(8,add);
//callback functions are mainly used in asynchronous functions