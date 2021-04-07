function addUser(){
    var player1_name = document.getElementById("player1_name_input").value ;
    var player2_name = document.getElementById("player2_name_input").value ;
    localStorage.setItem("player_1_name",player1_name);
    localStorage.setItem("player_2_name",player2_name);
    window.location = "math_quiz.html";
}

player1_get = localStorage.getItem("player_1_name");
 player2_get = localStorage.getItem("player_2_name");

 player1_score = 0;
 player2_score = 0;

 document.getElementById("Player_1_name").innerHTML = player1_get + ": ";
 document.getElementById("Player_2_name").innerHTML = player2_get + ": ";

 document.getElementById("player_1_score").innerHTML = player1_score;
 document.getElementById("player_2_score").innerHTML = player2_score;

 document.getElementById("player_question").innerHTML = "Question Turn - " + player1_get;
 document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_get;

 function Send() {
     get_number1 = document.getElementById("Number1").value;
     get_number2 = document.getElementById("Number2").value;
     get_question = parseInt(get_number1) * parseInt(get_number2);

     question_multiply = "<h4 id='number_display'>" + get_number1 + "x" + get_number2 +"</h4>";
     input_box = "<br>Answer : <input type='number' id='input_check_box' class='textBox form-control'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_multiply + input_box + check_button;
     document.getElementById("output").innerHTML = row;
     document.getElementById("Number1").value = "";
     document.getElementById("Number2").value = "";
 }

 question_turn = "player1";
 answer_turn = "player2";

 function check() {
    get_answer = document.getElementById("input_check_box").value;
     

     if (get_answer == get_question) {
         if (answer_turn == "player1") {
             player1_score = player1_score + 1;
             document.getElementById("player_1_score").innerHTML = player1_score;
         } else {
            player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
         }
     }

     if(question_turn == "player1"){
         question_turn = "player2";
         document.getElementById("player_question").innerHTML = "Question Turn - " + player2_get;
     }
     else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_get;
     }

     if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_get;
    }
    else{
       answer_turn = "player1";
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_get;
    }

document.getElementById("output").innerHTML = "";

    }