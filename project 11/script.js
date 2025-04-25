const student = {
    name:"Zuhair",
    grade: 6
};
const json_text = JSON.stringify(student);
document.writeln(json_text + "<br>");
const student_new = JSON.parse(json_text);
document.writeln(student_new.name + "<br><br>");
function bringPizza(){
    return new Promise(function(resolve, reject){
        const friendBroughtPizza = true;
        setTimeout(function() {
            if (friendBroughtPizza) {
            resolve("Your friend has brought pizza.");
        }
    else {
        reject("Oops!Your friend did not bring pizza.")
    }
    },2000);
    })
}
async function hangout() {
    document.writeln("You called your friend to bring pizza! 📞");
    try{
        const message = await bringPizza();
        document.writeln(message+"<br>");
        document.writeln("Let's hangout.<br>");
    } catch (error) {
        document.writeln(error+"<br>");
        document.writeln("We cant hangout.<br>");
    }

}

hangout();
