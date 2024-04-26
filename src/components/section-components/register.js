import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpInput, setOtpInput] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

	console.log("hii");

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
    };

    const validatePassword = (password, confirmPassword) => {
        return password === confirmPassword && password.length >= 6;
    };

    const nextStep = () => {
        if (step === 1) {
            if (firstName === '' || lastName === '' || city === '') {
                toast.error('Please fill in all fields.');
            } else {
                setStep(2);
            }
        }
    };

    const sendOTP = () => {
        if (!validatePhoneNumber(phoneNumber)) {
            toast.error('Invalid phone number format.');
        } else {
            // Replace this with your actual code to send OTP via SMS or any other method
            toast.success(`OTP sent successfully to ${phoneNumber}`);
            setStep(3);
        }
    };

    const verifyOTP = () => {
        if (otpInput === '') {
            toast.error('Please enter OTP.');
        } else {
            toast.success('OTP verified successfully.');
            setStep(4);
        }
    };

    const submitPassword = () => {
        if (!validatePassword(password, confirmPassword)) {
            toast.error('Passwords must match and be at least 6 characters long.');
        } else {
            setStep(5);
        }
    };

    const register = (event) => {
        if (!termsChecked) {
            toast.error('Please agree to the terms and conditions.');
            event.preventDefault();
        } else {
            toast.success('Registration successful!');
        }
    };

    return (
        <section>
            <Toaster />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card mx-auto" style={{ maxWidth: '520px' }}>
                            <div className="card-body">
                                <h4 className="card-title mb-4">Registration</h4>
                                <div id="step1" style={{ display: step === 1 ? 'block' : 'none' }}>
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <select className="form-control" value={city} onChange={(e) => console.log(e.target.value)} aria-label="Select city">
                                            <option value="">Select city...</option>
                                            <option>New York</option>
                                            <option>Los Angeles</option>
                                            <option>Chicago</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block" onClick={nextStep} aria-label="Next">Next</button>
                                </div>

                                {/* Step 2: Enter Phone Number */}
                                <div id="step2" style={{ display: step === 2 ? 'block' : 'none' }}>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block" onClick={sendOTP} aria-label="Send OTP">Send OTP</button>
                                </div>

                                {/* Step 3: Enter OTP */}
                                <div id="step3" style={{ display: step === 3 ? 'block' : 'none' }}>
                                    <div className="form-group">
                                        <label>Enter OTP</label>
                                        <input type="text" className="form-control" placeholder="Enter OTP" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block" onClick={verifyOTP} aria-label="Verify OTP">Verify OTP</button>
                                </div>

                                {/* Step 4: Enter Password */}
                                <div id="step4" style={{ display: step === 4 ? 'block' : 'none' }}>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block" onClick={submitPassword} aria-label="Submit">Submit</button>
                                </div>

                                {/* Final Step: Register */}
                                <div id="finalStep" style={{ display: step === 5 ? 'block' : 'none' }}>
                                    <div className="form-group">
                                        <label className="custom-control custom-checkbox"> 
                                            <input type="checkbox" className="custom-control-input" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} />
                                            <span className="custom-control-label"> I agree with the terms and conditions </span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block" onClick={register} disabled={!termsChecked} aria-label="Register">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
