let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
delete user.surname;

//console.log(user);
//---------------------------------------
function isEmptyObject(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}

//console.log(isEmptyObject(user));

//-----------------------------------------

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key]
}
//console.log(sum);

//----------------------------------------------

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric() {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

//console.log(menu);

//---------------------------------------

