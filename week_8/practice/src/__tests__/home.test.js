import {render, screen} from "@testing-library/react";
import Home from "../pages/home";
import '@testing-library/jest-dom'

test('debug home page view', () => {

    render(
        <Home/>
    );

    screen.debug();
});


describe('HomePage Component', () => {

    it('comparing snapshot', () => {
        const component = render(<Home/>);
        expect(component).toMatchSnapshot();
    });


    it('render header text', () => {
        const component = render(<Home/>);

        const HelloMessage = component.getByText(/Welcome to our Application, Stay Udacious 📚/i);

        expect(HelloMessage).toBeInTheDocument();
    });



});
