const dateOfBrith = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-num");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output");

function checkBirthdayLucky(dob){
    var dob = dateOfBrith.value;
    const sum = calculateSum(dob);
     compareValues(sum,luckyNumber.value);  
    
}

function calculateSum(dob){
    dob= dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length; i++){
        sum =sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="Your birthday is lucky. Congratulations!"
    }else {
        outputBox.innerText="Sorry your birthday is not lucky. But don't lose hope the harder you work the luckier you get."
    }
    
}

checkButton.addEventListener('click', checkBirthdayLucky)