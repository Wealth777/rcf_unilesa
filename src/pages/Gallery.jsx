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
import image22 from '../assets/WhatsApp Image 2025-11-16 at 12.08.52_839c56bf.jpg'
import image21 from '../assets/WhatsApp Image 2025-05-04 at 12.26.44_fa532e08.jpg'
import image23 from '../assets/WhatsApp Image 2025-05-18 at 11.48.35_06f7f944.jpg'
import image24 from '../assets/WhatsApp Image 2025-11-30 at 12.25.11_78de6ea9.jpg'
import image25 from '../assets/WhatsApp Image 2025-11-30 at 12.25.13_51a88800.jpg'
import image26 from '../assets/WhatsApp Image 2025-11-30 at 12.25.54_c79dcd44.jpg'
import image27 from '../assets/WhatsApp Image 2025-11-30 at 12.25.55_bfbd087e.jpg'
import image28 from '../assets/WhatsApp Image 2025-11-30 at 12.25.55_d2b436c0.jpg'
import image29 from '../assets/WhatsApp Image 2025-11-30 at 12.25.58_d7a687ac.jpg'
import image30 from '../assets/WhatsApp Image 2025-11-30 at 12.27.09_9a906d3b.jpg'
import image31 from '../assets/WhatsApp Image 2025-11-30 at 12.27.11_b973a4f7.jpg'
import image32 from '../assets/WhatsApp Image 2025-11-30 at 12.27.12_302309f5.jpg'
import image33 from '../assets/WhatsApp Image 2025-11-30 at 12.27.13_e46a963b.jpg'
import image34 from '../assets/WhatsApp Image 2025-11-30 at 12.27.17_ce733488.jpg'
import image35 from '../assets/WhatsApp Image 2025-11-30 at 12.27.34_feee8d4c.jpg'
import image36 from '../assets/WhatsApp Image 2025-11-16 at 12.09.04_dcaa3a63.jpg'
import image37 from '../assets/WhatsApp Image 2025-11-30 at 12.27.55_95f2c4a7.jpg'
import image38 from '../assets/WhatsApp Image 2025-11-23 at 12.07.26_2ddb591c.jpg'
import image39 from '../assets/WhatsApp Image 2025-11-23 at 12.07.29_4e7567c5.jpg'
import image40 from '../assets/WhatsApp Image 2025-11-23 at 12.07.30_c8c76094.jpg'
import image41 from '../assets/WhatsApp Image 2025-11-23 at 12.14.05_9e4b35fc.jpg'
import image42 from '../assets/WhatsApp Image 2025-11-23 at 12.14.08_697075cd.jpg'
import image43 from '../assets/WhatsApp Image 2025-11-23 at 12.14.08_dc91abfd.jpg'
import image44 from '../assets/WhatsApp Image 2025-11-23 at 12.26.59_b0456d4c.jpg'
import image45 from '../assets/WhatsApp Image 2025-11-23 at 12.28.44_8a4c60d0.jpg'
import image46 from '../assets/WhatsApp Image 2025-11-23 at 12.39.11_f7ca2978.jpg'
import image47 from '../assets/WhatsApp Image 2025-11-23 at 12.28.44_f8fa672e.jpg'
import image48 from '../assets/WhatsApp Image 2025-11-23 at 12.28.45_5f63da37.jpg'
import image49 from '../assets/WhatsApp Image 2025-11-23 at 12.28.46_fb258c64.jpg'
import image50 from '../assets/WhatsApp Image 2025-11-23 at 12.28.47_2b6d0795.jpg'

// const video = [
  
// ]

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,
   image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23,image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50
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
      <motion />

    </main>
  );
}
