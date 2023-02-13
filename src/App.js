import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return(
    <>
      <div className="App">
        <Header />
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
