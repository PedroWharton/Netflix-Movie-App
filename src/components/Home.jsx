import React from 'react';
import '../stylesheets/Home.scss';
import Featured from './Featured';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
    </div>
  )
}
