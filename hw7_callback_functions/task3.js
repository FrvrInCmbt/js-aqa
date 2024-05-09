function divide(numerator, denominator){
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Argument is not a number, please enter a number");
    }
    if (denominator === 0) {
        throw new Error("Zero is not acceptable number");
    } else {
        return numerator / denominator
    }
}

    try {
        console.log(divide(35, 5));
        console.log(divide(null, 4));
    } catch(error) {
        console.log(error);
    } finally {
        console.log("Work is done");
    }