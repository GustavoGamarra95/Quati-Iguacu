(function () {

    "use strict";

    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar"); // seleciona o elemento com id "header_navbar"
        var sticky = header_navbar.offsetTop; // pega a posição do elemento em relação ao topo da página
        var logo = document.querySelector('.navbar-brand img') // seleciona a imagem do logo

        if (window.pageYOffset > sticky) { // verifica se a posição do scroll é maior que a posição do elemento
            header_navbar.classList.add("sticky"); // adiciona a classe "sticky" ao elemento
            logo.src = "/Site Antigo/assets/img/logoOficial.png"; // altera a imagem do logo
        } else {
            header_navbar.classList.remove("sticky"); // remove a classe "sticky" do elemento
            logo.src = "/Site Antigo/assets/img/logoOficial.png"; // altera a imagem do logo
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".back-to-top"); // seleciona o elemento com a classe "back-to-top"
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { // verifica se a posição do scroll é maior que 50
            backToTo.style.display = "block"; // exibe o elemento
        } else {
            backToTo.style.display = "none"; // esconde o elemento
        }
    };

    // Get the navbar

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    })

    let navbarCollapse = document.querySelector(".navbar-collapse");//reconhece a barra de navbar

    document.addEventListener("click", function (e) { //adiciona um escutador de clique
        if (e.target !== navbarToggler && e.target.closest(".navbar-collapse") !== navbarCollapse) {//verifica se nao foi clicado na barra navbar e nao é botao de navbar
            if (navbarCollapse.classList.contains("show")) {//verifica se a barra navbar esta sendo exibida
                navbarCollapse.classList.remove('show')//se estiver, esconde (remove a classe show)
                navbarToggler.classList.remove('active')//e desativa o estado de navbar aberta do botao
            }
        }
    });
    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();




})();