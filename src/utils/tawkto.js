import { useEffect } from 'react'

/**
 * Custom hook for Tawk.to integration
 * @param {Object} options - Configuration options
 * @param {boolean} options.enabled - Whether to load Tawk.to (default: true)
 * @param {string} options.propertyId - Your Tawk.to property ID
 * @param {string} options.widgetId - Your Tawk.to widget ID
 * @param {Object} options.customization - Custom settings
 */
export const useTawkTo = (options = {}) => {
  const {
    enabled = true,
    propertyId = '68dd96608a87051952400fcd',
    widgetId = '1j6gp6r39',
    customization = {}
  } = options

  useEffect(() => {
    if (!enabled) return

    // Initialize Tawk.to API
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Apply customizations
    if (customization.hideOnMobile) {
      window.Tawk_API.onLoad = function() {
        if (window.innerWidth <= 768) {
          window.Tawk_API.hideWidget()
        }
      }
    }

    if (customization.customGreeting) {
      window.Tawk_API.onLoad = function() {
        window.Tawk_API.setAttributes({
          'name': 'NursePro Visitor',
          'email': '',
          'hash': ''
        })
      }
    }

    // Event handlers
    window.Tawk_API.onLoad = function() {
      console.log('Tawk.to chat widget loaded successfully')
      
      // Custom styling if needed
      if (customization.customCSS) {
        const style = document.createElement('style')
        style.textContent = customization.customCSS
        document.head.appendChild(style)
      }
    }

    window.Tawk_API.onChatStarted = function() {
      console.log('Chat started with NursePro support')
      
      // Track chat start event (for analytics)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'chat_started', {
          event_category: 'engagement',
          event_label: 'tawk_to_chat'
        })
      }
    }

    window.Tawk_API.onChatEnded = function() {
      console.log('Chat ended')
      
      // Track chat end event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'chat_ended', {
          event_category: 'engagement',
          event_label: 'tawk_to_chat'
        })
      }
    }

    window.Tawk_API.onOfflineSubmit = function(data) {
      console.log('Offline message submitted:', data)
    }

    // Create and inject the script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    // Cleanup function
    return () => {
      // Remove the script
      const tawkScript = document.querySelector('script[src*="embed.tawk.to"]')
      if (tawkScript) {
        tawkScript.remove()
      }
      
      // Remove the widget iframe
      const tawkWidget = document.getElementById('tawk-widget')
      if (tawkWidget) {
        tawkWidget.remove()
      }
      
      // Clean up global variables
      delete window.Tawk_API
      delete window.Tawk_LoadStart
    }
  }, [enabled, propertyId, widgetId, customization])
}

/**
 * Utility functions to control Tawk.to widget
 */
export const tawkToUtils = {
  // Show the widget
  show: () => {
    if (window.Tawk_API) {
      window.Tawk_API.showWidget()
    }
  },

  // Hide the widget
  hide: () => {
    if (window.Tawk_API) {
      window.Tawk_API.hideWidget()
    }
  },

  // Toggle widget visibility
  toggle: () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle()
    }
  },

  // Maximize the chat window
  maximize: () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize()
    }
  },

  // Minimize the chat window
  minimize: () => {
    if (window.Tawk_API) {
      window.Tawk_API.minimize()
    }
  },

  // Set visitor attributes
  setAttributes: (attributes) => {
    if (window.Tawk_API) {
      window.Tawk_API.setAttributes(attributes)
    }
  },

  // Add tags to the visitor
  addTags: (tags) => {
    if (window.Tawk_API) {
      window.Tawk_API.addTags(tags)
    }
  },

  // Remove tags from the visitor
  removeTags: (tags) => {
    if (window.Tawk_API) {
      window.Tawk_API.removeTags(tags)
    }
  },

  // Check if chat is online
  isOnline: () => {
    return window.Tawk_API ? window.Tawk_API.isOnline() : false
  },

  // Get current status
  getStatus: () => {
    return window.Tawk_API ? window.Tawk_API.getStatus() : null
  }
}