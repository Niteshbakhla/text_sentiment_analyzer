import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoSyncOutline } from "react-icons/io5";
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function History() {
            const [history, setHistory] = useState([]);
            const [isLoading, setIsLoading] = useState(false);

            useEffect(() => {
                        const fetchHistory = async () => {
                                    setIsLoading(true);
                                    try {
                                                const response = await axios.get('http://localhost:3000/history');
                                                setHistory(response.data.history);
                                    } catch (error) {
                                                console.error('Error fetching history:', error);
                                    }
                                    setIsLoading(false);
                        };

                        fetchHistory();
            }, []);

            return (
                        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200/80 p-6 flex flex-col items-center justify-center md:p-6 lg:p-8">
                                    <Link to="/write_text" className='sticky lg:absolute left-4 top-4 '>
                                                <Button>Back</Button>
                                    </Link>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6 animate-fadeIn">
                                                Analysis History
                                    </h2>
                                    <div className={`bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full ${isLoading ? 'animate-pulse' : ''}`}>
                                                <ul className="space-y-6">
                                                            {history.length === 0 ? (
                                                                        <li className="text-center text-gray-700 text-lg italic">No history available.</li>
                                                            ) : (
                                                                        history.map((item, index) => (
                                                                                    <li key={index} className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 p-6 rounded-lg shadow-md transform transition-transform  hover:shadow-xl">
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
                                                                                    </li>
                                                                        ))
                                                            )}
                                                </ul>
                                    </div>
                                    {isLoading && (
                                                <div className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white p-4 rounded-lg shadow-lg max-w-xs w-full animate-pulse flex items-center">
                                                            <p className="font-semibold mr-2">Loading history...</p>
                                                            <IoSyncOutline size={24} className="animate-spin" />
                                                </div>
                                    )}
                        </div>
            );
}

export default History;
