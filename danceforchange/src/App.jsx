
import './App.css';
// import TaskManager from './components/TaskManager';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import TasksPage from './pages/TaskPage';
import ApiDataPage from './pages/ApiDataPage';


// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

function App() {

  
  

  return (
      <>
      <Routes>
        
        {/* All routes use Layout as wrapper */}
        <Route path="/" element={<Layout />}>
          
          {/* Home page - shows at "/" */}
          <Route index element={<Home />} />
          
          {/* Tasks page - shows at "/tasks" */}
          <Route path="tasks" element={
            // <div className="max-w-7xl mx-auto py-6 px-4">
              // <TaskManager />
              <TasksPage />
            // </div>
          } />

          <Route path="api-data" element={<ApiDataPage />} />
          
          
          {/* We'll add more routes here later (API page, etc.) */}
        </Route>
      </Routes>

        

            
          
        
        {/* API data display will go here */}
        {/* <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fetch and display data from an API here
          </p>
        </div> */}
      

    
  </>
  );
}


export default App; 






