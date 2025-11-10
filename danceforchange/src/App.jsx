
import './App.css';
import TaskManager from './components/TaskManager';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './pages/Home';


// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

function App() {

  
  

  return (
      <>
      <Routes>
        {/* 
          Routes is like a switch statement for URLs
          It looks at the current URL and shows the matching page
        */}
        
        {/* All routes use Layout as wrapper */}
        <Route path="/" element={<Layout />}>
          {/* 
            This is a PARENT route with NESTED routes inside
            Layout provides the frame (Navbar + Footer)
            Child routes provide the content (through <Outlet />)
          */}
          
          {/* Home page - shows at "/" */}
          <Route index element={<Home />} />
          {/* 
            "index" means this is the default child route
            When someone visits "/", they see Home component
          */}
          
          {/* Tasks page - shows at "/tasks" */}
          <Route path="tasks" element={
            <div className="max-w-7xl mx-auto py-6 px-4">
              <TaskManager />
            </div>
          } />
          {/* 
            When someone visits "/tasks", they see TaskManager
            Notice: no leading slash! "tasks" not "/tasks"
            React Router automatically combines parent + child path
          */}
          
          {/* We'll add more routes here later (API page, etc.) */}
        </Route>
      </Routes>

        

            
          
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fetch and display data from an API here
          </p>
        </div>
      

    
  </>
  );
}


export default App; 






