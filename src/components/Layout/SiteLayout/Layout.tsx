import { TLayout } from './Layout.types';

const Layout = ({ children }: TLayout) => {
  


  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      
      <div>{children}</div>

     
    </div>
  );
};

export default Layout;
