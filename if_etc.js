// --------GPA Calculater------------//

let exam1 = Number(prompt("Enter your first exam score: "))
let exam2 = Number(prompt("Enter your second exam score: "))

let final = Number(prompt("Enter your final exam score: "))

let GPA = (exam1*0.3) + (exam2*0.3) + (final*0.4);

if(GPA>=60){
    alert("You have passed your lesson!"+ GPA);
    console.log("You have passed you lesson!" + GPA);
}else{
    alert("You have failed your lesson!" + GPA);
    console.log("You have failed your lesson!" + GPA);
}