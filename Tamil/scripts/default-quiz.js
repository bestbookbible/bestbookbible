function assessQuestion(answerNumber, correctAnswer){
    if (answerNumber == correctAnswer){
        showCorrect();
    }
    else{
        showWrong();
    }
}

function moveToPage(nextPageUrl) {
  window.location.href = nextPageUrl;
}

function showCorrect() {
  let imgToShow = document.getElementById("correct");
  imgToShow.style.display = "block";
  imgToShow = document.getElementById("wrong");
  imgToShow.style.display = "none";
}

function showWrong() {
    let imgToShow = document.getElementById("wrong");
    imgToShow.style.display = "block";
    imgToShow = document.getElementById("correct");
    imgToShow.style.display = "none";
}
  