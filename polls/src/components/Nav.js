import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";


const Nav = (props) => {
    
    const handleLogout = (e) => {

        e.preventDefault();
        props.dispatch(setAuthedUser(null));

    }

    return (
        <nav className="nav">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
                <Link to="/add">New Poll</Link>
            </li>
            <li >
                <span > Logged in as: {props.authedUser}</span>
            </li>
            <li >
                <button  onClick={handleLogout}
                className="replying-to">Logout</button>
            </li>
            </ul>
        </nav>
        );
};

const mapStateToProps = ({ authedUser}) => {
    return {
        authedUser
    };
};

export default  connect(mapStateToProps)(Nav);