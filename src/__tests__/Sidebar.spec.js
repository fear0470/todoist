import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Sidebar } from '../components/layout/Sidebar';

jest.mock('..context', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        setSelectedProject: jest.fn(() => 'INBOX'),
    })),
    useProjectValue: jest.fn(() => ({
        setProjects: jest.fn(),
        projects: [
            {
              name: '🙌 THE OFFICE',
              projectId: '1',
              userId: 'jlIFXIwyAL3tzHMtzRbw',
              docId: 'michael-scott',
            },
          ],
    })),
}));

beforeEach(cleanup);