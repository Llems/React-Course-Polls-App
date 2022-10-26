import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Nav from "../components/Nav";
import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
import { MemoryRouter } from "react-router-dom";


describe('Nav', () => {

    it('will match snapshot', () => {
        const store = createStore (reducer, middleware);; 

        var nav = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Nav authedUser={null} />
                </Provider>
            </MemoryRouter>
        );
        expect(nav).toMatchSnapshot();
    });

});