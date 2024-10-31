/**
 * Add/remove elements
 */

const firstLink = document.getElementById('first-link');
firstLink.addEventListener('click', function(e) {
  e.preventDefault();

  const outerBox = document.createElement('div');
  outerBox.classList.add("outer-box");
  
  const innerBox1 = document.createElement('div');
  innerBox1.className = 'inner-box yellow';
  innerBox1.innerHTML = `
    <b>Inner box 1</b>.
    <br>Click to delete inner box 1
  `
  innerBox1.addEventListener('click', function(e) {
    // this.remove();
    console.log(e);
    e.target.remove();
  })



  const innerBox2 = document.createElement('div');
  innerBox2.className = 'inner-box sky-blue';
  innerBox2.innerHTML = `
    <b>Inner box 2</b>.<br>
    Click to delete the parent node of this box. Meaning delete the whole box :).			
  `
  innerBox2.addEventListener('click', function(e) {
    // this.parentNode.remove();
    e.target.parentNode.remove();
  })


  const innerBox3 = document.createElement('div');
  innerBox3.className = 'inner-box light-green';
  innerBox3.innerHTML = `–
    <b>Inner box 3</b>.<br>
    Click to delete the last inner box
  `
  innerBox3.addEventListener('click', function(e) {
    // this.parentNode.lastChild.remove();
    e.target.parentNode.lastChild.remove();
  })

  const innerBox4 = document.createElement('div');
  innerBox4.className = 'inner-box beige';
  innerBox4.innerHTML = `
    <b>Inner box 4</b>.<br>
    Is at the mercy of inner box 3, if clicked, inner box 4 will perish :(
  `
  
  outerBox.appendChild(innerBox1);
  outerBox.appendChild(innerBox2);
  outerBox.appendChild(innerBox3);
  outerBox.appendChild(innerBox4);
  console.log(outerBox);

  document.getElementById('first-section').appendChild(outerBox);

})



/**
 * Handle attributes
 */
const secondLink = document.getElementById('second-link');
secondLink.addEventListener('click', function(e) {
  e.preventDefault()

  const theCLickedSecondLink = e.target;
  console.log(theCLickedSecondLink.innerText)
  const list = document.querySelector('#second-section ul');
  console.log(list.children[0]);
  list.children[0].innerHTML = theCLickedSecondLink.innerText;
  list.children[1].innerHTML = theCLickedSecondLink.className;
  list.children[2].innerHTML = theCLickedSecondLink.title;
  list.children[3].innerHTML = theCLickedSecondLink.target;
})


const changeTextBtn = document.getElementById('change-link-text-btn');
changeTextBtn.addEventListener('click', function() {
  secondLink.innerText = document.getElementById('change-link-text-input').value
})


const changeClassBtn = document.getElementById('change-class-btn');
changeClassBtn.addEventListener('click', function() {
  const changeClassInput = document.getElementById('change-class-input');
  console.log(changeClassInput);
  console.log(changeClassInput.value);
  secondLink.className = document.getElementById('change-class-input').value
})

const changeTitleBtn = document.getElementById('change-title-btn');
changeTitleBtn.addEventListener('click', function() {
  secondLink.title = document.getElementById('change-title-input').value
})

const changeTargetBtn = document.getElementById('change-target-btn');
changeTargetBtn.addEventListener('click', function() {
  secondLink.target = document.getElementById('change-target-input').value
})