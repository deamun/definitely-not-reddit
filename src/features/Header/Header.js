import React from 'react';

import { FaReddit } from 'react-icons/fa';
import { AiOutlineExclamation } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <AiOutlineExclamation className='logo-icon-p1'/>
                <FaReddit className='logo-icon-p2' />
                <p className='logo-name'>
                    Definitely!Reddit
                </p>
            </div>
            <form className='search-bar'>
                <input 
                    type='text'
                    placeholder='Search...'
                    aria-label='Search posts'
                />
                <button type='submit' aria-label='Search'>
                    <HiOutlineSearch />
                </button>
            </form>
        </header>
    );
}

export default Header;