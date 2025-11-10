import { useEffect,useState } from "react";

const useLocalStorageApplications = () => {
    //initailization state from localStorage or with empty array
    const [applications, setApplications] = useState(() => {
        const savedApplications = localStorage.getItem('applications');
        return savedApplications ? JSON.parse(savedApplications) : [];
    });

    //sync 
    useEffect(() => {
        localStorage.setItem('applications', JSON.stringify(applications));

    },[applications]);
    //function to add application
    const addApplication = (data) => {
        //data validation
        if (data.name.trim() && data.email.trim()) {
            setApplications([...applications,
                {
                    id: Date.now(),
                    ...data,
                    status:"pending",
                    createdAt: new Date().toISOString(),
                },
            ]);

    }
};

return {applications, addApplication};
};

export default useLocalStorageApplications;