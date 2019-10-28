import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';
import { JestEnvironment } from '@jest/environment';

Jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({ selectedProject: 1})),
    useProjectValue: jest.fn(() => ({ projects: [] }));
}));

beforeEach(cleanup);