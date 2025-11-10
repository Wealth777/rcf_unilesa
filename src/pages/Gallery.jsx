import React from "react";
import { motion } from "framer-motion";
import "../styles/Gallery.css";


import image1 from "../assets/DSC_0002a (23).JPG";
import image2 from "../assets/DSC_0002a (27).JPG";
import image3 from "../assets/DSC_0002a (5).JPG";
import image4 from "../assets/DSC_0002a (6).JPG";
import image5 from "../assets/DSC_0007.jpg";
import image6 from "../assets/DSC_0012a (4).jpg";
import image7 from "../assets/DSC_0018.JPG";
import image8 from "../assets/DSC_0021.JPG";
import image9 from "../assets/DSC_0024-2.jpg";
import image10 from "../assets/DSC_0040-3.jpg";
import image11 from "../assets/DSC_0045w (1).JPG";
import image12 from "../assets/DSC_0045w (2).JPG";
import image13 from "../assets/Sunday sch (9)a.jpg";
import image14 from "../assets/service (28)ass.JPG";
import image15 from "../assets/service (18)ass.JPG";
import image16 from "../assets/group 3 (40)a.jpg";
import image17 from "../assets/group 3 (35).JPG";
import image18 from "../assets/G-2 (3).jpg";
import image19 from "../assets/G-1 (29).jpg";
import image20 from "../assets/eer (1).JPG";

// const video = [
  
// ]

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,
   image13, image14, image15, image16, image17, image18, image19, image20 
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-section container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>📸 Our Images</h3>
          <p>Moments captured during our fellowship programs</p>
        </motion.div>

        <motion.div
          className="images-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {images.map((img, i) => (
            <motion.div
              className="images-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img src={img} alt={`Gallery ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </section>


        {/* <section className="gallery-section container">
          <motion.div
            className="header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>🎥 Our Videos</h3>
            <p>Watch highlights and messages from our past gatherings</p>
          </motion.div>

          <motion.div
            className="videos-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                className="video-card"
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <video src={video} controls />
              </motion.div>
            ))}
          </motion.div>
        </section> */}
    </main>
  );
}
