import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";


const LogIn = (props) => {
    const [ userText, setUserText] = useState("");
    const [ password, setPasswordText] = useState("");


    const handleUserChange = (e) => {
        const text = e.target.value;
        setUserText(text);
    };

    const handlePasswordChange = (e) => {
        const text = e.target.value;
        setPasswordText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(props.users[userText]){
            if(props.users[userText].password === password){
                props.dispatch(setAuthedUser(userText));
            }
        }
        setUserText("");
        setPasswordText("");
    };


    return(
        <div>
            <h1 className="center">
                Welcome to Employee Polls
            </h1>
            <h2 className="center">
                Log In
            </h2>
            <h4 className="center">
                User:
            </h4>
            <input 
            data-testid="user"
            className="input"
            placeholder="User"
            maxLength={100}
            value={userText}
            onChange={handleUserChange}
            />
            <h4 className="center">
                Password:
            </h4>
            <input 
            data-testid="password"
            className="input"
            placeholder="Password"
            maxLength={100}
            value={password}
            onChange={handlePasswordChange}
            />
            <button 
            data-testid="submit"
            onClick={handleSubmit}
            className="replying-to">
                Submit
            </button>
        </div>
    )
};

const mapStateToProps = ({ users, authedUser} ) => {
        return {
            users,
            authedUser
        };
};

export default connect(mapStateToProps)(LogIn);