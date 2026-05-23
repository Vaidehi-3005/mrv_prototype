import React, { useState } from "react";
import styles from "./InteractiveWheel.module.css"; 

const itemsData = [
  {
    id: 0,
    title: "Spacious Design",
    angle: 0, 
    color: "#b89243", 
    pathId: "path-fwd",
    textOffset: "25%", 
    strokeDashoffset: 101.67, 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",  
    description: "At MRV Bench Marks, we believe that space is the ultimate luxury. Our spacious design philosophy focuses on creating open-plan environments that maximize natural light and airflow. By prioritizing wide, unobstructed floor plates, we foster a sense of freedom and creativity, ensuring that every square foot is optimized for both comfort and high-level corporate productivity."  
  },
  {
    id: 1,
    title: "Elite Materials",
    angle: 72, 
    color: "#1a5994", 
    pathId: "path-fwd",
    textOffset: "45%", 
    strokeDashoffset: -105.68, 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
    description: "We define prestige through the quality of our foundations. Every project is crafted using elite-grade, sustainable materials sourced from global leaders in manufacturing. From high-spec glass facades to premium marble flooring and acoustically treated interiors, we ensure that every texture and finish reflects an uncompromising standard of elegance and modern sophistication."  
  },
  {
    id: 2,
    title: "Timely Delivery",
    angle: 144,
    color: "#d66a32", 
    pathId: "path-fwd",
    textOffset: "65%", 
    strokeDashoffset: -313.02,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600",
    description: "In the world of real estate, punctuality is our strongest currency. Our end-to-end project management framework utilizes advanced scheduling technology and synchronized logistics to guarantee timely delivery. We understand that time is your business's most valuable asset, and we remain dedicated to meeting every deadline without ever sacrificing the integrity of our construction."  
  },
  {
    id: 3,
    title: "Trusted Build",
    angle: 216,
    color: "#2b7a3a", 
    pathId: "path-fwd", 
    textOffset: "85%", 
    strokeDashoffset: -520.37,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600",
    description: "A build you can rely on for generations. Our reputation is built on the pillars of transparency, engineering excellence, and a history of successful partnerships. Every MRV development undergoes rigorous structural testing and quality audits, ensuring a safe, stable, and highly reliable environment that our clients are proud to call their corporate home."  
  },
  {
    id: 4,
    title: "MRV Excellence",
    angle: 288,
    color: "#c42323", 
    pathId: "path-fwd",
    textOffset: "5%", 
    strokeDashoffset: -727.71,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600",
    description: "MRV Bench Marks represents the pinnacle of our corporate vision. By seamlessly integrating our core principles—spacious design, elite materials, and reliable delivery—we create iconic landmarks. Our excellence isn't just a goal; it's our standard, designed to elevate your brand’s identity and provide a world-class experience that sets you apart from the rest."  
  }
];

export default function InteractiveWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleItemClick = (index) => {
    const currentActiveAngle = itemsData[activeIndex].angle;
    const clickedAngle = itemsData[index].angle;

   
    let angleDifference = currentActiveAngle - clickedAngle;
    if (angleDifference <= 0) {
      angleDifference += 360;
    }

    setRotation((prev) => prev + angleDifference);
    setActiveIndex(index);
  };

  const activeData = itemsData[activeIndex];

  return (
    <div className={styles.wheelContainer}>
      
    
      <div className={styles.pageWrapper}>
    
        <h1 className={styles.mainHeading}>MRV BenchMarks</h1>

        <div className={styles.wheelCard}>
          
          <div className={styles.wheelWrapper}>
            <div 
              className={styles.outerCircle}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div 
                className={styles.innerCircleImage}
                style={{ 
                  backgroundImage: `url(${activeData.image})`,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg)` 
                }}
              />

              <svg viewBox="0 0 400 400" className={styles.svgLayer}>
                <defs>
                  <path id="path-fwd" d="M 35,200 a 165,165 0 1,1 330,0 a 165,165 0 1,1 -330,0" fill="none" />
                  <path id="path-rev" d="M 35,200 a 165,165 0 1,0 330,0 a 165,165 0 1,0 -330,0" fill="none" />
                </defs>

               
                {itemsData.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <circle
                      key={`track-${item.id}`}
                      cx="200"
                      cy="200"
                      r="165" 
                      fill="none"
                      stroke={item.color}
                      strokeWidth={isActive ? "54" : "44"} 
                      strokeDasharray="203.35 833.38" 
                      strokeDashoffset={item.strokeDashoffset}
                      className={styles.circleTrackArc}
                      onClick={() => handleItemClick(idx)}
                    />
                  );
                })}

                {itemsData.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <text
                      key={`lbl-${item.id}`}
                      fill={isActive ? "#ffffff" : "rgba(255, 255, 255, 0.75)"} 
                      dominantBaseline="middle" 
                      alignmentBaseline="middle" 
                      className={`${styles.svgText} ${isActive ? styles.activeSvgText : ""}`}
                      onClick={() => handleItemClick(idx)}
                    >
                      <textPath 
                        href={`#${item.pathId}`} 
                        startOffset={item.textOffset} 
                        textAnchor="middle"
                      >
                        {item.title}
                      </textPath>
                    </text>
                  );
                })}
              </svg>
            </div>
            <div className={styles.arrowIndicator}>
              <div className={styles.arrowTop}>❯</div>
              <div className={styles.arrowBottom}>❯</div>
            </div>
          </div>

          <div className={styles.contentWrapper}>
            <h2 className={styles.contentTitle}>{activeData.title}</h2>
            <p className={styles.contentDescription}>{activeData.description}</p>
          </div>
        </div>

        
        <CredentialsSection />
        
    
        <TestimonialsSection />

        <CTASection />
      </div>
    </div>
  );
}

