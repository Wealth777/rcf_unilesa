import React from 'react'
import '../styles/News.css'
import img from '../assets/DSC_0002a (23).JPG'
import king from '../assets/king.jpg'

export default function News() {
  return (
    <>
      <main>
        <div className="container news-page">
            <div className='news1'>
                <div className='news-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Our Website</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div>
                    <h5>Meida Cordinator</h5>
                    {/* <p className='name'>-Bro Smanul Fola-Makinde</p> */}
                    {/* <button>Read More</button> */}
                  </div>
                </div>
            </div>

            <div className='news1'>
                <div className='news-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Fresher Resumtion</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div>
                    <h5>Gen. Secretary</h5>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
            </div>

            {/* <div className='news1'>
                <div className='news-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Brother's And Sister's Week Round The Couner</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div>
                    <h5>Gen. Secretary</h5>
                    {/* <button>Read More</button> */}
                  {/* </div>
                </div>
            </div> */}

            <div className='news1'>
                <div className='news-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Resumtion Of the Stelights(SIWES STUDENTS)</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div>
                    <h5>Gen. Secretary</h5>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
            </div>

            <div className='news1'>
                <div className='news-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Induction and Handing Over Is Near</h3>
                  <p>Induction and Handing Over is near. The fellowship prepares for a new cycle of leadership. The event presents new leaders who take responsibility for growth. It honours outgoing leaders for their service.</p>
                    <p>The transition strengthens trust among members. It promotes order in the fellowship. It gives everyone clear direction for the new session. Members pray for strength, wisdom, and unity. Everyone is encouraged to support the incoming leaders with commitment. The goal is to keep the fellowship focused on its mission.</p>

                  <div>
                    <h5>President</h5>
                    <p className='name'>- P. Mama</p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
            </div>

            <div className='news1'>
                <div className='news-img-cont'>
                  <img src={king} alt="" />
                </div>

                <div>
                  <h3>Our Currnet Projects</h3>
                   <p >Support the Kingdom Project. We are raising funds for a TV and sound system to improve worship, media outreach, and service quality at RCF Unilesa.</p>
                    <h2>Project Budget: ₦1,000,000</h2>
                    <p >Your 1k, 2k, and above will help us reach the target. Every contribution supports the work in God’s house.</p>
                    <p >Account Details</p>
                    <p >Zenith Bank – 1310141414</p>
                    <p >RCCG RCF UNILESA PROJECT</p>

                  <div>
                    <h5>Gen. Secretary</h5>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}
