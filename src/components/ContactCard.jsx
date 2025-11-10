import React from 'react'
import { Link } from "react-router-dom";
import '../styles/componentsStyle/ContactCard.css'
import facebook from '../assets/Facebook.jpg'
import tiktok from '../assets/Tiktok.jpg'
import intsagram from '../assets/Insta.jpg'

const handlesLinks = [
  {
    id: 1,
    title: "Facebook",
    imageUrl: facebook,
  },
  {
    id: 2,
    title: "Instagram",
    imageUrl: tiktok,
  },
  {
    id: 3,
    title: "TikTok",
    imageUrl: intsagram,
  },

];

export default function ContactCard() {
 return (
    <section className="handlesLinks-carousel">
      <div className="carousel-container">
        {handlesLinks.map((handlesLinks) => (
          <div key={handlesLinks.id} className="handlesLinks-card">
            <div className="handlesLinks-content">
              <h3>{handlesLinks.title}</h3>          
              <Link><p>View in site</p></Link>         
            </div>
            <div className="handlesLinks-image">
              <img src={handlesLinks.imageUrl} alt={handlesLinks.title} />
            </div>
          </div>
        ))}
      </div>
      {/* <Link to={'/handlesLinkss'}><button className="See-more"><span>See More</span></button></Link> */}
    </section>
  );
}
