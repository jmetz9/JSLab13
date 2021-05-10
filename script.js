$(document).ready(function () {
    $("button").on("click", getGrade);
});

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
        fname: $("input#fname").val(),
        lname: $("input#lname").val(),
        percentage: percent,
        grade: letter
    }

    $("p#fnameOutput").text("First name: " + student.fname)
    $("p#lnameOutput").text("Last name: " + student.lname)
    $("p#percentOutput").text("Score: " + student.percentage + "%")
    $("p#gradeOutput").text("Letter grade: " + student.grade)

}