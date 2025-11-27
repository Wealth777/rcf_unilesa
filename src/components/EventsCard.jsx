import React, { useEffect } from "react";
import '../styles/componentsStyle/EventCard.css'
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';

const events = [
  {
    id: 1,
    title: "Digging Deep",
    description: "Digging Deep is a Bible study session focused on understanding God’s Word in depth. It helps believers grow in knowledge, strengthen their faith, and apply scriptural truths to daily living. It’s a time to learn, share insights, and build a stronger spiritual foundation.",
    date: "Nov 15, 2025",
    time: "5pm - 6pm",
    venue: "RCF AUDITORIUM",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Prayer Meeting",
    description: "Prayer Meeting is a time of heartfelt communion with God. Believers gather to seek His presence, strengthen their faith, and intercede for personal and collective needs. It’s a moment to refresh your spirit, align with God’s will, and experience the power of united prayer.",
    date: "Nov 15, 2025",
    time: "5pm - 6pm",
    venue: "RCF AUDITORIUM",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Christmas Carol",
    description: "Christmas Carol is a joyful celebration of the birth of Jesus Christ through songs, worship, and praise. It brings the church together in gratitude and reflection on God’s love. It’s a night of music, joy, and the true spirit of Christmas.",
    date: "Nov 15, 2025",
    time: "5pm - 6pm",
    venue: "RCF AUDITORIUM",
    imageUrl: "",
  },
];
// const events = [

//   {
//     id: 2,
//     title: "Design Thinking Workshop",
//     description: "A hands-on creative session on solving real-world design challenges.",
//     date: "Nov 22, 2025",
//     time: "12:00 PM",
//     venue: "Innovation Hub, Ibadan",
//     imageUrl: "",
//   },
//   {
//     id: 3,
//     title: "CodeFest 2025",
//     description: "A hackathon bringing developers together to build the future.",
//     date: "Dec 10, 2025",
//     time: "9:00 AM",
//     venue: "Tech Center, Lagos",
//     imageUrl: "",
//   },

// ];

const EventsCard = () => {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true
    });
  }, []);


  return (
    <section className="event-carousel">
      <h2 className="carousel-topic">Upcoming Programs</h2>
      <div className="carousel-container">
        {events.map((event) => (
          <div key={event.id} className="event-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <div className="event-image">
              <img src={event.imageUrl} alt={event.title} />
            </div>

            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="description">{event.description}</p>

              <div className="event-info">
                <p><i className="fa-regular fa-calendar"></i> {event.date}</p>
                <p><i className="fa-regular fa-clock"></i> {event.time}</p>
                <p><i className="fa-solid fa-location-dot"></i> {event.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to={'/events'}><button className="See-more"><span>See More</span></button></Link>
    </section>
  );
};

export default EventsCard;
