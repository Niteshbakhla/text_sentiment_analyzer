import React, { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";

import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { DialogDefault } from './Dialogue';


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
                        <div className='w-[100vw] min-h-[100vh]  md:bg-gradient-to-r from-blue-600 to-violet-600 bg-gradient-to-r from-violet-200 to-pink-200  grid place-content-center'>
                                    <Toaster position='top-center' />
                                 
                                    <div className="space-y-4   p-6  ">
                                                <div>
                                                            <div className="relative md:w-[800px] px-4 ">
                                                                        <div className='flex flex-col  items-center'>
                                                                                    <h1 className="md:text-8xl text-[12vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient-move">
                                                                                                Enter your name
                                                                                    </h1>
                                                                                    <input
                                                                                                type="text"
                                                                                                value={name}

                                                                                                onChange={handleChange}
                                                                                                className="md:w-[500px] md:h-[60px] w-[90vw] px-4  rounded-full bg-transparent border-2 border-red-500 outline-none text-4xl mt-4 focus:border-black "
                                                                                    />


                                                                                    <p className={`text-2xl mt-2 ${touched ? (isValid ? 'text-green-800' : 'text-red-600') : 'text-gray-500'}`} id="name-helper">
                                                                                                {touched ? (isValid ? 'Looks good!' : 'Please enter a valid name.') : '.'}
                                                                                    </p>
                                                                        </div>

                                                                        <div className='text-center'>
                                                                                    <DialogDefault name={name} />
                                                                               
                                                                        </div>

                                                            </div>

                                                </div>
                                    </div>
                        </div>
            );
};

export default Welcome;
