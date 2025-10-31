import React from "react";
import '../styles/componentsStyle/EventCard.css'
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tech Empowerment Summit 2025",
    description: "Join us for an inspiring event on technology, innovation, and collaboration.",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    venue: "SQI College Hall, Ogbomoso",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Design Thinking Workshop",
    description: "A hands-on creative session on solving real-world design challenges.",
    date: "Nov 22, 2025",
    time: "12:00 PM",
    venue: "Innovation Hub, Ibadan",
    imageUrl: "",
  },
  {
    id: 3,
    title: "CodeFest 2025",
    description: "A hackathon bringing developers together to build the future.",
    date: "Dec 10, 2025",
    time: "9:00 AM",
    venue: "Tech Center, Lagos",
    imageUrl: "",
  },

];

const EventsCard = () => {
  return (
    <section className="event-carousel">
      <h2 className="carousel-title">Upcoming Events</h2>
      <div className="carousel-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.imageUrl} alt={event.title} />
              <div className="overlay">
                <button className="details-btn">View Details</button>
              </div>
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
