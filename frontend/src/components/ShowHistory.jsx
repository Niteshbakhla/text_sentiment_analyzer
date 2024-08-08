import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { IoSyncOutline } from "react-icons/io5";
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function History() {
            const [history, setHistory] = useState([]);
            const [isLoading, setIsLoading] = useState(false);
            const [isDelete, setIsDelete] = useState(false)
            const ref = useRef([])


            const deleteHistory = async (id, index) => {
                        setIsDelete(!isDelete)
                        ref.current[index].classList.add("delete-animation")
                        setTimeout(async () => {
                                    setIsDelete(!isDelete);
                                    try {
                                                const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/sentiment/deleteHistory/${id}`);
                                                console.log(res);
                                    } catch (error) {
                                                console.log(error);
                                    }
                        }, 500);
            }

            useEffect(() => {
                        const fetchHistory = async () => {
                                    setIsLoading(true);
                                    try {
                                                const response = await axios.get(`${import.meta.env.VITE_API_URL}/history`);
                                                setHistory(response.data.history);
                                    } catch (error) {
                                                console.error('Error fetching history:', error);
                                    }
                                    setIsLoading(false);
                        };

                        fetchHistory();
            }, [deleteHistory]);




            return (
                        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200/80 p-6 flex flex-col items-center justify-center md:p-6 lg:p-8">
                                    <Link to="/write_text" className='sticky lg:absolute left-4 top-4 '>
                                                <Button>Back</Button>
                                    </Link>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6 animate-fadeIn">
                                                Analysis History
                                    </h2>
                                    <div className={`bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full  h-fit transition-all  duration-500  `}>
                                                <ul className="space-y-6 ">
                                                            {history.length === 0 ? (
                                                                        <li className="text-center text-gray-700 text-lg italic">No history available.</li>
                                                            ) : (
                                                                        history?.map((item, index) => (
                                                                                    <li ref={(el) => ref.current[index] = el} key={index} className={`bg-gradient-to-r  flex justify-between items-end  from-blue-100 via-green-100 to-yellow-100 p-6 rounded-lg shadow-md transform transition-transform  hover:shadow-xl`}>
                                                                                                <div>
                                                                                                            <p className="text-lg font-semibold text-gradient mb-2">Text:</p>
                                                                                                            <p className="text-gray-700 mb-4">{item.text}</p>
                                                                                                            <p className="text-lg font-semibold text-gradient mb-2">Score:</p>
                                                                                                            <p className="text-gray-700 mb-4">{item.score}</p>
                                                                                                            <p className="text-lg font-semibold text-gradient mb-2">Comparative:</p>
                                                                                                            <p className="text-gray-700 mb-4">{item.comparative}</p>
                                                                                                            <p className="text-lg font-semibold text-gradient mb-2">Positive Words:</p>
                                                                                                            <p className="text-gray-700 mb-4">{item.positive.join(', ')}</p>
                                                                                                            <p className="text-lg font-semibold text-gradient mb-2">Negative Words:</p>
                                                                                                            <p className="text-gray-700 mb-4">{item.negative.join(', ')}</p>
                                                                                                            <p className="text-lg font-semibold text-gradient mb-2">Date:</p>
                                                                                                            <p className="text-gray-700">{new Date(item.createdAt).toLocaleString()}</p>
                                                                                                </div>
                                                                                                <MdDelete size={30} className='cursor-pointer active:scale-[0.9]' onClick={() => deleteHistory(item._id, index)} />
                                                                                    </li>
                                                                        ))
                                                            )}

                                                </ul>

                                    </div>
                              

                        </div>
            );
}

export default History;
