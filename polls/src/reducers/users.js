import { RECEIVE_USERS, UPDATE_USER_QUESTIONS, UPDATE_USER_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case UPDATE_USER_QUESTIONS:
            return{
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.info]) 
                }
            }
        case UPDATE_USER_ANSWER:
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
        }
}