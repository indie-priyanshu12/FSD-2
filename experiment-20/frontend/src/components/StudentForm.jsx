import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        uid: '',
        name: '',
        age: '',
        course: '',
        gender: 'Male'
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' });

        try {
            // Updated to match the fields added to backend: uid, name, age, course, gender
            const response = await axios.post('https://students-backend-000t.onrender.com/students', {
                ...formData,
                age: parseInt(formData.age)
            });

            if (response.status === 201) {
                setMessage({ text: 'Student registered successfully! 🎓', type: 'success' });
                setFormData({ uid: '', name: '', age: '', course: '', gender: 'Male' });
            }
        } catch (error) {
            const errorMsg = error.response?.data?.validation_errors
                ? Object.values(error.response.data.validation_errors).flat().join(', ')
                : 'Connection to backend failed. Please check if the server is running.';

            setMessage({
                text: errorMsg,
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container animate-fade-in">
            <div className="form-header">
                <h2>Student Portal</h2>
                <p>Register for the upcoming academic session</p>
            </div>

            {message.text && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>University ID (UID)</label>
                    <input
                        type="text"
                        name="uid"
                        value={formData.uid}
                        onChange={handleChange}
                        placeholder="e.g. 23BCG10XXX"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Min 1, Max 120"
                        min="1"
                        max="120"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Course</label>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="e.g. B.Tech Computer Science"
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label className="radio-option">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label className="radio-option">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                        <label className="radio-option">
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                    </div>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Processing...' : 'Complete Registration'}
                </button>
            </form>

            <div className="form-footer">
                <p>&copy; {new Date().getFullYear()} Priyanshu Kashyap - 23BCG10009. All rights reserved.</p>
            </div>
        </div>
    );
};

export default StudentForm;
