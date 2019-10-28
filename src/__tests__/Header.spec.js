import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';

Jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({ selectedProject: 1})),
    useProjectValue: jest.fn(() => ({ projects: [] }));
}));

beforeEach(cleanup);

describe('<Header />', () => {
    describe('Success', () => {
        it('renders the header component', () => {
            const { queryByTestId } = render(<Header />);
            expect(queryByTestId('header')).toBeTruthy();
        });

        it('renders the header component and activates dark mode using onClick', () => {
            const darkMode = false;
            const setDarkMode = jest.fn(() => !darkMode);

            const { queryByTestId } = render(
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            );
            expect(queryByTestId('header')).toBeTruthy();
            
            fireEvent.click(queryByTestId('dark-mode-action'));
            expect(setDarkMode).toHaveBeenCalledWith(true);
        });

        it('renders the header component and activates dark mode using onKeyDown', () => {
            const darkMode = false;
            const setDarkMode = jest.fn(() => !darkMode);

            const { queryByTestId } = render(
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            );
            expect(queryByTestId('header')).toBeTruthy();
            
            fireEvent.keyDown(queryByTestId('dark-mode-action'));
            expect(setDarkMode).toHaveBeenCalledWith(true);

            fireEvent.keyDown(queryByTestId('dark-mode-action'));
            expect(setDarkMode).toHaveBeenCalledTimes(2);
        });
})