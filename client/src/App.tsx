import PrimarySearchAppBar from './components/AppBar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
   
    <>
      <PrimarySearchAppBar />
      <Outlet />
    </>
        

  );
}

export default App;
