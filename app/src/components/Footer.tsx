import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-[#0E0E17] text-gray-300 py-6 mt-20 flex flex-col items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} <span className='text-white font-bold'>Ali Mostafa</span>. All rights reserved.</p>
                <p className="text-sm mt-2">Designed and Developed by <span className='text-white font-bold'>Ali Mostafa</span></p>
            </footer>
        </div>
    );
}

export default Footer;
