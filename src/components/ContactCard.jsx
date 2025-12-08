// import React from 'react'
// import { Link } from "react-router-dom";
// import '../styles/componentsStyle/ContactCard.css'
// import facebook from '../assets/Facebook.jpg'
// import tiktok from '../assets/Tiktok.jpg'
// import intsagram from '../assets/Insta.jpg'

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const handlesLinks = [
//   {
//     id: 1,
//     title: "Facebook",
//     imageUrl: facebook,
//     link: 'https://www.facebook.com/rcfoscoedilesa'
//   },
//   {
//     id: 2,
//     title: "Instagram",
//     imageUrl: tiktok,
//     link: 'https://www.instagram.com/rcfunilesa/'
//   },
//   {
//     id: 3,
//     title: "TikTok",
//     imageUrl: intsagram,
//     link: 'https://www.tiktok.com/@rcfunilesa'
//   },

// ];

// export default function ContactCard() {
//   return (
//     <section className="handlesLinks-carousel">
//       <div className="carousel-container">
//         {handlesLinks.map((handlesLinks) => (
//           <div key={handlesLinks.id} className="handlesLinks-card"  data-aos="zoom-in" >
//             <div className="handlesLinks-content">
//               <h3>{handlesLinks.title}</h3>
//               <a href={handlesLinks.link} target="_blank" rel="noopener noreferrer">
//                 <p>Click to View</p>
//               </a>

//             </div>
//             <div className="handlesLinks-image">
//               <img src={handlesLinks.imageUrl} alt={handlesLinks.title} />
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <Link to={'/handlesLinkss'}><button className="See-more"><span>See More</span></button></Link> */}
//     </section>
//   );
// }


import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/componentsStyle/ContactCard.css';
import facebook from '../assets/Facebook.jpg';
import tiktok from '../assets/Tiktok.jpg';
import intsagram from '../assets/Insta.jpg';

// AOS IMPORTS
import AOS from 'aos';
import 'aos/dist/aos.css';

const handlesLinks = [
  {
    id: 1,
    title: "Facebook",
    imageUrl: facebook,
    link: 'https://www.facebook.com/rcfoscoedilesa'
  },
  {
    id: 2,
    title: "Instagram",
    imageUrl: tiktok,
    link: 'https://www.instagram.com/rcfunilesa/'
  },
  {
    id: 3,
    title: "TikTok",
    imageUrl: intsagram,
    link: 'https://www.tiktok.com/@rcfunilesa'
  }
];

export default function ContactCard() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true
    });
  }, []);

  return (
    <section className="handlesLinks-carousel">
      <div className="carousel-container">
        {handlesLinks.map((item) => (
          <div 
            key={item.id} 
            className="handlesLinks-card"  
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <div className="handlesLinks-content">
              <h3>{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <p>Click to View</p>
              </a>
            </div>

            <div className="handlesLinks-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
