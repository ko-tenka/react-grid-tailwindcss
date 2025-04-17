import { useState } from 'react';
import TaskPage from '../../wigetes/TaskPage/TaskPage';
import Widgetes from '../../wigetes/Widgetes/Widgetes';

type Task = {
  id: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export default function Manage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counter, setCounter] = useState(3);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: `task-${counter}`,
      title,
      x: 0,
      y: Infinity, // добавится в конец
      w: 2,
      h: 2,
    };
    setTasks(prev => [...prev, newTask]);
    setCounter(c => c + 1);
  };

  return (
    <div>
      <Widgetes onAdd={addTask} />
      <TaskPage tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
