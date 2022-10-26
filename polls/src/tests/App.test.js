import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../components/App";
import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
import { MemoryRouter } from "react-router-dom";


describe('App', () => {

    it('will match snapshot', () => {
        const store = createStore (reducer, middleware);; 

        var app = render(
            <MemoryRouter>
                <Provider store={store}>
                    <App authedUser={null} />
                </Provider>
            </MemoryRouter>
        );
        expect(app).toMatchSnapshot();
    });

});