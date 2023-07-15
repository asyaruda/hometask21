function addShadow(button) {
  return new Promise((resolve) => {
      button.classList.add('clicked')
      setTimeout(() => {
          resolve()
      }, 500)
  })
}


function showMessage(message) {
  const messageElement = document.getElementById('message')
  messageElement.textContent = message
}


document.addEventListener('DOMContentLoaded', () => {
  const buttonContainer = document.getElementById('buttonContainer')

  const buttonCount = 6

  for (let i = 1; i <= buttonCount; i++) {
      const button = document.createElement('button')
      button.classList.add('button')
      button.textContent = `Button ${i}`

      button.addEventListener('click', () => {
          addShadow(button).then(() => {
              const buttons = document.querySelectorAll('.button')
              const allButtonsClicked = Array.from(buttons).every(
                  (button) => button.classList.contains('clicked')
              )

              if (allButtonsClicked) {
                showMessage('All buttons pressed!')
              } 
              
              else {
                  const oddButtons = document.querySelectorAll('.button:nth-child(odd)')
                  const evenButtons = document.querySelectorAll('.button:nth-child(even)')
                  const oddButtonsClicked = oddButtons.length > 0 && Array.from(oddButtons).every(
                      (button) => button.classList.contains('clicked')
                  )
                  const evenButtonsClicked = evenButtons.length > 0 && Array.from(evenButtons).every(
                      (button) => button.classList.contains('clicked')
                  )

                  if (oddButtonsClicked) {
                    showMessage('All odd buttons pressed!')
                  }

                  if (evenButtonsClicked) {
                    showMessage('All even buttons pressed!')
                  }
              }
          })
      })

      buttonContainer.appendChild(button)
  }
})

