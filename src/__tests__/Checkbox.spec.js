import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CheckBox } from '../components/Checkbox';


beforeEach(cleanup);

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn(),
                })),
            })),
        })),
    },
}));

describe('<CheckBox />', () => {
    describe('Success', () => {
        it('renders the task checkbox', () => {
            const { queryByTestId } = render(
                <CheckBox id="1" taskDesc="Finish this app" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        });

        it('renders the task checkbox and accepts an onClick', () => {
            const { queryByTestId } = render(
                <CheckBox id="1" taskDesc="Finish this app" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.click(queryByTestId('checkbox-action'));
        })

        it('renders the task checkbox and accepts an onKeyDown', () => {
            const { queryByTestId } = render(
                <CheckBox id="1" taskDesc="Finish this app" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.keyDown(queryByTestId('checkbox-action'));
        });
    });
});