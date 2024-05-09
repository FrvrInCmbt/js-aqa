function singleParam(num){
    console.log(num);
    if(num <= 0){
        return;
    } else {
        return singleParam(num - 1);
    }
}

singleParam(11);
