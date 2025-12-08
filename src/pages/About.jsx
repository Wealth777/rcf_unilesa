import React, { useEffect } from 'react'
import '../styles/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

import HeroImg from '../assets/20250219_203324.png'
import bibleStudy from '../assets/exco2.jpg'
import Gen from '../assets/exco1.jpg'
import prayerCod from '../assets/prayerCord.jpg'
import follow1 from '../assets/follow1.jpg'
import follow2 from '../assets/Follow up secretary 2.jpg'
import vicePre from '../assets/Vice presiden.jpg'
import finSec from '../assets/Financial secretary.jpg'
import PRO from '../assets/EDITOR IN CHEIF.jpg'
import Drama from '../assets/Drama coordinator.jpg'
import AGS from '../assets/AGS.jpg'
import Academic from '../assets/Academic.jpg'
import Protocol from '../assets/Protocol coordinator.jpg'
import sport from '../assets/sport.png'
import president from '../assets/President.jpg'
import AMD from '../assets/AMD.jpg'
import media from '../assets/media.jpg'
import sister from '../assets/Sister.jpg'
import MD from '../assets/Music Director.jpg'
import WA from '../assets/WM.jpg'
import Deco from '../assets/Decoration.jpg'
import AW from '../assets/aw.jpg'
import TC from '../assets/TC.jpg'
import sanitation from '../assets/sanita.jpg'
import USH from '../assets/ushahe.jpg' 

