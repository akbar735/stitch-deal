import SearchAppBar from '../components/AppBar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <SearchAppBar />
      <div className="App">
        <Outlet />
      </div>
    </>
    
  );
}