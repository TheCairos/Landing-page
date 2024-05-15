const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')



    /*MENU SHOW*/

    /*Validar si la constante existe*/

    if(navToggle){
        navToggle.addEventListener('click',() => {
            navMenu.classList.add('show-menu')
        })
    }

    /*Menu hidden*/

    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }