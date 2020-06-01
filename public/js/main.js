//navigation menu
const content = document.querySelectorAll('.tab-content');
const tab = document.querySelectorAll('.tabs');

function selectItems(e){
  //remove btn
  removebtn();
  //add btn
  this.classList.add('btn');
  //remove content
  removeshow(content);
  //ADD content
  const element = document.querySelector('#'+this.id+'-content');
  element.classList.add('show');
}

function removebtn(){
  tab.forEach(item => item.classList.remove('btn'));  
}

function removeshow(e){
  e.forEach(item => item.classList.remove('show'));  
}
tab.forEach(item => item.addEventListener('click', selectItems));

//handle
const imgcontent = document.querySelectorAll('.image');
const dat = document.querySelectorAll('.data');

function select(e){
  removeshow(dat);
  //add content
  const element = document.querySelector('#'+this.id+'-id');
  element.classList.add('show');
}

imgcontent.forEach(item => item.addEventListener('click',select));