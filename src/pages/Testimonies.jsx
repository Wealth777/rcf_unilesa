import React, { useEffect, useMemo, useState } from 'react';
import '../styles/Testimonies.css'
import imgA from '../assets/DSC_0002a (23).JPG';
import imgB from '../assets/20250219_203324.png';
import imgC from '../assets/20251028_154814-removebg-preview.png';

export default function Testimonies() {
const initialData = useMemo(
    () => [
      {
        id: 1,
        name: 'Emmanuel A.',
        date: '2025-10-12',
        image: imgA,
        preview:
          'God showed up at my lowest point — I found peace and direction. A short preview of the testimony…',
        full: `I was at a crossroads. Everything felt uncertain and I had no strength to go on. During that season, I attended a meeting at the chapel and the message pierced my heart.
        
I experienced a real encounter — peace replaced anxiety and God renewed my purpose. My family also saw the change. Praise God!`,
      },
      {
        id: 2,
        name: 'Chioma O.',
        date: '2025-08-04',
        image: imgB,
        preview:
          'After years of disappointment, I learned to trust God. This preview shares how healing began.',
        full: `After many years searching for meaning, I finally found hope. The church community received me with love and the Word healed places I didn't know were broken.

I began to pray intentionally and God answered with restoration. My marriage healed, my job situation improved, and I now serve in the ministry.`,
      },
      {
        id: 3,
        name: 'Michael T.',
        date: '2024-11-26',
        image: imgC,
        preview: 'A sudden breakthrough turned my life around — a short snippet.',
        full: `I scheduled an appointment with a counselor and during prayer, an unusual calm came upon me. I felt a burden lift. The Lord gave me a new vision and a job opportunity came shortly after.

I remain grateful and committed to sharing what God has done.`,
      },
      {
        id: 4,
        name: 'Grace N.',
        date: '2024-05-10',
        image: imgA,
        preview:
          'I overcame fear and found new boldness. Here is a small preview of that walk.',
        full: `The fear that held me captive for years is gone. Through counselling, consistent prayer and a faithful community, I was set free.
        
Now I lead a small group and help others with similar struggles. God is faithful.`,
      },
    ],
    []
  );

  const [testimonies] = useState(initialData);
  const [selected, setSelected] = useState(null);

  // lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selected]);

  return (
    <main className="testimonies-page">
      <div className="container">
        <header className="testimony-header">
          <h1>Testimonies of Faith</h1>
          <p className="lead">
            Stories of God’s faithfulness — read how lives have been changed.
          </p>
        </header>

        <section className="timeline">
          {testimonies.map((t, idx) => {
            const side = idx % 2 === 0 ? 'left' : 'right';
            return (
              <article key={t.id} className={`timeline-item ${side}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="card-thumb">
                    <img src={t.image} alt={`${t.name} testimony`} />
                  </div>

                  <div className="card-body">
                    <div className="card-head">
                      <h3 className="testifier">{t.name}</h3>
                      <time className="testimony-date">{new Date(t.date).toLocaleDateString()}</time>
                    </div>

                    <p className="preview">{t.preview}</p>

                    <div className="card-actions">
                      <button
                        className="read-more-btn"
                        onClick={() => setSelected(t)}
                        aria-haspopup="dialog"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <div className="cta-row">
          <button className="share-btn" onClick={() => alert('Share form coming soon ✨')}>
            Share Your Testimony
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="tm-modal-overlay" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="tm-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tm-close" onClick={() => setSelected(null)} aria-label="Close">×</button>

            <div className="tm-modal-top">
              <img src={selected.image} alt={`${selected.name} portrait`} />
              <div className="tm-modal-meta">
                <h2>{selected.name}</h2>
                <p className="tm-date">{new Date(selected.date).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="tm-modal-body">
              {/* full story - plain text with paragraphs */}
              {selected.full.split('\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}