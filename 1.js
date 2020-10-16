
var john = (99 + 136 + 112) / 3;
var mike = (116 + 94 + 123) / 3;
var mary = (97 + 134 + 105) / 3;
console.log("John平均分: " + john, "Mike平均分: " + mike, "Mary平均分: "+ mary);

if (john > mike && john > mary) {
    console.log("John" + john + "胜利")
} 
else if (mike > john && mike > mary) {
    console.log("Mike" + mike + "胜利")
} 
else if (mary > john && mary> mike) {
    console.log("Mary" + mary + "胜利")
} 
else {
    console.log("比赛为平局")
}
var markMass = 54,markHeight = 180;
var johnMass = 51,johnHeight = 172;
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("MarkBMI: " + markBMI.toPrecision(1), "JohnBMI: " + johnBMI.toPrecision(1));
var high = (johnBMI > markBMI) ? true : false;
console.log(high);
console.log("Mark的BMI是否比John更高？"+String(high));
var alt = "";
var num = 4;
for(var i=1; i<=num; i++){
    var blank = "";
    for(var j=1; j<=num-i; j++){   
        blank += " ";
    }
    var stars = "";
    for(var m=1; m<=i; m++){       
        stars += "*"+" ";
    }
    alt += blank + stars + "\n";  
}
for(var i=num-1; i>0; i--){      
    var blank = "";
    for(var j=1; j<=num-i; j++){  
        blank += " ";
    }
    var stars = "";
    for(var m=1; m<=i; m++){      
        stars += "*"+" ";
    }
    alt += blank + stars + "\n";   
}
console.log(alt);