export default function About() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true
    });
  }, []);


  return (
    <>

      <main className="about-page">
        <section className="hero-section container">
          <img src={HeroImg} alt="RCCF logo" className="hero-image" />
          <div className="hero-text">
            <h2>TRANSFORMATION CHAPEL</h2>
            <h3>THE REDEEMED CHRISTIAN FELLOWSHIP</h3>
            <h4>University of Ilesa Chapter</h4>
            <h4>Ilesa, Osun State — Nigeria</h4>
          </div>
        </section>

        <div className="container about-section">
          <h2>How We Started</h2>
          <p>ur fellowship, The Redeemed Christian Fellowship University of Ilesa, Transformation Chapel, stands as the happiest family on campus. We help students understand the reality of Christ. We teach truth with clarity. We create an environment where every student grows. We build a culture that honors God. We keep our focus on spiritual growth and unity. <br />

Our Bible Study tagged Digging Deep gives students a better understanding of God’s word. We explain scripture with clarity. We answer questions that shape spiritual maturity. We help students apply the word in daily life. Our prayer meeting helps us seek the face of the Father. We grow stronger as we pray together. <br />

Our mission of Aggressive Evangelism drives us beyond the campus. We reach people who need salvation. We speak to students, workers, traders, old people, and young people. We teach the message of Christ with clarity. We share testimony that leads hearts to truth. We trust God to touch lives through every outreach. <br />

Our workforce stands united. Every department serves with purpose. Every worker supports the mission and vision of the fellowship. New students will feel God’s presence in a new dimension. They will find growth and direction. They will join a family that welcomes them with love.</p>
        </div>

        <div className="container about-section">
          <h2>Our Mission</h2>
          <div>
            <h4>Holiness</h4>
            <p>Holiness stands at the center of our mission as RCF University of Ilesa chapter, Transformation Chapel. We choose a life that honors God in our conduct. We keep our thoughts clean and our actions sincere. We follow the teachings of Jesus in our decisions. We build strength through prayer and the Word. We show love in our relationships. We reject habits that oppose God's standards. We hold to scriptures like 1 Peter 1:16 and Psalm 24:3 to 4.</p>

            <h4>Reaching To Unbelievers</h4>
            <p>We reach unbelievers across nations with the message of Jesus Christ our Lord. We speak the gospel with clarity in every region. We equip members to present the truth with boldness. We support missions with prayer and resources. We form relationships that lead people to Christ. We organize outreach that draws hearts to the cross. We ask God to open doors for salvation everywhere. We hold to Mark 16:15 and Romans 10:14 as we pursue souls.</p>

            <h4>Aggressive Evangelism</h4>
            <p>We expand our mission by reaching students who need Christ. We invite them into a fellowship where they grow in truth. We stay present on campus with steady outreach. We place teams in hostels, lecture halls, and gathering points. We guide newcomers with clear teaching on salvation. We build a welcoming environment that encourages commitment. We strengthen our fellowship through unity and service. We stand on Matthew 28:19 and Acts 1:8 as we pursue aggressive evangelism.</p>
          </div>
        </div>

        <div className="container about-section">
          <h2>Our Vision</h2>
          <div>
            <h4>To make heaven</h4>
            <p>ur vision is to live a life that honors God daily. We pursue holiness in thoughts, words, and actions. We cultivate a deep relationship with Jesus through prayer and the Word. We commit to obedience and righteousness in every decision. We focus on eternal rewards, keeping heaven as our ultimate goal.</p>

            <h4>To take as many as possible with us</h4>
            <p>We aim to reach unbelievers with the gospel of Christ. We engage others through teaching, fellowship, and outreach. We train members to share salvation boldly on campus and beyond. We build a welcoming environment that encourages commitment and growth. We trust God to use our efforts to lead many to eternal life.</p>
          </div>
        </div>

        <div className="container  about-section">
          <h2 className='leaers-card-titile'>Our Leader</h2>
          <div className="leaders-grid">
            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={president} alt="" />
              <div>
                <h3>Janet Adeleke Adejoke</h3>
                <p>President</p>
                <p className='p2'>The Chair Person of the CEC Member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={vicePre} alt="" />
              <div>
                <h3>OGUNGBEMI TAIWO</h3>
                <p>Vice president</p>
                <p className='p2'>Brother's Coordinator</p>
                <p className='p2'>CEC member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={Gen} alt="" />
              <div>
                <h3>Olaoluwa Progress Lydia</h3>
                <p>General secretary</p>
                <p className='p2'>Alumni Relation Officer</p>
                <p className='p2'>CEC member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={sister} alt="" />
              <div>
                <h3>Ogunremi Funke</h3>
                <p>Sister's Coordinator</p>
                <p className='p2'>CEC member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={prayerCod} alt="" />
              <div>
                <h3>Alawode Peace Temidayo</h3>
                <p>Prayer Cordinator</p>
                <p className='p2'>Evangelism Cordinator</p>
                <p className='p2'>CEC member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={finSec} alt="" />
              <div>
                <h3>Grace Oluwatoyin</h3>
                <p>Financial Secretary</p>
                <p className='p2'>CEC member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={PRO} alt="" />
              <div>
                <h3>OLUSOGO OKIKIJESU AYOMIDE</h3>
                <p>TREASURE</p>
                <p className='p2'>EDITOR IN CHEIF</p>
                <p className='p2'>CEC member</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={AGS} alt="" />
              <div>
                <h3>Fagbola Oyinlola Hannah</h3>
                <p>Assistant General Secretary</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={sanitation} alt="" />
              <div>
                <h3>Adekunle Omotola Gloria</h3>
                <p>Sanitation Corninator</p>
                <p className='p2'>Assistant Prayer Cordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={bibleStudy} alt="" />
              <div>
                <h3>Olugbodi Grace Adufe</h3>
                <p>Bible Sturdy Cordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={MD} alt="" />
              <div>
                <h3>Ajayi Elisha</h3>
                <p>Music Director</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={AMD} alt="" />
              <div>
                <h3>Omolebi Teniola Daniella</h3>
                <p>Assistant Music Director</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={media} alt="" />
              <div>
                <h3>Fola-Makinde Samuel</h3>
                <p>Media Coordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={USH} alt="" />
              <div>
                <h3>Ojo Deborah Chukwunonso</h3>
                <p>Ushering Coordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={Deco} alt="" />
              <div>
                <h3>Oviguerien faith ayomide</h3>
                <p>Decorating Cordinator</p>
                <p className='p2'>Assistant Head Usher</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={Protocol} alt="" />
              <div>
                <h3>Ogunjobi Damilola Oluwatunmise</h3>
                <p>Protocol Coordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={follow1} alt="" />
              <div>
                <h3>Ayodele Precious Pipeloluwa </h3>
                <p>Follow-up Secretary 1</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={follow2} alt="" />
              <div>
                <h3>Adebayo Moyinoluwa favour</h3>
                <p>Follow-up Secretary 2</p>
                <p className='p2'>Assistant sister cord</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={TC} alt="" />
              <div>
                <h3>Yusuf Ayomide Modecai</h3>
                <p>Technical Cordinator</p>
                <p className='p2'>Transportation Secretary</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={Academic} alt="" />
              <div>
                <h3>Ishola Similoluwa Sarah</h3>
                <p>Academic Cordinator</p>
                <p className='p2'>Assistant Technical</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={WA} alt="" />
              <div>
                <h3>Ogunrinde Iyanuoluwa Fiyinfoluwa</h3>
                <p>Welfare Coordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={AW} alt="" />
              <div>
                <h3>Odelaanu Inioluwa Dorcas</h3>
                <p>Assistant Welfare Coordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={Drama} alt="" />
              <div>
                <h3>Adeosun Praise Adeyoyin</h3>
                <p>Drama Coordinator</p>
              </div>
            </div>

            <div className="leader-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <img src={sport} alt="" />
              <div>
                <h3>Olahanmi Wealth Olaoye</h3>
                <p>Sport Director</p>
              </div>
            </div>

          </div>
        </div>

      </main >
    </>
  )
}
