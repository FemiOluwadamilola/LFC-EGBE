const _qs = (x) => document.querySelector(x);

const _qsAll = (x) => document.querySelectorAll(x);

// script for modalBox
const modalBox = _qs('.modal-box'),
modalBtn = _qs('.Btn-mandate'),
ModalCloseBtn = _qs('form .close'),
humbugerContainer = _qs('.humbuger-container'),
menuToggler = _qs('.menu-toggler'),
menus = _qs('.menus'),
list = _qsAll('#nav-bar .menus li a');

modalBtn.addEventListener('click', (e) =>{
  modalBox.style.display = 'block';
});

ModalCloseBtn.addEventListener('click', (e) =>{
  modalBox.style.display = 'none';
})
// End of script for modalBox
// humbugerContainer.addEventListener('click',(e)=>{
//   list.forEach(menu => {
//     // menu.style.display = 'none';
//     if(menu.style.display = 'block'){
//        menu.style.display = 'none';
//     }else if(menu.style.display = 'none'){
//        menu.style.display = 'block';
//     }
//   })
// })

if(menuToggler.checked === true){
   console.log('worked !!!');
}