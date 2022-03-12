
import React from "react";
import  ReactDOM from 'react-dom';
import { act }  from 'react-dom/test-utils';

import Events from "./Events";

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('Event Component ', () => {

    it('should render the event component for Toggle ON', () => {
        act(() => {
            ReactDOM.render(<Events  />, container);
        });
        const button = container.querySelector('button');
        //const button = React.findDOMNode('button');
        expect(button.textContent).toBe('ON');
    });

    it('should update the event component on CLick', () => {
        const onEventClick = jest.fn();
        act(() => {
            ReactDOM.render(<Events onEventClick={onEventClick} />, container);
        });
        
        const button = container.querySelector('button');
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(onEventClick).toHaveBeenCalledTimes(1);
        expect(button.innerHTML).toBe("OFF");
    });

});
