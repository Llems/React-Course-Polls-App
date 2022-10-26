import EmptyPage from './404Page';
import { connect } from "react-redux";
import { useNavigate, useLocation, useParams} from "react-router-dom";
import { handleSaveQuestionAnswer, removeQuestionAnswer} from '../actions/questions'


const withRouter = (Component) => {
        const ComponentWithRouterProp = (props) => {
            let location = useLocation();
            let navigate = useNavigate();
            let params = useParams();
    
            return <Component {...props} router={{ location, navigate, params }} />;
        };
    
        return ComponentWithRouterProp;
};


const Question = (props) => {
    const question = props.questions[props.router.params.id];
    if(question === undefined){
        return( 
            <div>
                <EmptyPage/>
            </div>
        )
    }
    
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const usersChoice = props.users[props.authedUser].answers[question.id];

    const handleButtonClickOne = (e) =>{
        e.preventDefault();

        if(usersChoice !== undefined){
            if(usersChoice === "optionTwo"){
                props.dispatch(removeQuestionAnswer(props.authedUser,props.router.params.id, 'optionTwo'))
            }
        }
        if(usersChoice !== "optionOne"){
        props.dispatch(handleSaveQuestionAnswer(props.authedUser,props.router.params.id, 'optionOne'))
        }
    }

    const handleButtonClickTwo = (e) =>{
        e.preventDefault();

        if(usersChoice !== undefined){
            if(usersChoice === "optionOne"){
                props.dispatch(removeQuestionAnswer(props.authedUser,props.router.params.id, 'optionOne'))
            }
        }
        if(usersChoice !== "optionTwo"){
        props.dispatch(handleSaveQuestionAnswer(props.authedUser,props.router.params.id, "optionTwo"))
        }
    }


    return (
            <div>
                <h1> Poll by {question.author}</h1>
                <img alt="user avatar" src={props.users[props.authedUser].avatarURL}/>
                <h2> Would you rather:</h2>
                <h3>{question.optionOne.text}</h3>
                <button className="replying-to" onClick={handleButtonClickOne}> Choose </button>
                {usersChoice === "optionOne" ? <span> Currently Chosen</span> : null } 
                <h5>Current Votes:{optionOneVotes}, Percentage of Votes: %{ (optionOneVotes/totalVotes) * 100}</h5>
                <hr/>
                <h3>{question.optionTwo.text}</h3>
                <button className="replying-to" onClick={handleButtonClickTwo}> Choose </button>
                {usersChoice === "optionTwo" ? <span> Currently Chosen</span> : null } 
                <h5>Current Votes:{optionTwoVotes}, Percentage of Votes:%{ (optionTwoVotes/totalVotes) * 100}</h5>
            </div>
        );
};

const mapStateToProps = ({ authedUser, questions, users } ) => {
    return {
        questions,
        authedUser,
        users
    };
};

export default  withRouter(connect(mapStateToProps)(Question));