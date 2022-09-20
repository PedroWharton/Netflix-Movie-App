import React from 'react'
import '../stylesheets/Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

export default function Featured() {
  return (
    <div className='featured'>
        <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        />
        <div className="info">
            <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
            />
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente eum quam in officia beatae, suscipit, alias ipsam blanditiis, 
                dolorem necessitatibus ex at. 
                Laudantium mollitia laboriosam eaque natus tempore, voluptate repudiandae.
            </span>
            <div className="buttons">
                <div className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </div>
                <div className="more">
                    <InfoIcon/>
                    <span>More</span>
                </div>
            </div>
        </div>
    </div>
  )
}
