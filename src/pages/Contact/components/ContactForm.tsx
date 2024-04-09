import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        checkbox: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.checkbox === true) {
            console.log(formData);
        } else {
            alert("Please accept our integrity policy");
        }
    };

    const handleCheckbox = () => {
        setFormData((prevState) => ({
            ...prevState,
            checkbox: !formData.checkbox,
        }));
    };

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-6 mt-0">Contact Us</h2>
                <p className="mb-6 text-black text-center">
                    Connect with us – we're passionate about food and dedicated to providing the best experience for our customers. Whether you have questions, suggestions, or partnership inquiries, we're here to listen. Drop us a line, and let's explore delicious possibilities together!
                </p>
                <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                    Kajplats 18, strandvägen
                </p>
                <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                    +46 77 121 21 21
                </p>
                <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                    TasteTrails@gmail.com
                </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="input"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="input"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="input"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="input"
                                rows={4}
                                required
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="approvedPolicy"
                                name="approvedPolicy"
                                checked={formData.checkbox}
                                onChange={handleCheckbox}
                                className="checkbox mr-2"
                                required
                            />
                            <label htmlFor="approvedPolicy" className="font-medium text-gray-700">I Accept the integrity policy</label>
                        </div>

                        <button type="submit" className="btn bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
