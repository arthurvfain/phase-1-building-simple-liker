// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.querySelector('#modal').classList.add('hidden')

function startUp()
{
  //document.querySelector('#modal').hidden = true;
  //document.querySelector('#modal').classList.add('hidden')
  let likes = document.querySelectorAll('.like-glyph')
  //console.log(likes)
  //likes.forEach(element => element.addEventListener('click', clickCommand))
  //likes.forEach(element => element.addEventListener('click',(e) => console.log(e.target.parentElement.parentElement.parentElement.parentElement.id)))
  //likes.forEach(element => element.addEventListener('click',(e) => clickCommand(e.target.parentElement.parentElement.parentElement.parentElement.id)))
  likes.forEach(element => element.addEventListener('click',(e) => clickCommand(e.target)))
}
function clickCommand(id)
{
  let user = id
  //let likeStatus = document.querySelector('.like-glyph').textContent
  mimicServerCall().then(changeOfHeart(user)).catch(errorHandle)
  
  // //console.log(likeStatus)
  // if (likeStatus === EMPTY_HEART)
  // {
  //   //console.log('omg')
  //   mimicServerCall().then(changeOfHeart(user)).catch(errorHandle)
    
  // }
  // else if (likeStatus === FULL_HEART)
  // {
  //   mimicServerCall().then(resp => console.log(resp)).catch(errorHandle)
  // }
}
function changeOfHeart(idNumber)
{
  //console.log('lol', idNumber.textContent)
  let heart = idNumber.textContent
  //console.log(heart)
  if (heart === EMPTY_HEART)
  {
    idNumber.textContent = FULL_HEART
    idNumber.classList.add('activated-heart')
  }
  else if (heart ===FULL_HEART)
  {
    idNumber.textContent = EMPTY_HEART
    idNumber.classList.remove('activated-heart')
  }
}
function errorHandle()
{
  console.error('error!')
  showError()
  setTimeout(hideError, 1000)
}
function hideError()
{
  //document.querySelector('#modal').hidden = true;
  document.querySelector('#modal').classList.add('hidden')
}
function showError()
{
  //document.querySelector('#modal').hidden = false;
  document.querySelector('#modal').classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', startUp);
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
