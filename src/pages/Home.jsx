import React from 'react'
import '../styles/Home.css'
import EventsCard from '../components/EventsCard'
import QuoteCard from '../components/QuoteCard'
import carouselImg1 from '../assets/20250219_203324.png'
import carouselImg2 from '../assets/20251028_154814-removebg-preview.png'
import carouselImg3 from '../assets/20250219_203324.png'
import { Link } from 'react-router-dom'
import ContactCard from '../components/ContactCard'

export default function Home() {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselImg1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={carouselImg2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={carouselImg3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={carouselImg3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-caption">
            <h1>Welcome to</h1>
            <h5>THE REDEEMED CHRISTAIN FELLOWSHIP</h5>
            <p>University of Ilesa Chapter</p>
            <h3>TRANSFORMATION CHAPEL</h3>
          </div>
        </div>
      </div>

      <div className='our-mission-section'>
        <div className='container'>
          <div>
            <h4>ABOUT US</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita cumque, dolorum quibusdam quam laboriosam nulla minus magni rerum exercitationem beatae quia, minima officiis qui officia dolorem explicabo facilis eius.
              Cumque distinctio rerum aliquam expedita similique alias dolores sed ipsa numquam ipsum consectetur, placeat quasi, voluptatum quia aliquid provident quo laboriosam rem exercitationem autem illo quam. Mollitia, facere. Eos, incidunt.
              Ratione maxime sit tenetur molestias impedit aspernatur alias explicabo libero. Officiis ipsa hic voluptas veritatis tenetur distinctio quam totam! Velit similique, ipsum exercitationem iusto eligendi reprehenderit suscipit recusandae dolore tenetur.
              Explicabo mollitia, iusto minus quibusdam unde necessitatibus eveniet dolore suscipit sapiente quae labore fuga dolorum, consectetur reiciendis eligendi nisi expedita, porro cum! Ipsa sit facere eveniet culpa dolore et quaerat.
              Reprehenderit quos placeat nisi, quam maiores sed a itaque illum ratione reiciendis! Aliquam praesentium inventore totam. Ea, dolorem. Corporis dolorum quaerat inventore commodi dolores fuga perferendis quasi, repellat rerum dicta!
              Alias sunt neque voluptate molestiae! Tempore animi porro facere aspernatur voluptatibus sint distinctio ipsum a! Maxime, id odit! Laborum ab ea veritatis reprehenderit consectetur iure error sed numquam unde commodi!
              Perspiciatis molestias est assumenda dignissimos obcaecati eligendi, suscipit fugiat harum quia mollitia sed eos! Error consectetur debitis voluptatibus pariatur dignissimos quaerat aspernatur veritatis reprehenderit repellendus maxime. Eaque, delectus architecto. Architecto.
              Quae, necessitatibus accusamus doloribus optio, fuga expedita libero officiis, dolores at maiores reprehenderit consectetur animi debitis. Reprehenderit optio corrupti doloribus deleniti labore quia sapiente eum error minima! Architecto, rem velit.
              Illo tempora ratione temporibus aut! Totam hic tempore, obcaecati animi, quo, molestias omnis provident et quibusdam molestiae beatae! In totam sapiente at tempora neque eligendi eos error autem quae nostrum.
              Iusto alias culpa ea consectetur repellat distinctio quidem molestias delectus aliquid, expedita ab labore tempora officiis commodi vero asperiores! Molestias at, id illum aut repellat vel harum expedita! Magni, est! <Link to={'/aboutus'} >Read More</Link> </p>
          </div>
          <div>
            <h4>OUR MISSION</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita cumque, dolorum quibusdam quam laboriosam nulla minus magni rerum exercitationem beatae quia, minima officiis qui officia dolorem explicabo facilis eius.
              Cumque distinctio rerum aliquam expedita similique alias dolores sed ipsa numquam ipsum consectetur, placeat quasi, voluptatum quia aliquid provident quo laboriosam rem exercitationem autem illo quam. Mollitia, facere. Eos, incidunt.
              Ratione maxime sit tenetur molestias impedit aspernatur alias explicabo libero. Officiis ipsa hic voluptas veritatis tenetur distinctio quam totam! Velit similique, ipsum exercitationem iusto eligendi reprehenderit suscipit recusandae dolore tenetur.
              Explicabo mollitia, iusto minus quibusdam unde necessitatibus eveniet dolore suscipit sapiente quae labore fuga dolorum, consectetur reiciendis eligendi nisi expedita, porro cum! Ipsa sit facere eveniet culpa dolore et quaerat.
              Reprehenderit quos placeat nisi, quam maiores sed a itaque illum ratione reiciendis! Aliquam praesentium inventore totam. Ea, dolorem. Corporis dolorum quaerat inventore commodi dolores fuga perferendis quasi, repellat rerum dicta!
              Alias sunt neque voluptate molestiae! Tempore animi porro facere aspernatur voluptatibus sint distinctio ipsum a! Maxime, id odit! Laborum ab ea veritatis reprehenderit consectetur iure error sed numquam unde commodi!
              Perspiciatis molestias est assumenda dignissimos obcaecati eligendi, suscipit fugiat harum quia mollitia sed eos! Error consectetur debitis voluptatibus pariatur dignissimos quaerat aspernatur veritatis reprehenderit repellendus maxime. Eaque, delectus architecto. Architecto.
              Quae, necessitatibus accusamus doloribus optio, fuga expedita libero officiis, dolores at maiores reprehenderit consectetur animi debitis. Reprehenderit optio corrupti doloribus deleniti labore quia sapiente eum error minima! Architecto, rem velit.
              Illo tempora ratione temporibus aut! Totam hic tempore, obcaecati animi, quo, molestias omnis provident et quibusdam molestiae beatae! In totam sapiente at tempora neque eligendi eos error autem quae nostrum.
              Iusto alias culpa ea consectetur repellat distinctio quidem molestias delectus aliquid, expedita ab labore tempora officiis commodi vero asperiores! Molestias at, id illum aut repellat vel harum expedita! Magni, est! <Link to={'/aboutus'} >Read More</Link> </p>
          </div>
        </div>
      </div>

      <div className="works">
        <div className="container work-cont">
          <h4>Work Force</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos atque hic, in eaque ducimus assumenda neque architecto sequi, delectus sapiente iste voluptatibus deleniti debitis, repellendus alias ipsum? Sit, facilis.
            Incidunt harum distinctio consectetur tempore blanditiis aliquam nostrum in saepe veritatis commodi. Ad ut repudiandae consequatur fuga eaque excepturi quia, tempore, rerum enim quos quo ipsum beatae eveniet. Accusamus, obcaecati.
            Unde quod laudantium hic mollitia id voluptatem, at amet dolorum magni incidunt aspernatur, asperiores, ex placeat quo dolor quasi et nulla nemo voluptatibus porro! Fuga doloremque enim repudiandae consequuntur consectetur.</h6>
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
          {/* <Link to={'/join.work.force'}> <button disabled>Join Work Force</button> </Link> */}
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
      <ContactCard/>
    </>
  )
}
