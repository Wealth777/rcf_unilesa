import React from 'react'
import '../styles/Event.css'
import img from '../assets/DSC_0002a (23).JPG'

export default function Events() {
  return (
    <>
      <main className='event'>
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

              {/* <button>Read More</button> */}
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
              {/* <button>Read More</button> */}
            </div>
          </div>

          <div className='events1'>
            <div className='events-img-cont'>
              <img src={img} alt="" />
            </div>

            <div>
              <h3>Christmas Carol</h3>
              <p>Christmas Carol is a joyful celebration of the birth of Jesus Christ through songs, worship, and praise. It brings the church together in gratitude and reflection on God’s love. It’s a night of music, joy, and the true spirit of Christmas.</p>

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
              {/* <button>Read More</button> */}
            </div>
          </div>

          <div className='events1'>
            <div className='events-img-cont'>
              <img src={img} alt="" />
            </div>

            <div>
              <h3>Brothers and Sisters Week</h3>
              <p>Brothers and Sisters Week is a special time for fellowship, unity, and spiritual growth among members. It strengthens relationships, encourages mutual support, and promotes love within the family of faith. It’s a week to connect, serve, and celebrate together as one body in Christ.</p>

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
              {/* <button>Read More</button> */}
            </div>
          </div>

          {/* <div className='events1'>
                <div className='events-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Event Name</h3>
                  <h4>Event Theme</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div className='Date-cont'>
                    <div>
                      <h6>Date</h6>
                      <p>Date</p>
                    </div>
                    <div>
                      <h6>Time</h6>
                      <p>Date</p>
                    </div>
                    <div>
                      <h6>Location</h6>
                      <p>Date</p>
                    </div>
                  </div>
                    <button>Read More</button>
                </div>
            </div>

            <div className='events1'>
                <div className='events-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Event Name</h3>
                  <h4 className='Title'>Event Theme</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div className='Date-cont'>
                    <div>
                      <h6>Date</h6>
                      <p>Date</p>
                    </div>
                    <div>
                      <h6>Time</h6>
                      <p>Date</p>
                    </div>
                    <div>
                      <h6>Location</h6>
                      <p>Date</p>
                    </div>
                  </div>
                    <button>Read More</button>
                </div>
            </div> */}

        </div>
      </main>
    </>
  )
}

