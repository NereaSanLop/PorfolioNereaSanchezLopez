// Efecto de typing en el header
const commands = ["whoami", "ls -la", "cat portfolio.txt", "npm start"]

let commandIndex = 0
let charIndex = 0
const typingElement = document.getElementById("typing-text")
const typingSpeed = 100
const pauseBetweenCommands = 2000

function typeCommand() {
  if (commandIndex < commands.length) {
    const currentCommand = commands[commandIndex]

    if (charIndex < currentCommand.length) {
      typingElement.textContent += currentCommand[charIndex]
      charIndex++
      setTimeout(typeCommand, typingSpeed)
    } else {
      setTimeout(() => {
        typingElement.textContent = ""
        charIndex = 0
        commandIndex++
        if (commandIndex >= commands.length) {
          commandIndex = 0
        }
        typeCommand()
      }, pauseBetweenCommands)
    }
  }
}

// Iniciar el efecto de typing
window.addEventListener("load", () => {
  setTimeout(typeCommand, 500)
})

// Animación de las tech cards al hacer scroll
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }, index * 100)
    }
  })
}, observerOptions)

// Aplicar animaciones de entrada
document.addEventListener("DOMContentLoaded", () => {
  // Animar tech cards inmediatamente con retrasos escalonados
  const techCards = document.querySelectorAll(".tech-card")
  techCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"
    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, 700 + index * 100)
  })

  // Animar project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"
    observer.observe(card)
  })

  // Animar timeline items
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-30px)"
    item.style.transition = "all 0.6s ease"
    observer.observe(item)
  })

  // Animar skill categories
  const skillCategories = document.querySelectorAll(".skill-category")
  skillCategories.forEach((category) => {
    category.style.opacity = "0"
    category.style.transform = "translateY(30px)"
    category.style.transition = "all 0.6s ease"
    observer.observe(category)
  })

  document.querySelectorAll(".section").forEach((section) => {
    section.style.animationPlayState = "paused"
    observer.observe(section)
  })
})

// Efecto parallax suave en el hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero-content")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`
    hero.style.opacity = 1 - scrolled / 500
  }

  const parallaxElements = document.querySelectorAll(".background-grid")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Simular hover secuencial en tech-cards
const techCards = document.querySelectorAll(".tech-card")
let currentIndex = 0;

setInterval(() => {
    // Remover la clase de simulación del anterior
    techCards.forEach(card => card.classList.remove('simulated-hover'));
    
    // Añadir la clase al actual
    techCards[currentIndex].classList.add('simulated-hover');
    
    // Avanzar al siguiente índice
    currentIndex = (currentIndex + 1) % techCards.length;
}, 2000);

// Añadir efecto de matriz en el fondo
function createMatrixEffect() {
  const canvas = document.createElement("canvas")
  canvas.style.position = "fixed"
  canvas.style.top = "0"
  canvas.style.left = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.zIndex = "-1"
  canvas.style.opacity = "0.05"
  canvas.style.pointerEvents = "none"
  document.body.appendChild(canvas)

  const ctx = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const chars = "01"
  const fontSize = 14
  const columns = canvas.width / fontSize
  const drops = Array(Math.floor(columns)).fill(1)

  function draw() {
    ctx.fillStyle = "rgba(10, 14, 39, 0.05)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#64ffda"
    ctx.font = fontSize + "px monospace"

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)]
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }

  setInterval(draw, 50)

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}
createMatrixEffect();

// Console log personalizado
console.log("%c¡Holaaa!", "color: #64ffda; font-size: 20px; font-weight: bold;")
console.log("%c¿Revisando el código? :D", "color: #c792ea; font-size: 14px;")
console.log("%cSi quieres contactar: nerea.sanchez11@alu.uclm.es", "color: #6c95ff; font-size: 12px;")
