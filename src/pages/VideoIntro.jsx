import React from 'react';
import './styles/videoIntro.css';


const VideoIntro = () => {
  return (
    <div className='videoIntro_container'>
        <div className="left_side">
            <h1>Our Video Introduction</h1>
            <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
            <div>
                <h3>Explote ideas together</h3>
                <p>Engage auience segments and finally create actionable insights. Amplify vertical integration.</p>
            </div>
            <div><div>
                <h3>Bring those ideas to life</h3>
                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
            </div></div>
        </div>
        <div className='right_side'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sbiv3v3_9Xc?si=Qs-Z-A9GW84AhcIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default VideoIntro