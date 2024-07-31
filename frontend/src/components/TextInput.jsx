import React, { useState } from 'react';
import axios from 'axios';

const TextInput = () => {
            const [text, setText] = useState('');
            const [data, setData] = useState(null);

            const getEmoji = (score) => {
                        if (score > 1) return '😊'; // Highly positive
                        if (score > 0.5) return '🙂'; // Slightly positive
                        if (score < -1) return '😠'; // Highly negative
                        if (score < -0.5) return '😞'; // Slightly negative
                        return '😐'; // Neutral
            };

            const handleSubmit = async (e) => {
                        e.preventDefault();
                        try {
                                    const response = await axios.post('http://localhost:3000/api/sentiment', { text });
                                    setData(response.data);
                                    console.log(response.data.result.score)
                        } catch (error) {
                                    console.error('Error analyzing sentiment', error);
                        }
            };


            return (
                        <div>
                                    
                                    <h1>hey this is me </h1>
                                    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                                                <textarea
                                                            id="message"
                                                            rows="6"
                                                            className="w-[600px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                            placeholder="Type your message here..."
                                                            value={text} onChange={(e) => setText(e.target.value)} 
                                                />
                                             
                                                <button type="submit">Analyze</button>
                                    </form>
                                    {data && (
                                                <div>
                                                            <h3>Sentiment Analysis Result</h3>


                                                            <p>Score: {data.result.score}</p>
                                                            <p>Comparative: {getEmoji(data.result.comparative)}</p>
                                                            <p>Positive Words: {data.result.positive.join(",")}</p>
                                                            <p>Negative Words: {data.result.negative}</p>
                                                </div>
                                    )}
                        </div>
            );
};

export default TextInput;
