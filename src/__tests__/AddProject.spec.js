import React from 'react';
import { render, cleanup, fireEvent } from'@testing-library/react';
import { AddProject } from '../components/AddProject';
import { useSelectedProjectValue } from '../context';

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
                name: '🙌 THE OFFICE',
                projectId: '1',
                userId: 'jlIFXIwyAL3tzHMtzRbw',
                docId: 'michael-scott',
              },
              {
                name: '🚀 DAILY',
                projectId: '2',
                userId: 'jlIFXIwyAL3tzHMtzRbw',
                docId: 'daily-office',
              },
              {
                name: '🎯 FUTURE',
                projectId: '3',
                userId: 'jlIFXIwyAL3tzHMtzRbw',
                docId: 'wake-up',
              },
              {
                name: '📚 WORDS',
                projectId: '4',
                userId: 'jlIFXIwyAL3tzHMtzRbw',
                docId: 'arcade-fire',
              },
              {
                name: '🎵 MUSIC',
                projectId: '5',
                userId: 'jlIFXIwyAL3tzHMtzRbw',
                docId: 'bella-ciao',
              },
        ],
        setProjects: jest.fn(),
    })),
}));

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('I am resolved')),
            })),
        })),
    },
}));

beforeEach(cleanup);