function handleNum(a, handleEven, handleOdd) {
    if (a % 2 === 0) {
        return handleEven();
    } else {
        return handleOdd();
    }
}

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

handleNum(1004, handleEven, handleOdd);
handleNum(1005, handleEven, handleOdd);
