import { useEffect } from 'react'

// Utility functions from the original script.js
export const useOriginalScript = () => {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Image loading optimization
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]')
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.onload = () => img.classList.add('loaded')
            if (img.complete) img.classList.add('loaded')
            imageObserver.unobserve(img)
          }
        })
      })
      
      images.forEach(img => imageObserver.observe(img))
    }

    // Testimonials auto-slider
    const rotateTestimonials = () => {
      const testimonialCards = document.querySelectorAll('.testimonial-card')
      if (testimonialCards.length > 0) {
        let testimonialIndex = 0
        testimonialCards.forEach(card => card.style.opacity = '0.7')
        testimonialCards[testimonialIndex].style.opacity = '1'
        testimonialIndex = (testimonialIndex + 1) % testimonialCards.length
      }
    }

    // Stats counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-card h3')
      counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''))
        if (target) {
          let current = 0
          const increment = target / 100
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              counter.textContent = counter.textContent.replace(/[0-9,]+/, target.toLocaleString())
              clearInterval(timer)
            } else {
              counter.textContent = counter.textContent.replace(/[0-9,]+/, Math.floor(current).toLocaleString())
            }
          }, 20)
        }
      })
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleSmoothScroll)

    // Initialize functions
    optimizeImages()
    
    // Start testimonial rotation
    const testimonialInterval = setInterval(rotateTestimonials, 5000)

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = '0.2s'
          entry.target.classList.add('fade-in')
          
          // Animate counters for stats section
          if (entry.target.classList.contains('stats-section')) {
            setTimeout(animateCounters, 300)
          }
          
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
    
    // Observe all sections with fade-in class
    document.querySelectorAll('.fade-in').forEach(section => {
      observer.observe(section)
    })

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleSmoothScroll)
      clearInterval(testimonialInterval)
      observer.disconnect()
    }
  }, [])
}

// Notification utility
export const showNotification = (message, type = 'info') => {
  // Remove existing notifications
  const existing = document.querySelector('.notification')
  if (existing) existing.remove()
  
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 1000;
    animation: slideInRight 0.3s ease;
    max-width: 400px;
  `
  
  document.body.appendChild(notification)
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideOutRight 0.3s ease'
      setTimeout(() => notification.remove(), 300)
    }
  }, 5000)
}