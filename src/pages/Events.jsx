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
              <h3>Deeging Deep</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

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

              <button>Read More</button>
            </div>
          </div>

          <div className='events1'>
            <div className='events-img-cont'>
              <img src={img} alt="" />
            </div>

            <div>
              <h3>Prayer Meeting</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

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
              <button>Read More</button>
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

