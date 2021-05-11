$(document).ready(function () {
    $("button#add").on("click", getGrade);
    $("button#sortName").on("click", printByName);
    $("button#sortPercent").on("click", printByPercent);
});

let studentList = [];

function getGrade(){

    let pointsEarned = $("input#pointsEarned").val()
    let pointsPossible = $("input#pointsPossible").val()
    let percent = ((pointsEarned/pointsPossible)*100).toFixed(2)


    let letter = "A"
    if(percent < 90){
        letter = "B"
        if(percent < 80){
            letter = "C"
            if(percent < 70){
                letter = "D"
                if(percent < 60){
                    letter = "F"
                }
            }
        }
    }

    let student = {
        firstName: $("input#fname").val(),
        lastName: $("input#lname").val(),
        percentage: percent,
        grade: letter
    }

    $("p#fnameOutput").text("First name: " + student.firstName)
    $("p#lnameOutput").text("Last name: " + student.lastName)
    $("p#percentOutput").text("Score: " + student.percentage + "%")
    $("p#gradeOutput").text("Letter grade: " + student.grade)

    studentList.push(JSON.stringify(student))
    $("p#listOutput").append(JSON.stringify(student))
    $("p#listOutput").append("\n")
}

function printByName(){
    $("p#listOutput").text("");
    studentList.sort(sortName);

    for(let i = 0; i < studentList.length; i++){
        $("p#listOutput").append(JSON.stringify(studentList[i]) + "\n")
    }
}

function printByPercent(){
    $("p#listOutput").text("");
    studentList.sort(sortPercent);

    for(let i = 0; i < studentList.length; i++){
        $("p#listOutput").append(JSON.stringify(studentList[i]) + "\n")
    }
}

function sortName(a,b){

    if(a.firstName < b.firstName){
        return -1
    }

    else if(a.firstName > b.firstName){
        return 1
    }

    else{
        return 0
    }

}

function sortPercent(a,b){

    if(a.percentage < b.percentage){
        return -1
    }

    else if(a.percentage > b.percentage){
        return 1
    }

    else{
        return 0
    }

}