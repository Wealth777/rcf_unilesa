import React from 'react'
import '../styles/Home.css'
import EventsCard from '../components/EventsCard'
import QuoteCard from '../components/QuoteCard'
import carouselImg2 from '../assets/DSC_0002a (23).JPG'
import carouselImg3 from '../assets/20250219_203324.png'
import carouselImg4 from '../assets/WhatsApp Image 2025-11-16 at 12.08.52_839c56bf.jpg'
import carouselImg5 from '../assets/WhatsApp Image 2025-05-04 at 12.26.44_fa532e08.jpg'
import carouselImg6 from '../assets/WhatsApp Image 2025-05-18 at 11.48.35_06f7f944.jpg'
import { Link } from 'react-router-dom'
import ContactCard from '../components/ContactCard'
import Carousel from 'react-bootstrap/Carousel';
import NewsCards from '../components/NewsCards'


export default function Home() {
  return (
    <>
      <div>
        <Carousel controls={false} indicators={false} interval={2000}>
          <Carousel.Item>
            <img src={carouselImg4} text="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImg2} text="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImg5} text="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImg6} text="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImg2} text="Firth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImg3} text="Sixth slide" />
          </Carousel.Item>
        </Carousel>

        <Carousel.Caption>
          <h5>THE REDEEMED CHRISTAIN FELLOWSHIP</h5>
          <p>University of Ilesa Chapter</p>
          <h3>TRANSFORMATION CHAPEL</h3>
        </Carousel.Caption>
      </div>

      <div className='our-mission-section'>
        <div className='container'>
          <div>
            <h4>ABOUT US</h4>
            <p>Our fellowship, The Redeemed Christian Fellowship University of Ilesa, Transformation Chapel, stands as the happiest family on campus. We help students understand the reality of Christ. We teach truth with clarity. We create an environment where every student grows. We build a culture that honors God. We keep our focus on spiritual growth and unity. <br /> <br />

              Our Bible Study tagged Digging Deep gives students a better understanding of God’s word. We explain scripture with clarity. We answer questions that shape spiritual maturity. We help students apply the word in daily life. Our prayer meeting helps us seek the face of the Father. We grow stronger as we pray together. <br /> <br />

              Our mission of Aggressive Evangelism drives us beyond the campus. We reach people who need salvation. We speak to students, workers, traders, old people, and young people. We teach the message of Christ with clarity. We share testimony that leads hearts to truth. We trust God to touch lives through every outreach. <br /> <br />

              Our workforce stands united. Every department serves with purpose. Every worker supports the mission and vision of the fellowship. New students will feel God’s presence in a new dimension. They will find growth and direction. They will join a family that welcomes them with love. <Link to={'/aboutus'} >Read More</Link> </p>
          </div>
          <div>
            <h4>OUR MISSION</h4>
            <p>Our mission as RCF University of Ilesa chapter, Transformation Chapel centers on holy living, bold outreach, and aggressive evangelism. We choose a lifestyle that honors God in our thoughts and actions. We build strength through prayer and the Word. We reach unbelievers with clear teaching on salvation. We speak the gospel with confidence in every place God opens. <br /><br /> We form connections that point people to Christ. We stay active on campus through steady outreach. We place teams in hostels and lecture halls to reach students. We welcome newcomers into a fellowship where they grow in truth. We strengthen our unity as we work together. We hold to scriptures like 1 Peter 1:16, Mark 16:15, and Matthew 28:19.
              <Link to={'/aboutus'} >Read More</Link> </p>
          </div>
        </div>
      </div>

      <div className="works">
        <div className="container work-cont">
          <h4>Work Force</h4>
          <h6>RCF University of Ilesa chapter, Transformation Chapel grows through an active workforce that serves with purpose. You see students leading prayer, worship, outreach, and follow up. You see teams handling media, teaching, drama, welfare, ushering, and sanitation. You see commitment that builds a strong fellowship. You see unity that strengthens every program. You see leaders who guide members with clear direction. You see workers who support newcomers with patience and care. You see a structure that helps you grow in faith and service. You see opportunities to use your gifts. You see a place where your walk with Christ becomes stronger. You see a family waiting for you to join and serve.</h6>
          <div>
            <h5>Media Unit</h5>
            <h5>Decoration Unit</h5>
            <h5>Choir Unit (Voice Of Redeemtion)</h5>
            <h5>Biblr Study Unit</h5>
            <h5>Welfare Unit</h5>
            <h5>Protocol Unit</h5>
            <h5>Editorial Unit</h5>
            <h5>Follow-Up Unit</h5>
            <h5>Prayer Unit</h5>
            <h5>Envagelisim Unit</h5>
            <h5>Accademic Unit</h5>
            <h5>Technical Unit</h5>
            <h5>Sanitation Unit</h5>
            <h5>Ushering Unit</h5>
          </div>
          <Link to={'/join.work.force'}> <button>Join Work Force</button> </Link>
        </div>
      </div>

      <div className="accpectChrist">
        <div className='container'>
          <div>
            <h2>Do You Want To Give Your Life To Christ?</h2>
            <h4>Please Follow The Steps Below.</h4>
          </div>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Acknowledge all your sins Acts 2:36 - 38
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body container">
                  <p>Therefore let all the house of Israel know assuredly, that God hath made the same Jesus, whom ye have crucified, both Lord and Christ. 37 Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do? 38 Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Confess those sins. Galatians 5:19 - 21
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>Now the works of the flesh are manifest, which are these; Adultery, fornication, uncleanness, lasciviousness, 20 Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies, 21 Envyings, murders, drunkenness, revellings, and such like: of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Ask for forgiveness of sin . I John 1:9
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  Repent of those sins. Act 3:19
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                  Forsake all your old ways and sinful habit Luke 14: 33
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>So likewise, whosoever he be of you that forsaketh not all that he hath, he cannot be my disciple.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                  Join a Bible believing Church around. Hebrew 10:25
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventsCard />
      <QuoteCard />
      <NewsCards />
      <ContactCard />
    </>
  )
}
