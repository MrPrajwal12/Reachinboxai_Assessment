import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';  // Adjust the path based on the relative location

const Login = () => {

    useEffect(() => {
        // Clearing reachinbox authentication data
        // localStorage.removeItem("reachinbox-auth");
        // localStorage.removeItem("reachinbox-auth-firstname");
        // localStorage.removeItem("reachinbox-auth-lastname");
        // localStorage.removeItem("reachinbox-auth-email");
    }, []);

    return (
        <div className='bg-gray-900 max-w-[2480px] h-screen mx-auto text-white flex flex-col justify-between'>
            <header className="w-full h-16 flex justify-center items-center border-b border-gray-800">
                <img src={logo} alt="reachinbox-logo" className="h-7" />
            </header>
            
            <main className='flex-grow flex justify-center items-center'>
                <div className='w-[460px] h-auto md:h-[312px] bg-[#111214] rounded-2xl border border-gray-700 py-6 px-10'>
                    <div className='w-[380px] mx-auto'>
                        <h1 className='text-2xl mb-6'>Create a New Account</h1>
                        <div className='rounded-lg border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12'>
                            <img src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg" alt="google-logo" className='h-5 rounded-full' />
                            <a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinboxai-91743.web.app/desktop" className='text-sm text-gray-400 cursor-pointer'>
                                Sign Up with Google
                            </a>
                        </div>
                        <button className='w-[195px] h-12 bg-[#4B63DD] rounded mx-auto text-center py-2.5 mb-6 cursor-pointer'>
                            Create Account
                        </button>
                        <p className='text-sm text-gray-500'>
                            Already registered? <Link to="/signin" className="text-blue-400">Sign In</Link>
                        </p>
                    </div>
                </div>
            </main>
            
            <footer className="w-full h-8 flex justify-center items-center border-t border-gray-800">
                <p className='text-gray-600 text-xs'>©️ 2023 Reachinbox. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;
