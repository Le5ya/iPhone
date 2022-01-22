const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a')
    const linkChar = document.querySelector('.card-details__link-characteristics')

    const newArray = [...links, linkChar]


    newArray.forEach((element, index, array) => {
      
      element.addEventListener('click', (event) => {
        event.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        } else {
          console.log('нет')
        }
      })
    })
    
      // linkChar.addEventListener('click', (event) => {
      //   event.preventDefault()
      //   const id = linkChar.getAttribute('href').substring(1)
      //   const section = document.getElementById('characteristics')
      //   if(section) {
      //     section.scrollIntoView({
      //       behavior: 'smooth',
      //       block: 'start'
      //     })
      //   } else {
      //     console.log('is not')
      //   }
      // })
}
scrollFunc()