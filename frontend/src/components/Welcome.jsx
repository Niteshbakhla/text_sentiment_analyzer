import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";

const Welcome = () => {
            const [name, setName] = useState('');
            const [isValid, setIsValid] = useState(true);
            const [touched, setTouched] = useState(false);

            // Function to validate the name
            const validateName = (input) => {
                        const regex = /^[A-Za-z\s]+$/;
                        return regex.test(input) && input.trim().length > 0;
            };

            const handleChange = (e) => {
                        const value = e.target.value;
                        setName(value);
                        setIsValid(validateName(value));
                        if (!touched) setTouched(true);
            };

            return (
                        <div className='w-[100%] min-h-screen bg-gradient-to-r from-blue-600 to-violet-600  grid place-content-center'>
                                    <div className="space-y-4   p-6  ">
                                                <div>
                                                            <div className="relative w-[800px]  ">
                                                                        <div className='flex flex-col  items-center'>
                                                                                    <h1 className='text-8xl'>Enter your name</h1>
                                                                                    <input type="text"
                                                                                                className='w-[500px] h-[60px] rounded-full
                                                                                                 bg-transparent border
                                                                                                  border-[red]  outline-none text-4xl mt-4 focus:border-green-500   ' />

                                                                        </div>
                                                                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                                                    {touched && (isValid ? (
                                                                                                <svg className="w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                                                                </svg>
                                                                                    ) : (
                                                                                                <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                                                            <line x1="12" x2="12" y1="8" y2="12"></line>
                                                                                                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                                                                                </svg>
                                                                                    ))}
                                                                        </div>
                                                            </div>
                                                            <p className={`text-sm mt-2 ${touched ? (isValid ? 'text-teal-600' : 'text-red-600') : 'text-gray-500'}`} id="name-helper">
                                                                        {touched ? (isValid ? 'Looks good!' : 'Please enter a valid name.') : '.'}
                                                            </p>
                                                </div>
                                    </div>
                        </div>
            );
};

export default Welcome;
