import { Outlet } from 'react-router-dom';
import { Navigation } from '../../shared/navigation';

const MainLayout = () => {
  return (
    <>
      <main className="wrapper">
        <Navigation />
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
