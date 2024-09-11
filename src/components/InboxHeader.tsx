import { ChevronDown, RotateCw } from 'lucide-react';
import React, { useEffect, useState } from 'react';  // Added useState
import { resetMailbox } from '../actions/actions';
import { useNavigate } from 'react-router';

interface HeaderProps {
    currColor: boolean;
}

const InboxHeader: React.FC<HeaderProps> = ({ currColor }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);  // Use state to store token

    useEffect(() => {
        const storedToken = localStorage.getItem("reachinbox-auth");
        setToken(storedToken ? JSON.parse(storedToken) : null);
    }, []);

    const handleReset = () => {
        if (token) {  // Ensure token is not null
            resetMailbox(token)
                .then((res) => navigate("/"))
                .catch((err: Error) => console.error("Reset failed:", err));
        } else {
            console.warn("No token found.");
        }
    };

    return (
        <>
            <div className='w-[160px] flex gap-1 items-center'>
                <h1 className='text-[20px] text-[#4285F4] text-left'>All Inbox(s)</h1>
                <ChevronDown color="#4285F4" className='cursor-pointer' />
            </div>
            <div className={`w-8 h-8 ${currColor ? 'bg-[#25262B]' : 'bg-[#e1e7ee]'} rounded flex justify-between items-center`}>
                <RotateCw className='w-5 h-5 ml-1.5 cursor-pointer' onClick={handleReset} />
            </div>
        </>
    );
};

export default InboxHeader;
