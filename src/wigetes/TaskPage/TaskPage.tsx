import { useState } from 'react';
import { Responsive, WidthProvider, Layouts } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts: Layouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 3, h: 2 },
    { i: 'c', x: 5, y: 0, w: 2, h: 2 },
  ]
};

export default function TaskPage() {
  const [layouts, setLayouts] = useState<Layouts>(defaultLayouts);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={100}
        isResizable
        isDraggable
        onLayoutChange={(_, allLayouts) => setLayouts(allLayouts)}
        margin={[10, 10]}
        containerPadding={[10, 10]}
      >
        <div key="a" style={{ background: '#eee', border: '1px solid #aaa' }}>A</div>
        <div key="b" style={{ background: '#ddd', border: '1px solid #aaa' }}>B</div>
        <div key="c" style={{ background: '#ccc', border: '1px solid #aaa' }}>C</div>
      </ResponsiveGridLayout>
    </div>
  );
}

