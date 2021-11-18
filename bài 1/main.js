const findOppositeNumber = (n, inputNumber) => {
    const flag = n/2;
    if(inputNumber >= flag){
    console.log (inputNumber - flag);
    }
    else{
    console.log (inputNumber + flag);
    }
    }
    
  findOppositeNumber(10,2);
  findOppositeNumber(10,6);