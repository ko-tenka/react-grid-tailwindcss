import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

type Task = {
  id: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Props = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

export default function TaskPage({ tasks }: Props) {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: tasks.map(task => ({ i: task.id, x: task.x, y: task.y, w: task.w, h: task.h })) }}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={100}
        isResizable
        isDraggable
        margin={[10, 10]}
        containerPadding={[10, 10]}
      >
        {tasks.map(task => (
          <div key={task.id} className='bg-white rounded-lg'>
            <strong>{task.title}</strong>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}


