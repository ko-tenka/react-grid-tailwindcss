import Navbar from '../wigetes/Navbar';
import { Outlet } from 'react-router-dom';
import BlockSearch from '../pages/BlockSearch/BlockSearch';



export default function Layout() {

  return (
    <>
      <Navbar />
      <BlockSearch/>
      <main>
        <Outlet />
      </main>
    </>
  );
}