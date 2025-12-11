import React, { useEffect, useState } from 'react'
import '../styles/Event.css'
import axios from 'axios'

export default function Events() {

  const [formData, setForData] = useState([])

  const fetchProgrammes = async () => {
    try {
      const res = await axios.get('http://localhost:9000/api/admin/published/programmes')

      console.log(res.data?.data || [])
      setForData(res.data?.data || [])
    } catch (err) {
      console.log(err.response?.data?.message || err.message)
    }
  }

  useEffect(() => {
    fetchProgrammes()
  }, [])

  return (
    <>
      <main className='event'>
        <div className="container events-page">

          {formData.map((item, i) => (
            <div key={i}>
              <article className='event-card'>
                <div className='event-img-wrapper'>
                  <img className='img' src={item.programImage} alt={item.title} />
                </div>

                <div className='event-content'>
                  <h3>{item.title}</h3>
                  <div className="event-description">
                    <p>{item.programBody}</p>
                  </div>

                  <div className='event-meta-grid'>
                    <div className="meta-item">
                      <h6>Date</h6>
                      <p>{item.programDate ? item.programDate.split("T")[0] : ""}</p>
                    </div>
                    <div className="meta-item">
                      <h6>Time</h6>
                      <p>{item.programTime}</p>
                    </div>
                    <div className="meta-item">
                      <h6>Location</h6>
                      <p>{item.programLocation}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}

        </div>
      </main>
    </>
  )
}


{/* <main className='event'>
        <div className="container events-page">
          <div className='events1'>
            <div className='events-img-cont'>
              <img src={img} alt="" />
            </div>

            <div>
              <h3>Digging Deep</h3>
              <p>Digging Deep is a Bible study session focused on understanding God’s Word in depth. It helps believers grow in knowledge, strengthen their faith, and apply scriptural truths to daily living. It’s a time to learn, share insights, and build a stronger spiritual foundation.</p>

              <div className='Date-cont'>
                <div>
                  <h6>Date</h6>
                  <p>Tuesday</p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p>5pm - 6pm</p>
                </div>
                <div>
                  <h6>Location</h6>
                  <p>RCF AUDITORIUM</p>
                </div>
              </div>
            </div>
          </div>

          <div className='events1'>
            <div className='events-img-cont'>
              <img src={img} alt="" />
            </div>

            <div>
              <h3>Prayer Meeting</h3>
              <p>Prayer Meeting is a time of heartfelt communion with God. Believers gather to seek His presence, strengthen their faith, and intercede for personal and collective needs. It’s a moment to refresh your spirit, align with God’s will, and experience the power of united prayer.</p>

              <div className='Date-cont'>
                <div>
                  <h6>Date</h6>
                  <p>Thursday</p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p>5pm - 6pm</p>
                </div>
                <div>
                  <h6>Location</h6>
                  <p>RCF AUDITORIUM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='events1'>
            <div className='events-img-cont'>
              <img src={img} alt="" />
            </div>

            <div>
              <h3>Sunday Service</h3>
              <p></p>

              <div className='Date-cont'>
                <div>
                  <h6>Date</h6>
                  <p>Sunday</p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p>8am - 11am</p>
                </div>
                <div>
                  <h6>Location</h6>
                  <p>RCF AUDITORIUM</p>
                </div>
              </div>
            </div>
          </div>

          <div className='events1'>
            <div className='events-img-cont'>
              <img src={carol} alt="" />
            </div>

            <div>
              <h3> A CHRISTMAS CAROL – MESSIAH: THE GIFT </h3>
              <p>Christmas Carol is a joyful celebration of the birth of Jesus Christ through songs, worship, and praise. It brings the church together in gratitude and reflection on God’s love. It’s a night of music, joy, and the true spirit of Christmas.</p>
              <p>This December, we gather to celebrate the birth of the greatest gift to humanity — Jesus, the Messiah.  
</p>
<p>Let's gather to honor the birth of the one who changed everything. Come experience the joy, warmth, and wonder of Christmas through powerful carol and heartfelt worship
</p><p>It’s not just about the season — it’s about the Savior.
</p><p>Invite someone. Come expectant. The Gift is waiting for you.  
</p>

              <div className='Date-cont'>
                <div>
                  <h6>Date</h6>
                  <p>Friday, 12th December 2025</p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p>5:00 PM  </p>
                </div>
                <div>
                  <h6>Location</h6>
                  <p>RCF AUDITORIUM</p>
                </div>
              </div>
            </div>
          </div>

          <div className='events1'>
            <div className='events-img-cont'>
              <img src={broAndSis} alt="" />
            </div>

            <div>
              <h3>BRO SIS WEEK IS HERE!</h3>
              <h3>THEME: THE BOANERGES</h3>
              <p>Brothers and Sisters Week is a special time for fellowship, unity, and spiritual growth among members. It strengthens relationships, encourages mutual support, and promotes love within the family of faith. It’s a week to connect, serve, and celebrate together as one body in Christ.</p>
              <p>
                Get ready for a week of love, laughter, bonding, and Kingdom vibes! 💃🕺  
It’s not just an event — it’s a FAMILY EXPERIENCE! ❤  
              </p>

              <p>Come, connect, and create unforgettable memories with your brothers and sisters in Christ! Don’t miss it!</p>

              <div className='Date-cont'>
                <div>
                  <h6>Date</h6>
                  <p>Date: 12th – 18th January, 2026</p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p></p>
                </div>
                <div>
                  <h6>Location</h6>
                  <p>RCF AUDITORIUMRCF AUDITORIUM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main> */}
