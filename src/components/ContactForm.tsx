import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        checkbox: false,
    });

    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(formData.checkbox === true) {
            // TODO Handle submitted info
            console.log(formData);
        } else {
            alert("Please accept our integrity policy")
        }
    };

    const handleCheckbox = () => {
        setFormData(prevState => ({
            ...prevState, 
            checkbox: !formData.checkbox
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="form-container">
                <div className="form-content">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                        
                        <input onChange={handleCheckbox} type="checkbox" id="approvedPolicy" name="approvedPolicy" value="approvedPolicy" required/>

                        <label htmlFor="approvedPolicy">I Accept the integrity policy</label>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactForm;