// AWARDS & CREDENTIALS SECTION
const credentials = [
  { 
    name: "ISO Certified", 
    description: "Global standards for quality and management excellence.",
  },
  { 
    name: "Green Building", 
    description: "Committed to sustainable and eco-friendly construction.",
  },
  { 
    name: "Industry Award", 
    description: "Recognized for innovation and leadership in the sector.",
  },
];

export function CredentialsSection() {
  return (
    <div className={styles.credsContainer}>
      <h2 className={styles.credsTitle}>Awards & Credentials</h2>
      <div className={styles.credsGrid}>
        {credentials.map((item, idx) => {
          const gradientId = `goldGradient-${idx}`; 
          return (
            <div key={idx} className={styles.credCard}>
              
            
              <div className={styles.medalSvgWrapper}>
                <svg viewBox="0 0 100 130" className={styles.medalSvg}>
               
                  <path d="M50 70 L30 130 L50 115 L70 130 Z" fill="#D32F2F" />
                  
              
                  <defs>
                    <radialGradient id={gradientId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#FFE082" />
                      <stop offset="100%" stopColor="#FFD54F" />
                    </radialGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill={`url(#${gradientId})`} stroke="#FFB300" strokeWidth="2" />
                  
              
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#FFB300" strokeWidth="1" strokeDasharray="2,2" />
                 
                  <text x="50" y="65" fontSize="40" fontWeight="bold" fill="#FFB300" textAnchor="middle">
                    {idx + 1}
                  </text>
                  
             
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#FFF59D" strokeWidth="1" opacity="0.5"/>
                </svg>
              </div>

              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// TESTIMONIALS SECTION
const testimonialsData = [
  {
    id: 1,
    name: "Rajiv Singhal",
    role: "CEO, TechNova Solutions",
    review: "MRV Bench Marks delivered our corporate office ahead of schedule. The quality of materials and the spacious design exceeded our expectations. Truly a world-class experience."
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Director, Apex Holdings",
    review: "The level of professionalism is unmatched. Their commitment to 'Timely Delivery' isn't just a marketing slogan; it's a promise they kept perfectly."
  },
  {
    id: 3,
    name: "Karan Mehta",
    role: "Founder, Zenith Group",
    review: "A build we can rely on. The elite materials and structural integrity give us complete peace of mind. Highly recommend their commercial real estate projects."
  },
  {
    id: 4,
    name: "Priya Varma",
    role: "Managing Partner, Varma & Co.",
    review: "The seamless integration of natural light and open-plan environments has significantly boosted our team's productivity. A brilliant architectural feat."
  }
];

export function TestimonialsSection() {
  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.testimonialsTitle}>Testimonials</h2>
      
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          {testimonialsData.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.reviewText}>{t.review}</p>
              <div className={styles.reviewerInfo}>
                <h5 className={styles.reviewerName}>{t.name}</h5>
                <span className={styles.reviewerRole}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// SECTION 7: FINAL CTA BLOCK
export function CTASection() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Elevate Your Corporate Space?</h2>
          <p className={styles.ctaText}>Connect with our premium real estate experts for exclusive details.</p>
        </div>
        
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.whatsappButton}
        >
          Connect via WhatsApp <span>➔</span>
        </a>
      </div>
    </div>
  );
}