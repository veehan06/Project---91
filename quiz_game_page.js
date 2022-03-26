function send(){
    number1 = document.getElementById("number1").value ;
    number2 = document.getElementById("number2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);
    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    answer = "<br>Answer : <input type='number' id='input_check_box' style='color:chocolate;' class='form-control'>";
    check = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row = question + answer + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}