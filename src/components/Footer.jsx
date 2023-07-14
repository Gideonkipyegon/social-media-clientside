import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footeritem'>
      <div className='goal'>
      <h3>Mission</h3>
      <p>Our mission is to connect people globally <br />irespective of country,race,gender or religion.</p>
      </div>
     <div className='goal'>
      <h3>Vission</h3>
      <p>To connect more than 5 million people by 2030</p>
      </div>
      </div>
      <br/>
      <div className='image'>
         <img src="./images/merakist-CNbRsQj8mHQ-unsplash.jpg" alt="social media image" />
         <img src="./images/pexels-cottonbro-studio-6833567.jpg" alt="pic1" />
         <img src="./images/pexels-fauxels-3184435.jpg" alt="pic2" />
         <img src="./images/pexels-kerde-severin-1542252.jpg" alt="pic3" />
         <img src="./images/pexels-kindel-media-7688658.jpg" alt="pic4" />
         <img src="./images/pexels-photomix-company-887751.jpg" alt="pic5" />
         {/* <img src="./images/pexels-pixabay-207896.jpg" alt="pic6" /> */}
      </div>
</div>
  );
}

export default Footer