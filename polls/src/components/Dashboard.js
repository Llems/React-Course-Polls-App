import { connect } from "react-redux";
import DashboardTile from "./DashboardTile";
import React from "react";

const Dashboard = (props) => {
    const userAnswered = props.users[props.authedUser].answers;
    const answeredQuestions = props.questionIds.filter((id) => userAnswered.hasOwnProperty(id) )
    const unansweredQuestions = props.questionIds.filter((id) => !answeredQuestions.includes(id))
    const [currentQuestions, setCurrentQuestions] = React.useState("unanswered");



    const handleUnansweredClick = (e) => {
        e.preventDefault();

        setCurrentQuestions("unanswered");
    }

    const handleAnsweredClick = (e) => {
        e.preventDefault();

        setCurrentQuestions("answered");
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
            {currentQuestions === "unanswered" ?
            <>
                <h3 className="center "> Unanswered questions</h3>
                <ul className="dashboard-list">
                    {
                        unansweredQuestions.map((id) => (
                            
                            <li key={id}>
                                <DashboardTile id={id}/>
                            </li>
                        ))
                    }
                </ul>
            </>
            : 
                <>
                <h3 className="center"> Answered questions</h3>
                <ul className="dashboard-list">
                    {
                        answeredQuestions.map((id) => (
                            <li key={id}>
                                <DashboardTile id={id}/>
                            </li>
                        ))
                    }
                </ul>
                </>
            }
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