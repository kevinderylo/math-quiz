player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="QUESTION TURN- "+player1_name;
document.getElementById("player_answer").innerHTML="ANSWER TURN- "+player2_name;

function send(){
    get_number1=document.getElementById("number1").value;
    get_number2=document.getElementById("number2").value;
    number=get_number1*get_number2
    console.log(number);

    question="<h4 id='word_display'>Q."+get_number1+"X"+get_number2+"</h4>";
    input="<br> answer:<input type='text' id='checkbox'>";
    buttonCheck="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row=question+input+buttonCheck;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}

function check(){
    answer=document.getElementById("checkbox").value;
    console.log(answer);

    if(number == answer){
        if(answer_turn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="QUESTION TURN - "+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="QUESTION TURN - "+player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="ANSWER TURN - "+player2_name;
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="ANSWER TURN - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}