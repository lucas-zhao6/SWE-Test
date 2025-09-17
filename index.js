var message = "Five Rings got hacked! Click for insider info";

function hack() {
    let x = document.getElementById("upload-resume");
    if (message === "Five Rings got hacked! Click for insider info") {
        message = "Upload Resume";
    } else if (message === "Upload Resume") {
        message = "Five Rings got hacked! Click for insider info";
    }
    x.innerHTML = message;
}

let QuantFirms = [
    "Five Rings",
    "Two Sigma",
    "Citadel",
    "Jane Street",
    "SIG"
];

console.log(QuantFirms.includes("Two Sigma"));
console.log(QuantFirms.includes("Saba Capital"));


let coolQuantFirms = QuantFirms.map(function(input){
    return input + " is cool";
});

let dopeQuantFirms = QuantFirms.map((input) => {
    return input + " is dope";
});

console.log(coolQuantFirms);
console.log(dopeQuantFirms);


let myObject = {
    "name": "Lang",
    "age": 19,
    "major": "Computer Science"
}

console.log(myObject);
console.log(myObject.name);
console.log(myObject.birthday);
console.log("name" in myObject);
console.log("birthday" in myObject);



////////////////////////////////////////////////////////////

let ids = [
    "upload-resume",
    "contact-us"
]

let colors = [
    "red",
    "blue"
]

let elements = ids.map((id) => {
    return document.getElementById(id);
})

for (let elem of elements) {
    elem.style.backgroundColor = "red";
}

elements.forEach((elem) => {
    elem.style.color = "blue";
})

let firstSigma = QuantFirms.find((firm) => {
    return firm.includes("Sigma");
})

console.log(firstSigma);