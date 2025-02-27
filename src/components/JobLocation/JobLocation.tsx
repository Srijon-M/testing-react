import React from 'react';

const JobLocation = () => {
    return(
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandetory</p>
            <img src="https://via.placeholder.com/150" alt="A person with a laptop"/>
            <span title="close">X</span>
            <div data-testid="custom-element">Custom HTML Element</div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder='Enetr your name' 
                        value="Srijon"    
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor='bio'>Bio</label>
                    <textarea name="bio" id="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default JobLocation;