import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { updateUserQuestions, updateUserAnswer } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const REMOVE_QUESTION_ANSWER = "REMOVE_QUESTION_ANSWER";


function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions(questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestionAnswer(authedUser, qid, answer){
    return{
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function removeQuestionAnswer(authedUser, qid, answer){
    return{
        type: REMOVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText){
    return(dispatch, getState ) => {
        const {authedUser } = getState();

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => dispatch(updateUserQuestions(question, authedUser)))
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer){
    return(dispatch ) => {

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => dispatch(addQuestionAnswer(authedUser,qid, answer)))
        .then(() => dispatch(updateUserAnswer(authedUser,qid, answer)))
    }
}

