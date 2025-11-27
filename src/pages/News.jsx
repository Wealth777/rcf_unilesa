import React from 'react'
import '../styles/News.css'
import img from '../assets/DSC_0002a (23).JPG'

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
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

                  <div>
                    <h5>President</h5>
                    <p className='name'>- P. Mama</p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
            </div>

            <div className='news1'>
                <div className='news-img-cont'>
                  <img src={img} alt="" />
                </div>

                <div>
                  <h3>Our Currnet Projects</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi doloremque asperiores quae sapiente ipsa rem reprehenderit, tempore perspiciatis vitae sint magnam exercitationem voluptate odit quisquam. Soluta unde vitae aspernatur!</p>

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
