import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage
 from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./themes/common";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element= {<Login />}/>
            <Route path="/register" element= {<Register />}/>
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
