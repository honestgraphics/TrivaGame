$(document).ready(function () {

  //set variables
  var correctAnswers = 0;
  var uncorrectAnswers = 0;
  var unanswered = 0;
  var atimer;
  var qtimer;
  var questions = [
    ["In 2005, the North Carolina General Assembly paid homage to beach music by naming what dance the official state popular dance?", "q1", "Cha-Cha", "Shag", "Twist", "value4", "Shag", "https://media.rbl.ms/image?u=%2Ffiles%2F2016%2F09%2F04%2F6360862755037422192106387904_giphy%2520%2831%29.gif&ho=https%3A%2F%2Faz616578.vo.msecnd.net&s=110&h=afa25d4aeb7fc4e83b22fd86f7522d7aa83264f5315eb40acd4fdce29e77528e&size=980x&c=2307692390", ""],
    ["North Carolina features several beach music festivals held across the state each year. Where will the Pleasure Island Beach Music Festival be held June 5?", "q2", "Carolina Beach", "Sunset Beach", "Surfside Beach", "value4", "Carolina Beach", "", ""],
    ["Music legend General Johnson first performed beach music at a show in Raleigh in 1966 and is now associated with The Charimen of the Board. What hit song by the group contained a line describing its topic as 'Sweet Southern pearls?'", "q3", "Beach Girls", "Surfer Girls", "Carolina Girls", "value4", "Carolina Girls", "", ""],
    ["The Carolina Beach Music Awards are presented each year to acknowledge excellence in beach music. The first CAMMY Awards were held in 1995 in what Tar Heel town that is also associated with Cheerwine?", "q3", "Salisbury", "Morehead City", "Greensboro", "value4", "Salisbury", "", ""],
    ["In 1989, a film revolving around beach music entitled Shag was released. Part of the movie was filmed at Atlantic Beach and starred what child of star Peter Fonda?", "q3", "Felicia Fonda", "Bridget Fonda", "Carrie Fonda", "value4", "Bridget Fonda", "", ""],
    ["Beach music in North Carolina can trace its roots back to the time just after World War II when radio stations such as WGIV in Charlotte featured programs of what other style, which is said to have heavily influenced beach music?", "q3", "Rock and Roll", "Big Band", "Rhythm and Blues", "value4", "Rhythm and Blues4", "", ""],
    ["In its early days, beach music was performed in a variety of locations, including the Pickle Tobacco Warehouse. In what Duplin County town, famous for growing cucumbers, is the warehouse located?", "q3", "Faison", "Oak Grove", "Burgaw", "value4", "Faison", "", ""],
    ["From 1987 to 1990, beach music fans could follow their favorite groups as well as other related news in Carolina Class magazine. The periodical was edited by 'Fessa John Hook, who worked at what Salisbury radio station, the first to broadcast beach music full time?", "q3", "WDAV-FM", "WRDX-FM", "WSAL-FM", "value4", "WRDX-FM", "", ""],
  ];
  var content = $("#content");
  //assigns starting value for index of nested array
  var index = 0;

  //calls start game function (below)
  start();

  //start game function
  function start() {
    //create start button
    $(content).append('<button type="button" id="startButton">Start Game!</button>');
    //

  }

  //reset game function


  //timer
  //answer timer (5)
  function answerTimer () {
    var sec = 5;
    atimer=setInterval(function(){
    sec--;
    $(content).append('<h3 id="answerTimer">' + sec + '</h3>');
  }, 1000);
    if (sec === 0) {
      clearInterval(atimer);
    }
  }

  //question timer (30)
  function questionTimer () {
    var sec = 5;
    qtimer=setInterval(function(){
    sec--;
    document.getElementById("qTimerID").innerHTML=sec;
    if (sec === 0) {
      clearInterval(qtimer);
    }
  }, 1000);
  }

  //questions
  //populated the question onto the page
  function makeQuestions() {
    clear();
    clearInterval(qtimer);
    $(content).append('<h3 id="qTimerID">30</h3><form><h4>' + questions[index][0] + '</h4><input type="radio" name="' + questions[index][1] + '" value="' + questions[index][2] + '">' + questions[index][2] + '<input type="radio" name="' + questions[index][1] + '" value="' + questions[index][3] + '">' + questions[index][3] + '<input type="radio" name="' + questions[index][1] + '" value="' + questions[index][4] + '">' + questions[index][4] + '<input type="radio" name="' + questions[index][1] + '" value="' + questions[index][5] + '">' + questions[index][5] + '<button type="button" id="questionButton">Submit Answer</button></form>');
    questionTimer();
  }

  //controls what happens when start button is clicked
  $("#startButton").click(function () {
    //calls the function to populate the question onto the page
    makeQuestions();
  });
  //results - total scores after all questions answered


  //status - correct answer or if they ran out of time
  $(document.body).on("click", "#questionButton", function () {
    clearInterval(qtimer);
//right answer
console.log($("input:checked").val())
if ($("input:checked").val()==questions[index][6]) {
  clear();
  correctAnswers++;
  //tell user if right
  $(content).append('<h4>Way to go!</h4><img src="' + questions[index][7] + '"/><p>The Correct Answer Is ' + questions[index][6] + '.</p>');
  console.log(correctAnswers);
} 
//unanswered
else if ($("input:checked").val()==undefined) {
  clear();
  unanswered++;
  //tell user they did not answer the question
  $(content).append('<h4>Oops! You did not choose an answer!</h4><img src="' + questions[index][8] + '"/><p>The Correct Answer Is ' + questions[index][6] + '.</p>');
  console.log(unanswered);
} 
//wrong answer
else {
  clear();
  uncorrectAnswers++;
  //tell user they did not answer the question
  $(content).append('<h4>Uh Oh! You did not choose the right answer!</h4><img src="' + questions[index][8] + '"/><p>The Correct Answer Is ' + questions[index][6] + '.</p>');
  console.log(uncorrectAnswers); 
}

//reset question
if (index < questions.length-1){
//bring up new question
index++;
makeQuestions();
}
else {
//show score
clear();
$(content).append('<h4>Game Over! Your Score Is:</h4><p>Correct Answers: ' + correctAnswers + '</p><p>Incorrect Answers: ' + uncorrectAnswers + '</p><p>Unanswered Questions: ' + unanswered + '</p><button id="resetButton">Play Again!</button>');

}
  });

  //tells what to do if click on reset button
  $(document.body).on("click", "#resetButton", function () {
    //reset scores
    correctAnswers = 0;
    uncorrectAnswers = 0;
    unanswered = 0;
    index = 0;
    //calls the function to populate the question onto the page
    makeQuestions();

  });
  //clear content
  function clear() {
    $(content).empty();
  }


});