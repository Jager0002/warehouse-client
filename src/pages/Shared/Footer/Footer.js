import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='grid grid-cols-3 mt-20 bg-slate-700 px-40 py-20 justify-items-center text-white'>
      <div className='flex flex-col'>
        <h2 className='mb-4'>Menu</h2>
        <Link to ='/'>Home</Link>
        <Link to ='/'>Route</Link>
        <Link to ='/'>Blogs</Link>
        <Link to ='/'>Route</Link>
      </div>
      <div>
        <h2 className='mb-4'>Features</h2>
        <p>website features</p>
        <p>website features</p>
        <p>website features</p>
        <p>website features</p>
      </div>
      <div>
        <h2 className='mb-4'>Social Media</h2>
        <div><img src="icon here" alt="" />boibari/1245/facebook.com</div>
        <div><img src="icon here" alt="" />boibari/1245/twitter.com</div>
        <div><img src="icon here" alt="" />boibari/1245/instagram.com</div>
      </div>
    </div>
  );
};

export default Footer;