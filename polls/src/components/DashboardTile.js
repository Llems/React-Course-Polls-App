import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import {  Link  } from "react-router-dom";

const DashboardTile = (props) => {
    const {author, timestamp } = props.question;

    return(
        <div className="question">
            <div className="question-info"> 
                <div>
                    <span>
                        {author}
                    </span>
                    <div>
                        timestamp = {formatDate(timestamp)}
                    </div>
                    <hr/>
                    <Link to={'/questions/' + props.id} className="replying-to">
                        Show
                    </Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, {id}) => {
        const question = questions[id];


        return {
            id,
            authedUser,
            users,
            question 
    }
};

export default connect(mapStateToProps)(DashboardTile);