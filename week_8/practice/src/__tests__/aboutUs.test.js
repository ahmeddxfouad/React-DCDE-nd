import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import AboutUs from "../pages/aboutUs";



describe('AboutUs Component', () => {

    it('comparing snapshot', () => {
        const component = render(<AboutUs/>);
        expect(component).toMatchSnapshot();
    });

    it('render header text', () => {
        const component = render(<AboutUs/>);

        const HelloMessage = component.getByText(/Hello, this is/i);

        expect(HelloMessage).toBeInTheDocument();
    });

});
