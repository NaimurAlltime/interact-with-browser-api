// 1. alert 
// 2. confirm 
// 3. prompt 



// alert("hi, iam naimur");

const alertShow = () => {
    alert('hi')
}

const borrowMoney = () => {
    const result = confirm("borrow me some money?");
    console.log(result)
    if(result == true){
        alert("thanks dos");
    }else{
        console.log("mone rakhis taka dilina.");
    }

}

const getInfo = () => {
    const name = prompt('Please Enter Your Name: ');
    if(name === null){
        alert('please your name and try again!');
    }else{
        alert('welcome visit our site!');
    }
}