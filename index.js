// Your code here
//  function saturdayFun(text) {
//   console.log(`This Saturday, I want to ${text}!`)   
// }

function saturdayFun(hobby="roller-skate"){
    console.log("This Saturday, I want to ${hobby}")
    return `This Saturday, I want to ${hobby}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function () {
    let activity = "go to the office";
    console.log("This Monday, I will ${activity}.");
    return `This Monday, I will ${activity}.`; 
}
mondayWork();
mondayWork("This Monday, I will work from home.");





