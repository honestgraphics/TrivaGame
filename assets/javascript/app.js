$(document).ready(function () {

  //set variables
  var correctAnswers = 0;
  var uncorrectAnswers = 0;
  var unanswered = 0;
  var atimer;
  var qtimer;
  var questions = [
    ["In 2005, the North Carolina General Assembly paid homage to beach music by naming what dance the official state popular dance?", "q1", "Cha-Cha", "Shag", "Twist", "Macarena", "Shag", "assets/images/shag.gif", "assets/images/shaglost.gif"],
    ["North Carolina features several beach music festivals held across the state each year. Where will the Pleasure Island Beach Music Festival be held this year?", "q2", "Carolina Beach", "Sunset Beach", "Surfside Beach", "Corolla", "Carolina Beach", "assets/images/assets/images/shag.gif", "assets/images/shaglost.gif"],
    ["Music legend General Johnson first performed beach music at a show in Raleigh in 1966 and is now associated with The Charimen of the Board. What hit song by the group contained a line describing its topic as 'Sweet Southern pearls?'", "q3", "Beach Girls", "Surfer Girls", "Carolina Girls", "value4", "Carolina Girls", "assets/images/genjohnson.jpg", "assets/images/shaglost.gif"],
    ["The Carolina Beach Music Awards are presented each year to acknowledge excellence in beach music. The first CAMMY Awards were held in 1995 in what Tar Heel town that is also associated with Cheerwine?", "q3", "Salisbury", "Morehead City", "Greensboro", "value4", "Salisbury", "assets/images/cbmawin.jpg", "assets/images/shaglost.gif"],
    ["In 1989, a film revolving around beach music entitled Shag was released. Part of the movie was filmed at Atlantic Beach and starred what child of star Peter Fonda?", "q3", "Felicia Fonda", "Bridget Fonda", "Carrie Fonda", "value4", "Bridget Fonda", "assets/images/bridgetwin.jpg", "assets/images/shaglost.gif"],
    ["Beach music in North Carolina can trace its roots back to the time just after World War II when radio stations such as WGIV in Charlotte featured programs of what other style, which is said to have heavily influenced beach music?", "q3", "Rock and Roll", "Big Band", "Rhythm and Blues", "value4", "Rhythm and Blues", "assets/images/randbwin.gif", "assets/images/shaglost.gif"],
    ["In its early days, beach music was performed in a variety of locations, including the Pickle Tobacco Warehouse. In what Duplin County town, famous for growing cucumbers, is the warehouse located?", "q3", "Faison", "Oak Grove", "Burgaw", "value4", "Faison", "assets/images/shag.gif", "assets/images/shaglost.gif"],
    ["From 1987 to 1990, beach music fans could follow their favorite groups as well as other related news in Carolina Class magazine. The periodical was edited by 'Fessa John Hook, who worked at what Salisbury radio station, the first to broadcast beach music full time?", "q3", "WDAV-FM", "WRDX-FM", "WSAL-FM", "value4", "WRDX-FM", "assets/images/shag.gif", "assets/images/shaglost.gif"],
  ];
  
  //set variable to get content div, which is where everything is being added and removed
  var content = $("#content");
  //assigns starting value for index of nested array
  var index = 0;

  //calls start game function (below)
  start();

  //start game function
  function start() {
    //create start button and puts it on page and puts start image on page
    $(content).append('<button type="button" id="startButton">Start Game!</button><img id="startImg" src="https://3.bp.blogspot.com/-TouJIg3A0JM/WUNBLYjzZCI/AAAAAAAAWaQ/oyFWoPfVPuwgDnM5cr7d24u6Yqmzka-HQCLcBGAs/s1600/dfdd8ea6fbbcfc4243e0795f9ff49b97.jpg">');
    //
  }

  //reset game function


  //timer
  //answer timer (5)
  function answerTimer() {
    var sec = 5;
    atimer=setInterval(function(){
    sec--;
    document.getElementById("answerTimer").innerHTML=sec;
    if (sec === 0) {
      clearInterval(atimer);
      if (index < questions.length-1){
        //bring up new question
        makeQuestions();
        }
      else {
        //show score
        clear();
        $(content).append('<h4>Game Over! Your Score Is:</h4><p>Correct Answers: ' + correctAnswers + '</p><p>Incorrect Answers: ' + uncorrectAnswers + '</p><p>Unanswered Questions: ' + unanswered + '</p><button id="resetButton">Play Again!</button>');
        }
    }
  }, 1000);
  }

  //question timer (30)
  function questionTimer() {
    var sec = 30;
    qtimer=setInterval(function(){
    sec--;
    document.getElementById("qTimerID").innerHTML=sec;
    if (sec === 0) {
      clearInterval(qtimer);
      clear();
      unanswered++;
      //tell user they did not answer the question
      $(content).append('<h3 id="answerTimer">5</h3><h4>Oops! You ran out of time!</h4><img src="' + questions[index][8] + '"/><p>The Correct Answer Is: ' + questions[index][6] + '</p>');
      //reset question
      if (index < questions.length-1){
        //bring up new question
        index++;
        answerTimer();
        }
      else {
        //show score
        clear();
        $(content).append('<h4>Game Over! Your Score Is:</h4><p>Correct Answers: ' + correctAnswers + '</p><p>Incorrect Answers: ' + uncorrectAnswers + '</p><p>Unanswered Questions: ' + unanswered + '</p><button id="resetButton">Play Again!</button>');
        }
    }
  }, 1000);
  }

  //questions
  //populated the question onto the page
  function makeQuestions() {
    clear();
    clearInterval(atimer);
    $(content).append('<h3 id="qTimerID">30</h3><form><h4>' + questions[index][0] + '</h4><input type="radio" name="' + questions[index][1] + '" value="' + questions[index][2] + '"><p>' + questions[index][2] + '</p></br><input type="radio" name="' + questions[index][1] + '" value="' + questions[index][3] + '"><p>' + questions[index][3] + '</p></br><input type="radio" name="' + questions[index][1] + '" value="' + questions[index][4] + '"><p>' + questions[index][4] + '</p></br><input type="radio" name="' + questions[index][1] + '" value="' + questions[index][5] + '"><p>' + questions[index][5] + '</p></br><button type="button" id="questionButton">Submit</button></form>');
    questionTimer();
  }

  //controls what happens when start button is clicked
  $("#startButton").click(function () {
    //calls the function to populate the question onto the page
    makeQuestions();
  });

//status - correct answer or if they ran out of time
$(document.body).on("click", "#questionButton", function () {
  clearInterval(qtimer);
//right answer
console.log($("input:checked").val())
if ($("input:checked").val()==questions[index][6]) {
  clear();
  correctAnswers++;
  //tell user if right
  $(content).append('<h3 id="answerTimer">5</h3><h4>Way to go!</h4><img src="' + questions[index][7] + '"/><p>The Correct Answer Is: ' + questions[index][6] + '</p>');
  console.log(correctAnswers);
} 
//unanswered
else if ($("input:checked").val()==undefined) {
  clear();
  unanswered++;
  //tell user they did not answer the question
  $(content).append('<h3 id="answerTimer">5</h3><h4>Oops! You did not choose an answer!</h4><img src="' + questions[index][8] + '"/><p>The Correct Answer Is: ' + questions[index][6] + '.</p>');
  console.log(unanswered);
} 
//wrong answer
else {
  clear();
  uncorrectAnswers++;
  //tell user they did not answer the question
  $(content).append('<h3 id="answerTimer">5</h3><h4>Uh Oh! You did not choose the right answer!</h4><img src="' + questions[index][8] + '"/><p>The Correct Answer Is: ' + questions[index][6] + '</p>');
  console.log(uncorrectAnswers);
}

//reset question
if (index < questions.length-1){
  //bring up new question
  index++;
  answerTimer();
  }
else {
  //show score
  answerTimer();
  // clear();
  // $(content).append('<h4>Game Over! Your Score Is:</h4><p>Correct Answers: ' + correctAnswers + '</p><p>Incorrect Answers: ' + uncorrectAnswers + '</p><p>Unanswered Questions: ' + unanswered + '</p><button id="resetButton">Play Again!</button>')
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