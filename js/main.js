const quizData = [
    {
        question: "First off — what does the 3rd R of the AARRR Funnel stand for? ",
        img: "images/default.png",
        a: "Revenue",
        b: "Regression",
        c: "Retention",
        d: "Retrograde",
        correct: "c"
    },
    {
        question: "What does AMP stand for?",
        img: "images/default (1).png",
        a: "Accelerated Mobile Pages",
        b: "Advertisement mobile pages",
        c: "Augmented mobile pages",

        correct: "a"


    }, {
        question: "What are you doing if you disavow a link in Google’s Search Console?",
        img: "images/default (2).png",
        a: "Asking Google to disregard the link",
        b: "Asking Google to consider the link",
        c: "Reporting a website as spam",

        correct: "a"
    }, {
        question: "Where are Leaderboard ads usually displayed on web pages?",
        img: "images/default-firstframe.png",
        a: "Seamlessly embedded in editorial content",
        b: "Embedded in left navigation menu",
        c: "To the right of the page",
        d: "On the top of the page",
        correct: "d"
    }, {
        question: "What does Guerrilla marketing typically focus on?",
        img: "images/default (1).png",
        a: "Low cost creative marketing strategies",
        b: "Non profit organisations",
        c: "Cannibalization of other products/services",
        d: "Selling without sales tax",
        correct: "a"
    }, {
        question: "On Facebook, if the CTR of your ad increases, what will most likely happen to the CPC?",
        img: "images/default-firstframe (1).png",
        a: "Facebook does not have CPC as a metric",
        b: "No change",
        c: "Increase",
        d: "Decrease",
        correct: "d"
    }, {
        question: "In SEO, what's the ideal target keyword density of a piece of content?",
        img: "images/default-firstframe (2).png",
        a: "2-4%",
        b: "5-10%",
        c: "10-15%",
        d: "There is no ideal keyword density",
        correct: "d"
    }, {
        question: "Which one of these handsome chaps is our favorite SEO guru Rand Fishkin?",

        a: "<img class='imgyy' src='images/default.jfif' alt='' >",
        b: "<img class='imgyy' src='images/default (1).jfif' alt='' >",
        c: "<img class='imgyy' src='images/default (2).jfif' alt='' >",
        d: "<img class='imgyy' src='images/default (3).jfif' alt='' >",
        correct: "d"
    }, {
        question: "According to Litmus, what was the % share of email opens on desktop, webmail, and mobile in 2017?",

        a: "36% desktop, 17% webmail, and 47% mobile",
        b: "17% desktop, 36% webmail, and 47% mobile",
        c: "47% desktop, 17% webmail, and 36% mobile",

        correct: "b"
    }, {
        question: "What factors dictate whether an AdWords ad appears in the top position?",
        img: "images/default-firstframe (3).png",
        a: "Quality Score",
        b: "Total Ad Spend",
        c: "Quality Score and CPC bid",
        d: "Pay per Click",
        correct: "c"
    }, {
        question: "In Google Analytics, which of the following metrics would most strongly suggest a poorly performing landing page?",
        img: "images/default-firstframe (4).png",
        a: "Bounce Rate < 90ˆ%",
        b: "% New Visits > 90%",
        c: "None of the answers",
        d: "Session Duration > 5 minutes",
        e: "Bounce Rate > 90%",
        f: "Goal Conversion Rate > 20%",
        correct: "e"
    }


]

const quiz = document.getElementById("quiz")
const answeralls = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const f_text = document.getElementById("f_text")

const dd = document.getElementById("dd")
const ee = document.getElementById("ee")
const ff = document.getElementById("ff")


const img = document.getElementById("imgg")
const submitBtn = document.getElementById("submit")
let currentQuiz = 0;
let Score = 0;
function loadQuiz() {
    const Cquiz = quizData[currentQuiz];
    question.innerHTML =`<span>${currentQuiz+1} - </span>`+ Cquiz.question;
    a_text.innerHTML ='<span id="aspan class="span">A</span>'+ Cquiz.a
    b_text.innerHTML ='<span class="span">B</span>'+ Cquiz.b
    c_text.innerHTML ='<span class="span">C</span>'+ Cquiz.c
    if (Cquiz.d) {
        d_text.innerHTML ='<span class="span">D</span>'+ Cquiz.d
        dd.style.display = "block"
    }
    else {
        dd.style.display = "none"
    }
    if (Cquiz.e) {
        e_text.innerHTML ='<span class="span">E</span>'+ Cquiz.e
        ee.style.display = "block"
    }
    else {
        ee.style.display = "none"
    }
    if (Cquiz.f) {
        f_text.innerHTML ='<span class="span">F</span>'+ Cquiz.f
        ff.style.display = "block"
    }
    else {
        ff.style.display = "none"
    }
    Cquiz.img ? img.src = Cquiz.img : null;
    deselectAnswer();

}
loadQuiz();

function getSelected() {

    let answer = undefined;
    answeralls.forEach((answerall) => {
        if (answerall.checked) {
            
            answer = answerall.id;


        }
    })

    return answer;
}

function deselectAnswer() {
    answeralls.forEach((answerall) => {
        answerall.checked = false;


    })
}
/*
document.getElementById("up").addEventListener("click", () => {
    if(currentQuiz>0){
        document.getElementById("up").disabled=false;
       currentQuiz--
 if (currentQuiz < quizData.length) {
    loadQuiz();
}}else{
    document.getElementById("up").disabled=true;
}
})*/
submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            Score++;
        }
        currentQuiz++
    }
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
        
        <h2 class='hhhh'>You Answered ${Score} Questions Correctly </h2>
        
<h2 class='hhhnh'>The Answers</h2>

        `
       
        for(var i=0; i<quizData.length; i++){
            function answerss(){
            if(quizData[i].correct=="a"){
                return quizData[i].a
            }else if(quizData[i].correct=="b"){
                return quizData[i].b


            }
            else if(quizData[i].correct=="c"){
                return quizData[i].c


            }else if(quizData[i].correct=="d"){
                return quizData[i].d


            }else if(quizData[i].correct=="e"){
                return quizData[i].e


            }
            else if(quizData[i].correct=="f"){
                return quizData[i].f


            }}
            quiz.innerHTML +=`<p class='paragraphh'> ${(i+1) } - ${quizData[i].correct} )  ${answerss() }</p> 



            `

        }
        quiz.innerHTML+=`<button class="subb" onclick='location.reload()'>Reload</button>`
    }
})
