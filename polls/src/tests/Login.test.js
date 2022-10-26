import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import LogIn from "../components/LogIn";
import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';


describe('LoginPage', () => {

    it('will match snapshot', () => {
        const store = createStore (reducer, middleware);; 

        var login = render(
            <Provider store={store}>
                <LogIn users={ {}} authedUser={null} />
            </Provider>
        );
        expect(login).toMatchSnapshot();
    });

    it("will reset the user text field when submit is clicked", () => {
        const store = createStore (reducer, middleware);; 

        var login = render(
            <Provider store={store}>
                <LogIn users={ {}} authedUser={null} />
            </Provider>
        );
        
        var input = login.getByTestId("user");
        fireEvent.change(input, {target: {value: "fake user"}});
        var sumbitButton = login.getByTestId("submit");
        fireEvent.click(sumbitButton);
        expect(input.value).toBe("");
    });

    it("will reset the password text field when submit is clicked", () => {
        const store = createStore (reducer, middleware);; 

        var login = render(
            <Provider store={store}>
                <LogIn users={ {}} authedUser={null} />
            </Provider>
        );
        
        var input = login.getByTestId("password");
        fireEvent.change(input, {target: {value: "fake password"}});
        var sumbitButton = login.getByTestId("submit");
        fireEvent.click(sumbitButton);
        expect(input.value).toBe("");
    });
});