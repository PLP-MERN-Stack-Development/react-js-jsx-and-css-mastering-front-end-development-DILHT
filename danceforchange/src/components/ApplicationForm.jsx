

import { useState } from 'react'
import useLocalStorageApplications from '../hooks/LocalStorageApplication';
import Button from './Button';

const ApplicationForm = () => {
     //get the custom hook
    const {addApplication} = useLocalStorageApplications();

    //form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        danceStyle: '',
        bio: '',
        phone: '',
        motivation: '',
    });

    const [submitted, setSubmitted] = useState(false);

    //handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addApplication(formData);
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            danceStyle: '',
            bio: '',
            phone: '',
            motivation: '',
        });
    };


    if (submitted) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
            🎉 Thank you for applying!
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
            Your application has been submitted and is pending review.
            </p>
            <Button variant="primary" className="mt-4" onClick={() => setSubmitted(false)}>
            Submit Another
            </Button>
        </div>
        );
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-lg mx-auto flex flex-col "
            >
            <h2 className="text-2xl font-bold mb-6">D4C Dancer Application</h2>

            {/* Name */}
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            {/* Dance Style */}
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">Dance Style</label>
                <input
                type="text"
                name="danceStyle"
                value={formData.danceStyle}
                onChange={handleChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            {/* Bio */}
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">Short Bio</label>
                <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
            </div>

            {/* Motivation */}
            <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Why do you want to join D4C?
                </label>
                <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
            </div>

            <Button type="submit" variant="primary" size="md" className="w-full">
                Submit Application
            </Button>
            </form>    )
}

export default ApplicationForm