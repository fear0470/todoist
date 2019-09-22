import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase} from '../firebase';
import { collatedTasksExist } from '../helpers';

const collatedTasks = () => {};

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);

  userEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'cnccnw3');

      unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
          'date',
          '==',
          moment().format('DD/MM/YYYY')
          ))
        :selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;
  }, []);
}