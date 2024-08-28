import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { DialogDefault } from './Dialogue';


const Welcome = () => {
            const [name, setName] = useState('');
            const [username, setUserName] = useState("")
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
            };

            const handleUserName = (e) => {
                        const value = e.target.value
                        setUserName(value)
            }

            return (
                        <div className='w-[100vw] min-h-[100vh]  md:bg-gradient-to-r from-blue-600 to-violet-600 bg-gradient-to-r from-violet-200 to-pink-200  grid place-content-center'>
                                    <Toaster position='top-center' />

                                    <div className="space-y-4  lg:p-6  ">
                                                <div>
                                                            <div className="relative md:w-[900px] px-4    ">
                                                                        <div className='flex flex-col  items-center w-full  '>
                                                                                    <div className=''>
                                                                                                <h1 className="md:text-8xl   text-[10vw] lg:h-[20vh] h-[10vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-900  to-red-800 bg-[length:200%_200%] animate-gradient-move">
                                                                                                            Enter your name
                                                                                                </h1>
                                                                                    </div>
                                                                                    <input
                                                                                                type="text"
                                                                                                value={name.charAt(0).toUpperCase() + name.slice(1)}
                                                                                                name="name"
                                                                                                placeholder='Enter your name'
                                                                                                onChange={handleChange}
                                                                                                className="md:w-[500px] md:h-[60px] w-[90vw]  placeholder:text-blue-gray-800 px-4 placeholder:text-justify   rounded-full bg-transparent border-2 border-red-500 outline-none text-2xl lg:text-4xl mt-4 focus:border-black "
                                                                                    />
                                                                                    <input
                                                                                                type="text"
                                                                                                value={`${"@", username}`}
                                                                                                place="username"
                                                                                                placeholder='@Derek'
                                                                                                name="username"
                                                                                                onChange={handleUserName}
                                                                                                className="md:w-[500px] md:h-[60px] w-[90vw] px-4 placeholder:text-blue-gray-600   rounded-full bg-transparent border-2 border-red-500 outline-none text-2xl lg:text-4xl mt-4 focus:border-black "
                                                                                    />


                                                                                    <p className={`text-2xl mt-2 ${touched ? (isValid ? 'text-green-800' : 'text-red-600') : 'text-gray-500'}`} id="name-helper">
                                                                                                {touched ? (isValid ? 'Looks good!' : 'Please enter a valid name.') : '.'}
                                                                                    </p>
                                                                        </div>

                                                                        <div className='text-center'>
                                                                                    <DialogDefault name={name} username={username} />
                                                                        </div>

                                                            </div>

                                                </div>
                                    </div>
                        </div>
            );
};

export default Welcome;
