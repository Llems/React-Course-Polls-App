import { connect } from "react-redux";
import DashboardTile from "./DashboardTile";
import React from "react";

const Dashboard = (props) => {
    const userAnswered = props.users[props.authedUser].answers;
    const answeredQuestions = props.questionIds.filter((id) => userAnswered.hasOwnProperty(id) )
    const unansweredQuestions = props.questionIds.filter((id) => !answeredQuestions.includes(id))
    const [showUnanswered, setShowUnanswered] = React.useState(true);
    const [showAnswered, setShowAnswered] = React.useState(false);


    const handleUnansweredClick = (e) => {
        e.preventDefault();

        setShowUnanswered(!showUnanswered);
    }

    const handleAnsweredClick = (e) => {
        e.preventDefault();

        setShowAnswered(!showAnswered);
    }

    return(
        <div> 
            <nav className="nav">
                <ul>
                <li>
                    <button onClick={handleUnansweredClick} className="replying-to" >Show Unanswered</button>
                </li>
                <li>
                    <button  onClick={handleAnsweredClick} className="replying-to" >Show Answered</button>
                </li>
                
                </ul>
            </nav>
            <h3 className="center "> Unanswered questions</h3>
            {showUnanswered ? 
                <ul className="dashboard-list">
                    {
                        unansweredQuestions.map((id) => (
                            
                            <li key={id}>
                                <DashboardTile id={id}/>
                            </li>
                        ))
                    }
                </ul>
            : null }
            
            <h3 className="center"> Answered questions</h3>
            {showAnswered ? 
            <ul className="dashboard-list">
                {
                    answeredQuestions.map((id) => (
                        <li key={id}>
                            <DashboardTile id={id}/>
                        </li>
                    ))
                }
            </ul>
            : null}
        </div>
    )
};

const mapStateToProps = ({questions, authedUser, users}) => ({
    questionIds: Object.keys(questions).sort(
        (a,b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
    users
});

export default connect(mapStateToProps)(Dashboard);