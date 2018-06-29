console.log("HW-W6");

// 1 - 1.4
let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

console.log(myString.length);

var i = 0, strLength = myString.length;

for (i; i < strLength; i++) {
    myString = myString.replace("," , " ");
}

console.log(myString);

// 2 - 2.10
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals[3] = 'turtle';

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");

console.log(favoriteAnimals);

console.log("The array has a length of: "+favoriteAnimals.length);


favoriteAnimals.splice (3, 1);

console.log(favoriteAnimals);

console.log("The item you are looking for is at index:" ,favoriteAnimals.indexOf('meerkat'));

