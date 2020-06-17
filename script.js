var scoreTexts = [
  "Don't even try it",
  "Yikes",
  "Better Luck Next Time",
  "Maybe Try Some Roses?",
  "You are pretty close...",
  "Ask them nicely",
  "Wow",
  "Nice.",
  "NOICE!"
];

$( document ).ready(function() {

  $(".result").hide();

  $("#rightInput").on('change', function() {

    $(".uploadImageRight").text("Sucessfully Uploaded...");

  });

  $("#leftInput").on('change', function() {

    $(".uploadImageLeft").text("Sucessfully Uploaded...");

  });

});

function clickButton() {

  $("#startButton").addClass("loading");
  $("#startButton").text("Loading...");

  setTimeout(function () {

    var score = 0.49;

    var leftSize = document.getElementById('leftInput').files[0].size;
    var rightSize = document.getElementById('rightInput').files[0].size;

    if (leftSize > rightSize) {

        score = rightSize / leftSize;

    } else {

        score = leftSize / rightSize;
 
    }

    var scoreText = scoreTexts[Math.floor(score * scoreTexts.length)];
    var scoreNumber = Math.floor(score * 100) + "%";

    $("#resultText").text(scoreText);
    $("#resultScore").text(scoreNumber);

    $("#startButton").removeClass("loading");
    $("#startButton").text("Another One!");
    $(".result").show();

  }, Math.floor(Math.random() * 50) * 100);

}

function closeResult() {

  $(".result").hide();

}
