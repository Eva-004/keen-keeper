import React from 'react';
import footerLogo from '../../assets/logo-xl.png'
import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white pt-20'>
            <div className='w-11/12 mx-auto md:px-20'>
                <div className='text-center space-y-4'>
                    <div className='flex justify-center items-center'>
                        <img src={footerLogo} alt="" className='h-10 md:h-14' />
                    </div>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div>
                        <div>
                            <p className='font-medium text-xl'>Social Links</p>
                            <div className='flex justify-center gap-4 mt-4'>
                                <img src={insta} alt="" />
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider text-white"></div>
                <div className='pb-8 flex justify-between items-center flex-col md:flex-row'>
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex justify-between items-center gap-2 md:gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;