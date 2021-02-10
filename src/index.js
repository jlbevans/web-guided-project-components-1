const panelData = [
  {
    title: "Vigilante",
    content: "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne.",
  },
  {
    title: "The Mountain",
    content: "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
  },
  {
    title: "A World without Batman",
    content: "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital.",
  },
  {
    title: "Balance",
    content: "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die.",
  },
]
// we want to display some text
// we color the text
// the element h1
// const titles = ['Yeti', 'Abominable Snowman', 'Bigfoot'];

// function titleMaker (text, color) {
//   const title = document.createElement('h1')
//   title.textContent = text
//   title.style.color = color
//   return title
// }

// const title1 = titleMaker('Pizza', 'red')
// console.log(title1)
// document.body.appendChild(title1);

// titles.forEach(title => {
//   document.body.appendChild(titleMaker(title, 'red'))
// })



// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

// function makeImage(imgObj) {
//   const { imageURL } = imgObj
//   const image = document.createElement('img');
//   image.setAttribute('src', imageURL);
//   return image
// }
// function makeImage({ imageURL }) {
//   const image = document.createElement('img');
//   image.setAttribute('src', imageURL);
//   return image
// }


// imageData.forEach(imgObj => {
//   document.body.appendChild(makeImage(imgObj));
// })

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData'
import constants from './data/constants'
// const open = constants.open
// const close = constants.close
const { open, close } = constants


// TASK 2- Verify our imports using log statements
console.log() // log the panelData
console.log() // log the open arrow
console.log() // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector(".accordion");
// console.log(accordion)


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }/* what data does the panel need? */) {



  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement('div')
  const panelBar = document.createElement('div')
  const panelContent = document.createElement('div')
  const panelTitle = document.createElement('h3')
  const panelButtons = document.createElement('div')
  const openButton = document.createElement('button')
  const closeButton = document.createElement('button')


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */
 panel.appendChild(panelBar)
 panel.appendChild(panelContent)
 panelBar.appendChild(panelTitle)
 panelBar.appendChild(panelButtons)
 panelButtons.appendChild(openButton)
 panelButtons.appendChild(closeButton)


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  // panel.className = 'panel'
  // panelBar.className = "panel-bar"
  // panelContent.className = 'panel-content toggle-on'
  // panelButtons.className = 'panel-buttons'
  // openButton.className = 'panel-btn-open'
  // closeButton.className = 'panel-btn-close'
  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-buttons');
  openButton.classList.add('panel-btn-open');
  closeButton.classList.add('panel-btn-close', 'hide-btn');
  panelContent.classList.add('panel-content', 'toggle-on');

  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file
  panelTitle.textContent = title
  panelContent.textContent = content
  openButton.textContent = open
  closeButton.textContent = close

  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
  panelButtons.addEventListener('click', event => {
      openButton.classList.toggle('hide-btn');
      closeButton.classList.toggle('hide-btn');
      panelContent.classList.toggle('toggle-on');
  })

  // don't forget to return the panel!
  return panel
}


// accordion.appendChild(makePanel({title: 'title', content: 'content'}))


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.
// panelData.forEach(panelObj => {
//   accordion.appendChild(makePanel(panelObj))
// })

const panelElements = panelData.map(panelObj => {
  const panel = makePanel(panelObj)
  return panel
})
panelElements.forEach(panel => {
  accordion.appendChild(panel)
})

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
