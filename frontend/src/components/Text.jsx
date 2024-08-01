import React from 'react';

const TextareaWithToolbar = () => {
            
            return (
                        <div className="relative w-[400px] shadow-md">
                                    {/* Textarea */}
                                    <textarea
                                                id="hs-textarea-ex-1"
                                                className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                placeholder="Ask me anything..."
                                    ></textarea>

                                    {/* Toolbar */}
                                    <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white">
                                                <div className="flex justify-between items-center">
                                                            {/* Button Group */}
                                                            <div className="flex items-center">
                                                                        {/* Mic Button */}
                                                                        <button
                                                                                    type="button"
                                                                                    className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100"
                                                                        >
                                                                                    <svg
                                                                                                className="shrink-0 size-4"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                    >
                                                                                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                                                                                <line x1="9" x2="15" y1="15" y2="9"></line>
                                                                                    </svg>
                                                                        </button>
                                                                        {/* End Mic Button */}

                                                                        {/* Attach Button */}
                                                                        <button
                                                                                    type="button"
                                                                                    className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100"
                                                                        >
                                                                                    <svg
                                                                                                className="shrink-0 size-4"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                    >
                                                                                                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                                                                    </svg>
                                                                        </button>
                                                                        {/* End Attach Button */}
                                                            </div>
                                                            {/* End Button Group */}

                                                            {/* Button Group */}
                                                            <div className="flex items-center gap-x-1">
                                                                        {/* Mic Button */}
                                                                        <button
                                                                                    type="button"
                                                                                    className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100"
                                                                        >
                                                                                    <svg
                                                                                                className="shrink-0 size-4"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                    >
                                                                                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                                                                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                                                                <line x1="12" x2="12" y1="19" y2="22"></line>
                                                                                    </svg>
                                                                        </button>
                                                                        {/* End Mic Button */}

                                                                        {/* Send Button */}
                                                                        <button
                                                                                    type="button"
                                                                                    className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:bg-blue-500"
                                                                        >
                                                                                    <svg
                                                                                                className="shrink-0 size-3.5"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="16"
                                                                                                height="16"
                                                                                                fill="currentColor"
                                                                                                viewBox="0 0 16 16"
                                                                                    >
                                                                                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                                                                    </svg>
                                                                        </button>
                                                                        {/* End Send Button */}
                                                            </div>
                                                            {/* End Button Group */}
                                                </div>
                                    </div>
                                    {/* End Toolbar */}
                        </div>
            );
};

export default TextareaWithToolbar;
