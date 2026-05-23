
import styles from './Amenities.module.css';

const selectedAmenities = [
  {
    name: "Infinity Sky Pool",
    desc: "Luxury lap pool and separate shallow kids' area.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c3-1.5 5-1.5 8 0s5 1.5 8 0 5-1.5 6 0M2 16c3-1.5 5-1.5 8 0s5 1.5 8 0 5-1.5 6 0M2 20c3-1.5 5-1.5 8 0s5 1.5 8 0 5-1.5 6 0" />
        <path d="M18 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM14 9l1.5-2h3M10 11l2-3.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Modern Gymnasium",
    desc: "Fully equipped with modern cardio and strength zones.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 6.5h11M6.5 17.5h11M3 9v6M21 9v6M6.5 6.5V17.5M17.5 6.5V17.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="1" y="10" width="2" height="4" rx="0.5"/>
        <rect x="21" y="10" width="2" height="4" rx="0.5"/>
      </svg>
    )
  },
  {
    name: "Co-Working Lounge",
    desc: "High-speed Wi-Fi and smart pods for remote work.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="13" rx="2" />
        <path d="M2 16h20M5 21h14M9 16v5M15 16v5" />
      </svg>
    )
  },
  {
    name: "EV Charging Station",
    desc: "Dedicated eco-friendly ports on all parking levels.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="15" height="12" rx="2" />
        <path d="M6 7V4h4v3M8 11v4M6 13h4M17 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
      </svg>
    )
  },
  {
    name: "E-Commerce Lockers",
    desc: "Secure, contactless digital spaces for parcel drop-offs.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8M21 8l-9-5-9 5M21 8l-9 5.5L3 8M12 13.5V21" />
      </svg>
    )
  },
  {
    name: "24/7 Power Backup",
    desc: "Continuous, uninterrupted power supply for all units.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "The Clubhouse",
    desc: "Grand multipurpose hall for community events and gatherings.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 10h2M14 10h2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Multi-Level Parking",
    desc: "Spacious, reserved, and automated parking structures.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9M13 10h-4" />
      </svg>
    )
  },
  {
    name: "Tier-3 Smart Security",
    desc: "24/7 perimeter monitoring, CCTV, and biometric gate access.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Kids’ Play Zone",
    desc: "Safe active area with soft-landing safety turf.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 5v14M6 5v14M6 9h12M6 14h12" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Rooftop Sky Lounge",
    desc: "Landscaped open roof spaces with panoramic city views.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Eco-Friendly Living",
    desc: "Advanced rainwater harvesting layouts and solar grids.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6a6 6 0 0 1 6 6c0 3.314-4 8-6 8s-6-4.686-6-8a6 6 0 0 1 6-6z" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function AmenitiesSlider() {
  // We duplicate the list once to ensure the slider loops infinitely without empty space gaps
  const doubleAmenitiesList = [...selectedAmenities, ...selectedAmenities];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <h2>World-Class Amenities</h2>
        <p>Premium infrastructure curated for exceptional living.</p>
      </div>

      {/* The main slider window that hides outer elements */}
      <div className={styles.sliderWindow}>
        <div className={styles.sliderTrack}>
          {doubleAmenitiesList.map((item, index) => (
            <div key={index} className={styles.squareCard}>
              <div className={styles.iconContainer}>
                {item.svg}
              </div>
              <div className={styles.cardContent}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}