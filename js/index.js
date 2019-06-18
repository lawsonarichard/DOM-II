// mouse over to change color of NAV
const navtextColor = document.querySelectorAll('.nav-link');
navtextColor.forEach((navlink) => {
    navlink.style.color = 'grey';
    navlink.addEventListener('mouseover', function() {
        navlink.style.color = 'blue';
        navlink.style.textDecoration = 'line-through';
    })
    navlink.addEventListener('mouseout', function() {
         navlink.style.color = 'grey';
         navlink.style.textDecoration = 'none';
    })

});

// add shadow to images on mouse over
const images = document.querySelectorAll('img'); 
    images.forEach((img) => {
        img.addEventListener('mouseover', function() {
           img.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        })
        img.addEventListener('mouseout', function() {
            img.style.boxShadow = 'none';
         })
        });

// click on header text, become large then become small on mouseout
const h2text = document.querySelectorAll('h2'); 
        h2text.forEach((bigText) => {
            bigText.addEventListener('click', function() {
                bigText.style.fontSize = '5rem';
            })
            bigText.addEventListener('mouseout', function() {
                bigText.style.fontSize = '';
             })
            }); 
            
// mouseover to change text color            
const h4text = document.querySelectorAll('h4'); 
    h4text.forEach((colorText) => {
        colorText.addEventListener('dblclick', function() {
            colorText.style.color = 'red';
            colorText.backgroundColor = 'grey';
            })
            colorText.addEventListener('mouseout', function() {
                colorText.style.color = 'black';
             })
            }); 
            
// click on button alert not yet functional

const btnAlert = document.querySelectorAll('.btn')
        btnAlert.forEach((btn) => {
            btn.addEventListener('click', function() {
                btn.style.background = 'red';
                alert("This function is currently not yet functional");
            })
        });

// footer click to change image 
