
// import the utility functions "decodeHtml" and "shuffle"
import { decodeHtml, shuffle } from './utils.js' 

// get the elements from the DOM
const questionElement = document.querySelector('#question')
const answersElement = document.querySelector('#answers')
const nextQuestionElement = document.querySelector('#nextQuestion')


const url = 'https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple'
let partone = ''
let partTwo = ''

// IIFE (so we can use async/await)
;(async () => {

	// todo: create your "getNextQuestion" function

const getNextQuestion = async (url) => {
// 	//
// 	fetch(url)
// 	.then(data => data.json())
// 	.then(json => {

// 	const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
// const answers = shuffle([ ...incorrect, correct ])
// //console.log({ question, answers, correct })
// return { question, answers, correct }
// }


const data = await fetch(url)
const json = await data.json()

const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
const answers = shuffle([ ...incorrect, correct ])
//console.log({ question, answers, correct })
return { question, answers, correct }


}




partone = await getNextQuestion(url)
//console.log(partone)
partTwo = partone.question


//console.log(partone.question) //This works! YAY!


	// todo: create your "renderQuestion" function


//destructure in the params.. ok..
const renderQuestion = (partOne) => {
	decoded = decodeHtml(partOne.question)
	questionElement.textContent = decoded
	//console.log(decoded)
}
//console.log(renderQuestion().question)
// console.log(question)
// console.log(answers)
//console.log() //?????
//partTwo = await renderQuestion()

renderQuestion()

	// todo: add the event listener to the "nextQuestion" button

})()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
