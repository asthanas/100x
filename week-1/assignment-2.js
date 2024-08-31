function greet(user){
    if (user.gender="male"){
        console.log("Hi Mr. "+ user.name+ " your age is "+ user.age);
    } else{
        console.log("Hi Mrs "+ user.name+ " your age is "+ user.age);
    }
    
}

let user = {
    name : "Saurabh",
    age : 60,
    gender: "male"
}

greet(user);