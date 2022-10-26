export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function updateUserQuestions(question, authedUser) {
    const info = question.question.id;
    
    return{
        type: UPDATE_USER_QUESTIONS,
        info,
        authedUser, 
    }
} 

export function updateUserAnswer(authedUser,qid, answer) {
    
    return{
        type: UPDATE_USER_ANSWER,
        authedUser,
        qid, 
        answer, 
    }
} 