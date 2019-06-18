const navtextColor = document.querySelectorAll('.nav-link');
navtextColor.forEach((navlink) => {
    navlink.style.color = 'grey'
    navlink.addEventListener('mouseover', function() {
        navlink.style.color = 'blue';
    })
    navlink.addEventListener('mouseout', function() {
         navlink.style.color = 'grey';
    })

});

const images = document.querySelectorAll('img'); 
    images.forEach((img) => {
        img.addEventListener('mouseover', function() {
           img.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        })
        img.addEventListener('mouseout', function() {
            img.style.boxShadow = 'none';
         })
        });

        const text = document.querySelectorAll('h2'); 
        text.forEach((bigText) => {
            bigText.addEventListener('click', function() {
                bigText.style.fontSize = '5rem';
            })
            bigText.addEventListener('mouseout', function() {
                bigText.style.fontSize = '';
             })
            });
