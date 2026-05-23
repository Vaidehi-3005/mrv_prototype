import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './VirtualTour.css';

const VirtualTour = () => {
  const navigate = useNavigate();
  useEffect(() => {

    let viewerInstance = null;

    // 1. Define your custom HTML element generator
   const myCustomHotspotCreator = (hotSpotDiv, args) => {
  // Add a clean custom class to the parent wrapper
  hotSpotDiv.classList.add('my-completely-custom-wrapper');

  // Create your own button element completely from scratch
  const customBtn = document.createElement('button');
  customBtn.className = 'my-own-action-button';
  
  // NEW: Assign the text dynamically to the data-tooltip attribute
  customBtn.setAttribute('data-tooltip', args.text);
  
  // Inject ONLY the arrow icon inside the button
  customBtn.innerHTML = `
    <span class="button-icon">➔</span>
  `;

  // Attach your own manual click redirection event handler
  customBtn.addEventListener('click', () => {
    if (viewerInstance) {
      viewerInstance.loadScene(args.goToScene);
    }
  });

  // Append your custom button into Pannellum's tracking coordinate wrapper
  hotSpotDiv.appendChild(customBtn);
};
    if (window.pannellum) {
      viewerInstance = window.pannellum.viewer('tour-viewer', {
        default: {
          firstScene: "room1",
          author: "Your Name",
          sceneFadeDuration: 1000,
          autoLoad: true 
        },
        scenes: {
          room1: {
            title: "The Living Room",
            type: "equirectangular",
            panorama: "https://l13.alamy.com/360/2R1C1XA/full-seamless-spherical-hdri-360-panorama-view-in-interior-of-white-kitchen-in-modern-flat-apartments-in-equirectangular-projection-vr-content-2R1C1XA.jpg", 
            hfov: 110,
            pitch: -10, // Moved down away from center view
            yaw: 140,   // Positioned naturally in the scene frame
            hotSpots: [
              {
                pitch: -10,  // Put your new pitch number here
        yaw: 147,
                type: "custom", // 2. Tell Pannellum this is a custom element
                createTooltipFunc: myCustomHotspotCreator, // 3. Pass your function
                createTooltipArgs: { 
                  text: "Enter the bedroom", 
                  goToScene: "garden" 
                }
              }
            ]
          },
          garden: {
            title: "The Backyard Garden",
            type: "equirectangular",
            panorama: "https://l13.alamy.com/360/2PMNKHC/seamless-360-panorama-in-interior-of-bedroom-of-cheap-hostel-flat-or-apartments-with-chairs-sofa-and-table-in-equirectangular-projection-with-zenith-2PMNKHC.jpg", 
            hfov: 110,
            pitch: -100,
            yaw: 90,
            hotSpots: [
              {
                pitch: -25,
                yaw: 105,
                type: "custom",
                createTooltipFunc: myCustomHotspotCreator,
                createTooltipArgs: { 
                  text: "Return to Living Room", 
                  goToScene: "room1" 
                }
              }
            ]
          }
        }
      });
      window.myViewer = viewerInstance;
    }

    return () => {
      if (viewerInstance) {
        viewerInstance.destroy();
      }
    };
  }, []);

  return (
    <>
   
  <div className="tourWrapper">

    <div className="topControlBar">
      <button
        onClick={() => navigate('/Project-details')}
        className="tourBackButton"
        aria-label="Exit virtual tour"
      >
        Back
      </button>
    </div>

    <div className="viewerContainer">
      <div
        id="tour-viewer"
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>

  </div>

   
     </>
  );
};

export default VirtualTour;