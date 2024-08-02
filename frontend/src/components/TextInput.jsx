import React, { useState } from 'react';
import axios from 'axios';
import { IoSyncOutline } from "react-icons/io5";

const TextInput = () => {
            const [text, setText] = useState('');
            const [data, setData] = useState(null);
            const [isLoading, setIsLoading] = useState(false);
            const [showNotification, setShowNotification] = useState(false);
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            const getEmoji = (score) => {
                        if (score > 1) return '😊'; // Highly positive
                        if (score > 0.5) return '🙂'; // Slightly positive
                        if (score < -1) return '😠'; // Highly negative
                        if (score < -0.5) return '😞'; // Slightly negative
                        return '😐'; // Neutral
            };

            const getSentimentLabel = (score) => {
                        if (score > 1) return 'Highly Positive';
                        if (score > 0.5) return 'Slightly Positive';
                        if (score < -1) return 'Highly Negative';
                        if (score < -0.5) return 'Slightly Negative';
                        return 'Neutral';
            };

            const handleSubmit = async (e) => {
                        e.preventDefault();
                        if (!text.trim()) {
                                    setShowNotification(true);
                                    return;
                        }
                        setIsLoading(true);
                        try {
                                    const response = await axios.post('http://localhost:3000/api/sentiment', { text });
                                    await delay(3000);
                                    setData(response.data);
                                    console.log(response.data.result.score);
                        } catch (error) {
                                    console.error('Error analyzing sentiment', error);
                        }
                        setIsLoading(false);
                        setText("");
            };

            const closeNotification = () => {
                        setShowNotification(false);
            };

            setTimeout(() => {
                        closeNotification();
            }, 8000);

            return (
                        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200/80 p-6 flex flex-col items-center justify-center  md:p-6 lg:p-8">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 animate-fadeIn">
                                                Text Sentiment Analyzer
                                    </h1>

                                    <form onSubmit={handleSubmit} className=' w-[300px] flex flex-col items-center  space-y-4'>
                                                <textarea
                                                            id="message"
                                                            rows="6"
                                                            className="w-full lg:w-[600px] max-w-lg px-4 py-3 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                                            placeholder="Type your message here..."
                                                            value={text} onChange={(e) => setText(e.target.value)}
                                                />
                                                <div className=' flex flex-row md:flex-row justify-center items-center gap-4'>
                                                            <button
                                                                        type="submit"
                                                                        onClick={() => {
                                                                                    document.getElementById('submit-btn').classList.add('animate-jump');
                                                                                    setTimeout(() => {
                                                                                                document.getElementById('submit-btn').classList.remove('animate-jump');
                                                                                    }, 300);
                                                                        }}
                                                                        id="submit-btn"
                                                                        className={`py-3 px-8 font-semibold text-lg rounded-lg shadow-md text-white transition-all duration-300 ${isLoading
                                                                                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse'
                                                                                    : 'bg-gradient-to-r from-blue-500 via-teal-500 to-green-500'
                                                                                    }`}
                                                            >
                                                                        {isLoading ? 'Analyzing...' : 'Submit'}
                                                            </button>
                                                            <button type='button'
                                                                        onClick={() => {
                                                                                    setText('');
                                                                                    setData(null);
                                                                                    setIsLoading(false);
                                                                        }}
                                                                        className="w-10 h-10 md:w-12 md:h-12 font-semibold rounded-full shadow-md text-white transition-all duration-300 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center"
                                                            >
                                                                        <IoSyncOutline size={24} />
                                                            </button>
                                                </div>
                                    </form>
                                    {data && (
                                                <div className="mt-8 p-4 md:p-6 lg:p-8 border border-gray-300 rounded-lg shadow-lg bg-white max-w-lg w-full animate-fadeIn transition-transform transform">
                                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-300">Sentiment Analysis Result</h3>
                                                            <div className={`p-4 md:p-6 mb-4 rounded-lg text-center shadow-md ${data.result.score > 1
                                                                        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                                                                        : data.result.score > 0.5
                                                                                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
                                                                                    : data.result.score < -1
                                                                                                ? 'bg-gradient-to-r from-red-400 to-red-600 text-white'
                                                                                                : data.result.score < -0.5
                                                                                                            ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white'
                                                                                                            : 'bg-gray-200 text-gray-800'
                                                                        }`}>
                                                                        <p className="text-3xl md:text-4xl mb-2">{getEmoji(data.result.score)}</p>
                                                                        <p className="text-xl md:text-2xl font-semibold mb-2">{getSentimentLabel(data.result.score)}</p>
                                                            </div>
                                                            <div className="space-y-2">
                                                                        <p className="text-base md:text-lg"><strong>Score:</strong> <span className="font-bold">{data.result.score}</span></p>
                                                                        <p className="text-base md:text-lg"><strong>Comparative:</strong> <span className="font-bold">{getEmoji(data.result.comparative)}</span></p>
                                                                        <p className="text-base md:text-lg"><strong>Positive Words:</strong> <span className="font-semibold">{data.result.positive.join(", ")}</span></p>
                                                                        <p className="text-base md:text-lg"><strong>Negative Words:</strong> <span className="font-semibold">{data.result.negative}</span></p>
                                                            </div>
                                                </div>
                                    )}
                                    {showNotification && (
                                                <div className="fixed bottom-4 right-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white p-4 rounded-lg shadow-lg max-w-xs w-full animate-fadeIn">
                                                            <p className="font-semibold">Please fill in the text area!</p>
                                                            <button onClick={closeNotification} className="absolute top-2 right-2 text-white hover:text-gray-300">
                                                                        ✖️
                                                            </button>
                                                </div>
                                    )}
                        </div>
            );
};

export default TextInput;
