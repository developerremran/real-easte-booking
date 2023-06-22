import React from 'react';
import Search from './Search';
import MenuDropdown from './MenuDropDown';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <div className='fixed relative w-full bg-white z-10 shadow-sm'>
                <div className='py-4 border-b-[1px]'>
                    <div className='container mx-auto'>
                        <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                            <Link to='/'>
                            <h1 className='pl-5 text-4xl font-semibold italic'>DreaM Family</h1>
                            </Link>
                            <Search />
                            <MenuDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;