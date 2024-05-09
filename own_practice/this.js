let seller = {
    firstName: 'Jack',
};

seller.Greeting = function() {
    console.log(this.firstName, ", Hello, how can I help you?");
} 

seller.Greeting();

let buyer = {
    name: "John",
    coupon: "COUP00005",
    lookingFor() {
        console.log(this.name, " Hello , I would like to buy two yellow cups")
    }
}

buyer.lookingFor();

seller.specialProposition = function() {
    console.log("Do you have a coupon?")
}
seller.specialProposition();

buyer.useCoupon = function() {
    console.log(this.coupon, " Yes, here it is!")
}

buyer.useCoupon();