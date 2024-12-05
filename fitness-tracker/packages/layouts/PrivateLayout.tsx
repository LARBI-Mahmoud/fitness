import { Header } from '@packages/components/header/src';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>);
};

export default PrivateLayout;
