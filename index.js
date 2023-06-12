const quizData=[
    {
     Question :' Who was the architect of the new Parliament House of India?',
     a :' Hasmukh Patel',
     b :  'Bimal Patel',
     c : 'Brinda Somaya',
     d : 'Rajiv Saini',
    },
    {
       Question :'Which one of the following statements is incorrect about muscles in the human body?',
       a :' Muscles work in pairs',
       b : 'Muscles become shorter, stiffer, and thicker when contraacted',
       c : 'Muscles can only push the bone',
       d : 'None of the above',

    },
    {
        Question : 'the most important cell type associated with the immunity of the body is -',
       a : 'platelets',
       b :' lymphocytes',
       c : 'RBCs',
       d : 'None of the above',
        
},
{
    Question : 'The stomata open or close due to changes in the -',
    a : 'protein composition of cells',
    b : 'amount of water in cells',
    c : 'position of the nucleus in cells',
    d :' None of the above'
    
  },
{
    Question :' The most important cell type associated with the immunity of the body is -',
    a : 'platelets',
    b : 'lymphocytes',
    c : 'RBCs',
    d : 'None of the above',
    
    

}

]

let currentIndex = 0;

function updateQuestionAndAnswer(quizIndex) {
    if (quizIndex >= quizData.length) {
        return;
    }

    const data = quizData[quizIndex];
    const question = data.Question;
    let a=data.a, b=data.b, c=data.c, d=data.d;
    let h1=document.querySelector("h1")
    h1.textContent = question;

    let labelA=document.querySelector("#labelA")
    labelA.textContent = a;
    let labelB=document.querySelector("#labelB")
    labelB.textContent = b;
    let labelC=document.querySelector("#labelC")
    labelC.textContent = c;
    let labelD=document.querySelector("#labelD")
    labelD.textContent = d;
}

updateQuestionAndAnswer(currentIndex);

let button=document.querySelector("button")

button.addEventListener('click', (event) => {
    currentIndex++;
    updateQuestionAndAnswer(currentIndex)
});

// console.log(h1)
// let quizContainer=document.querySelector(".quizConntainer")
// console.log(quizContainer)

// for(let container of quizData){
//     console.log(container)
//     h1.innerHTML=container.Question
//     console.log(container.Question)

    
// }