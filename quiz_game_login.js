function addUser(){
    player1_name = document.getElementById("player1").value ;
    player2_name = document.getElementById("player2").value ;
    localStorage.setItem("Player1", player1_name)
    localStorage.setItem("Player2", player2_name)
    window.location = "quiz_game_page.html";
}