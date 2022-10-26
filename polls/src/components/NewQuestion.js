import { connect } from "react-redux";
import { useState } from "react";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestionPage = ({dispatch}) => {
    const [ fisrtText, setFirstText] = useState("");
    const [ secondText, setSecondTextText] = useState("");
    const navigate = useNavigate();

    const handleFirstChange = (e) => {
        const text = e.target.value;
        setFirstText(text);
    };

    const handleSecondChange = (e) => {
        const text = e.target.value;
        setSecondTextText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        dispatch(handleSaveQuestion(fisrtText, secondText));
        setFirstText("");
        setSecondTextText("");
        navigate("/");
    };

    return (
        <div>
            <h1>Would You Rather</h1>
            <h3>Create your own poll</h3>
            <h2>First Option:</h2>
            <input 
            className="input"
            placeholder="Option One"
            maxLength={300}
            value={fisrtText}
            onChange={handleFirstChange}
            />
            <h2>Second Option:</h2>
            <input 
            className="input"
            placeholder="Option Two"
            maxLength={300}
            value={secondText}
            onChange={handleSecondChange}
            />
            <button 
            onClick={handleSubmit}
            className="replying-to">
                Submit
            </button>
        </div>
    );
};


export default connect()(NewQuestionPage);