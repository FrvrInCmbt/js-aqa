function checkOrder (available, ordered){
    if(available <= 10 && ordered > 10){
        let message = "Your order is too large, we dont have enough goods.";
        return message; 
    } else if(available = 10 && ordered > 0 || ordered >= 10){
        let messageSec = "Your order is accepted"
        return messageSec;
    } else if(available = 10 && ordered == 0){
        let emptyOrder = "Your order is empty"
        return emptyOrder;
    } else{
        return "Negative values are restricted"
    }
}

console.log(checkOrder(10, 0));
console.log(checkOrder(10, 11));
console.log(checkOrder(10, 10));
console.log(checkOrder(10, -1));