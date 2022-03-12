import React from "react";
//import { act }  from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { render, getByText, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';
//import TestRenderer from 'react-test-renderer'; 
import CustomHooks from "./Hooks";

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('CustomHooks Component ', () => {
    let button;
    it('should render the CustomHooks component', () => {
        const { result } = renderHook(CustomHooks);
        expect(result.current.count).toBe(0);
    });

    test('The `add` could correct change `count`', () => {
        const setStateMock = jest.fn();
        const useStateMock = (useState) => [useState, setStateMock];
        jest.spyon('React', 'useState').mockImplementation(useStateMock);
        const { getByText } = render(<CustomHooks />);
        button = getByText('Click me to Increase Counter !');
        fireEvent.click(button);
        expect(setStateMock).toHaveBeenCalled();
        //const { result } = renderHook(() => CustomHooks(0, callBack));
        // const onEventClick = jest.fn();
        // act(() => {
        //     ReactDOM.render(<CustomHooks onEventClick={onEventClick} />, container);
        // });
        // const button = container.querySelector('button');
        // act(() => { 
        //    result.current.user(); 
        //    // button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        // });
        // //expect(result.current.count).toBe(2);
        // expect(callBack.mock.calls.length).toBe(2);
    });

});