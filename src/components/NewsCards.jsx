import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carouselImg2 from '../assets/20251028_154814-removebg-preview.png'
import king from '../assets/king.jpg'
import '../styles/componentsStyle/newsCard.css'

export default function NewsCards() {

    const handlesNews = [
        {
            id: 1,
            imageUrl: carouselImg2,
            newsHeadLine: "Induction and Handing Over Is Near",
            newsBody: (
                <div>
                    <p>Induction and Handing Over is near. The fellowship prepares for a new cycle of leadership. The event presents new leaders who take responsibility for growth. It honours outgoing leaders for their service.</p>
                    <p>The transition strengthens trust among members. It promotes order in the fellowship. It gives everyone clear direction for the new session. Members pray for strength, wisdom, and unity. Everyone is encouraged to support the incoming leaders with commitment. The goal is to keep the fellowship focused on its mission.</p>
                     
                </div>
            ),
            author: "General Secretary"
        },
        {
            id: 2,
            imageUrl: king,
            newsHeadLine: "Kingdom Project",
            newsBody: (
                <div>
                    <p className='new-body-text'>Support the Kingdom Project. We are raising funds for a TV and sound system to improve worship, media outreach, and service quality at RCF Unilesa.</p>
                    <h2>Project Budget: ₦1,000,000</h2>
                    <p className='new-body-text'>Your 1k, 2k, and above will help us reach the target. Every contribution supports the work in God’s house.</p>
                    <p className='new-body-text'>Account Details</p>
                    <p className='new-body-text'>Zenith Bank – 1310141414</p>
                    <p className='new-body-text'>RCCG RCF UNILESA PROJECT</p>
                </div>
            ),
            author: "General Secretary"
        },
        {
            id: 3,
            imageUrl: carouselImg2,
            newsHeadLine: "Instagram",
            newsBody: (
                <div>
                    Follow us on Instagram
                    <br />
                    <a href="https://www.instagram.com/rcfunilesa/" target="_blank" rel="noreferrer">
                        https://www.instagram.com/rcfunilesa/

                    </a>
                </div>
            ),
            author: "Media Team"
        }
    ]

    return (
        <div className="container news-wrapper">
            <Carousel className="news-carousel">

                {handlesNews.map(item => (
                    <Carousel.Item key={item.id} className="news-item">
                        <div className="news-image-box">
                            <img className="news-image" src={item.imageUrl} alt={item.newsHeadLine} />
                        </div>

                        <Carousel.Caption className="news-caption">
                            <h5 className="news-title">{item.newsHeadLine}</h5>

                            <div className="news-body">
                                {item.newsBody}
                            </div>

                            <h3 className="news-author">{item.author}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>


    )
}