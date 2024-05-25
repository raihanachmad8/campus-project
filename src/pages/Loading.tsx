import React from 'react'

const Loading: React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-white">
                <div className="relative w-40 h-40">
                    <div className="dot1 absolute top-1/2 left-1/2 w-40 h-24 bg-gray-600 rounded-md animate-dot1 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="dot2 absolute top-1/2 left-1/2 w-36 h-20 bg-gray-200 rounded animate-dot2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="dot3 absolute top-1/2 left-1/2 w-20 h-5 bg-gray-400 rounded-full animate-dot3 transform translate-y-12 -translate-x-1/2"></div>
                </div>
                <p className='select-none'>Waiting for fetching</p>
            </div>
        </>
    );
}

export default Loading;