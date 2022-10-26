import { render } from "@testing-library/react";
import EmptyPage from "../components/404page";

describe('404 Page', () => {

    it('will match snapshot', () => {
        var emptyPage = render(<EmptyPage/>);
        expect(emptyPage).toMatchSnapshot();
    });
});