var row = 1;

var  entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

function displayDetails(){
    var name = document.getElementById("name").value;
    var studentID = document.getElementById("studentID").value;
    var email = document.getElementById("email").value;
    var work = document.getElementById("work").value;
    var location = document.getElementById("location").value;
    var description = document.getElementById("description").value;
    /*var startDate = document.getElementById("startDate").value;*/

    if(!name || !studentID || !email || !work || !startDate || !location || !description ){
        alert("Please fill all the box ");
        return ;
    }
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    
    cell1.innerHTML = name ;
    cell2.innerHTML = studentID ;
    cell3.innerHTML = email ;
    cell4.innerHTML = work ;
    cell5.innerHTML = location ;
    cell6.innerHTML = startDate ;

    

    row++;

    
}
