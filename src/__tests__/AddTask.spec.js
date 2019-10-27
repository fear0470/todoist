import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { AddTask } from '../components/AddTask';
import { useSelectedProjectValue } from '../context';
import expectExport from 'expect';

beforeEach(cleanup);

JestEnvironment.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('Never mock firebase')),
            })),
        })),
    },
}));

describe('<AddTask />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Success', () => {
        it('renders the <AddTask />', () => {
            const { queryByTestId } = render(<AddTask />);
            expect(queryByTestId('add-task-comp')).toBeTruthy();
        });

        it('renders the <AddTask /> quick overlay', () => {
            const setShowQuickAddTask = jest.fn();

            const { queryByTestId } = render(
                <AddTask
                    showAddTaskMain
                    shouldShowMain={false}
                    showQuickAddTask
                    setShowQuickAddTask={setShowQuickAddTask}
                />
            );
        })

        expect(queryByTestId('quick-add-task')).toBeTruthy();
    });

    it('renders the <AddTask /> main showable using onClick', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();
    });

    it('renders the <AddTask /> main showable using keyDown', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.keyDown(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();
    });

    it('renders the <AddTask /> project overlay when using onClick', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.click(queryByTestId('show-project-overlay'));
        expect(queryByTestId('project-overlay')).toBeTruthy();
    });

    it('renders the <AddTask /> project overlay when using onKeyDown', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.keyDown(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.keyDown(queryByTestId('show-project-overlay'));
        expect(queryByTestId('project-overlay')).toBeTruthy();
    });

    it('renders the <AddTask /> task date when using onClick', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.click(queryByTestId('show-task-date-overlay'));
        expect(queryByTestId('task-date-overlay')).toBeTruthy();
    });

    it('renders the <AddTask /> task date when using onKeyDown', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.keyDown(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.keyDown(queryByTestId('show-task-date-overlay'));
        expect(queryByTestId('task-date-overlay')).toBeTruthy();
    });

    it('renders the <AddTask /> main when cancel is clicked using onClick', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.click(queryByTestId('add-task-main-cancel'));
        expect(queryByTestId('add-task-main')).toBeTruthy();
    });

    it('renders the <AddTask /> task date when using onKeyDown', () => {
        const { queryByTestId } = render(<AddTask showAddTaskMain />);

        fireEvent.keyDown(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.keyDown(queryByTestId('add-task-main-cancel'));
        expect(queryByTestId('add-task-main')).toBeTruthy();
    });

    it('renders the <AddTask /> for quick add task and then clicks cancel using onClick', () => {
        const showQuickAddTask = true;
        const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
        const { queryByTestId } = render(
            <AddTask setShowQuickAddTask={setShowQuickAddTask} showQuickAddTask />
        );

        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.click(queryByTestId('add-task-quick-cancel'));
        expect(setShowQuickAddTask.toHaveBeenCalled();
    });

    it('renders the <AddTask /> for quick add task and then clicks cancel using onKeyDown', () => {
        const showQuickAddTask = true;
        const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
        const { queryByTestId } = render(
            <AddTask setShowQuickAddTask={setShowQuickAddTask} showQuickAddTask />
        );

        fireEvent.keyDown(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-main')).toBeTruthy();

        fireEvent.keyDown(queryByTestId('add-task-quick-cancel'));
        expect(setShowQuickAddTask.toHaveBeenCalled();
    });

    it('renders <AddTask /> and adds a task to TODAY', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            selectedProject: 'TODAY',
        }));

        const showQuickAddTask = true;
        const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
        const { queryByTestId } = render(
            <AddTask
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        );
        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-content')).toBeTruthy();

        fireEvent.change(queryByTestId('add-task-content'), {
            target: { value: 'I am a new task and I am good' },
        });
        expect(queryByTestId('add-task-content').value).toBe(
            'I am a new task and I am good'
        );

        fireEvent.click(queryByTestId('add-task'));
        expect(setShowQuickAddTask).toHaveBeenCalled();
    });

    it('renders <AddTask /> and adds a task to NEXT_7', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            selectedProject: 'NEXT_7',
        }));

        const showQuickAddTask = true;
        const setShowQuickAddTask = jest.fn(() => !showQuickAddTask);
        const { queryByTestId } = render(
            <AddTask
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        );
        fireEvent.click(queryByTestId('show-main-action'));
        expect(queryByTestId('add-task-content')).toBeTruthy();

        fireEvent.change(queryByTestId('add-task-content'), {
            target: { value: 'I am a new task and I am good' },
        });
        expect(queryByTestId('add-task-content').value).toBe(
            'I am a new task and I am good'
        );

        fireEvent.click(queryByTestId('add-task'));
        expect(setShowQuickAddTask).toHaveBeenCalled();
    });

})