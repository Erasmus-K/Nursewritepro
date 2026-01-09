import { useTawkTo } from '../utils/tawkto'

const TawkTo = () => {
  // Initialize Tawk.to with custom options
  useTawkTo({
    enabled: true,
    propertyId: '68dd96608a87051952400fcd',
    widgetId: '1j6gp6r39',
    customization: {
      hideOnMobile: false, // Set to true if you want to hide on mobile
      customGreeting: true,
      customCSS: `
        /* Custom styling for Tawk.to widget */
        #tawk-widget {
          z-index: 9999 !important;
        }
        
        /* Ensure it doesn't conflict with WhatsApp button */
        .tawk-min-container {
          bottom: 90px !important;
          right: 20px !important;
        }
        
        /* Custom colors to match your brand */
        .tawk-chat-panel {
          border-radius: 15px !important;
        }
      `
    }
  })

  // This component doesn't render anything visible
  // The Tawk.to widget will appear automatically
  return null
}

export default TawkTo