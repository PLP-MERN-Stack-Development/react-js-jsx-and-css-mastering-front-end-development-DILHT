
import TaskManager from '../components/TaskManager';


/**
 * TasksPage - Full page wrapper for TaskManager
 * 
 * Responsibilities:
 * ✅ Page-level layout (max-width, padding)
 * ✅ Page title and description
 * ✅ Could add: breadcrumbs, help text, tips, etc.
 * 
 * This is a PAGE component - it wraps the TaskManager COMPONENT
 * Think of it like: Page = Frame, Component = Artwork
 */
const TasksPage = () => {
    return (
        <div className=" bg-gray-50 dark:bg-gray-900 py-8">
        {/* 
            min-h-screen = page takes at least full viewport height
            py-8 = padding top & bottom (gives breathing room)
        */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 
            max-w-7xl = maximum width: 80rem (1280px)
            mx-auto = centers the content horizontally
            px-4 sm:px-6 lg:px-8 = responsive horizontal padding
            
            Responsive padding breakdown:
            - Mobile (default): 1rem (16px)
            - Small screens: 1.5rem (24px)
            - Large screens: 2rem (32px)
            */}
            
            
            {/* The Actual Task Manager Component */}
            <TaskManager />
            
        </div>
        </div>
    );
};

export default TasksPage;