function checkOrder(available, ordered) {
    if (available <= 10 && ordered > 10) {
        let message = "Your order is too large, we dont have enough goods.";
        return message;
    } else if ((available = (10 && ordered > 0) || ordered >= 10)) {
        let messageSec = "Your order is accepted";
        return messageSec;
    } else if ((available = 10 && ordered == 0)) {
        let emptyOrder = "Your order is empty";
        return emptyOrder;
    } else {
        return "Negative values are restricted";
    }
}

console.log(checkOrder(10, 0));
console.log(checkOrder(10, 11));
console.log(checkOrder(10, 10));
console.log(checkOrder(10, -1));

function checkOrder1(available1, ordered1) {
    if (available1 < ordered1 && ordered1 > available1) {
        let message1 = "Your order is too large, we dont have enough goods.";
        return message1;
    } else if (available1 >= ordered1 && ordered1 > 0) {
        let messageSec1 = "Your order is accepted";
        return messageSec1;
    } else if (available1 > ordered1 && ordered1 === 0) {
        let emptyOrder1 = "Your order is empty";
        return emptyOrder1;
    } else {
        return "Negative values are restricted";
    }
}

console.log(checkOrder1(100, 110));
console.log(checkOrder1(100, 100));
console.log(checkOrder1(55, 0));
console.log(checkOrder1(10, -1));
