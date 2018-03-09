let pageDowns = document.querySelectorAll(".pageDown")
let pageUps = document.querySelectorAll(".pageUp")

for(let i = 0; i < pageUps.length; i++){
   pageUps[i].addEventListener('mouseup',function(e){
     let container = e.currentTarget.parentNode
     window.scrollTo(0,window.scrollY - window.innerHeight)
  })
 }
 for(let i = 0; i < pageDowns.length; i++){
    pageUps[i].addEventListener('mouseup',function(e){
      let container = e.currentTarget.parentNode
      window.scrollTo(0,window.scrollY - window.innerHeight)
   })
  }

// for(let i = 0; i < pageUps.length; i++){
//  pageUps[i].addEventListener('mouseup',function(e){
//    let container = e.currentTarget.parentNode
//    container.scrollTo(0,container.scrollTop - container.clientHeight)
//  })
// }

// for(let i = 0; i < pageDowns.length; i++){
//  pageDowns[i].addEventListener('mouseup',function(e){
//    let container = e.currentTarget.parentNode
//    container.scrollTo(0,container.scrollTop + container.clientHeight)
//  })
// }

window.addEventListener('scroll', function(e) {
  console.log(window.scrollY)


  if(window.scrollY >= 0 && window.scrollY < 810){
      document.body.classList.add('lisa')
  } else {
    document.body.classList.remove('lisa')
  }

  if(window.scrollY >= 810 && window.scrollY < 1610){
      document.body.classList.add('xerox')
  } else {
    document.body.classList.remove('xerox')
  }
  if(window.scrollY >= 1610 && window.scrollY < 2410){
      document.body.classList.add('win7')
  } else {
    document.body.classList.remove('win7')
  }

  if(window.scrollY >= 2410 && window.scrollY < 3210){
      document.body.classList.add('lion')
  } else {
    document.body.classList.remove('lion')
  }
  if(window.scrollY >= 3210 && window.scrollY < 4010){
      document.body.classList.add('win8')
  } else {
    document.body.classList.remove('win8')
  }
  if(window.scrollY >= 4010 && window.scrollY < 4810){
      document.body.classList.add('macosx')
  } else {
    document.body.classList.remove('macosx')
  }
  if(window.scrollY >= 4810 && window.scrollY < 6410){
      document.body.classList.add('win85')
  } else {
    document.body.classList.remove('win85')
  }
})
for(let i = 0; i < pageUps.length; i++){
   pageUps[i].addEventListener('mouseup',function(e){
     let container = e.currentTarget.parentNode
     window.scrollTo(0,window.scrollY - window.innerHeight)
  })
 }
 for(let i = 0; i < pageDowns.length; i++){
    pageUps[i].addEventListener('mouseup',function(e){
      let container = e.currentTarget.parentNode
      window.scrollTo(0,window.scrollY - window.innerHeight)
   })
  }
// for(let i = 0; i < pageUps.length; i++){
//   pageUps[i].addEventListener('mouseup',function(e){
//     let container = e.currentTarget.parentNode
//     window.scrollTo(0,window.scrollY - window.innerHeight)
//   })
// }
