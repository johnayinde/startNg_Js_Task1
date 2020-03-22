let myName = "Ayinde John";
let myCourses = ["JAVASCRIPT", "HTML", "CSS", "NODEJS", "PHP",];
let courseLength = myCourses.length;
let data = [];

console.log("My name is: " + myName);
 
for (let i = 0; i < courseLength; i++) {
    console.log(myCourses[i]);
}

if (courseLength % 2 !== 0) {
    for (let k = 0; k <= 200; k++) {
        if (k % 2 !== 0) {
            data.push(k);
        }
    }

} else {
    for (let k = 0; k <= 200; k++) {
        if (k % 2 == 0) {
            data.push(k);
        }
    }
}
console.log(data);
