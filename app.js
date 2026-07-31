/* =================================
   CompareWise Premium
   App JavaScript
================================= */


// Mobile Menu Toggle

document.addEventListener("DOMContentLoaded", function(){

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click", function(){

            navLinks.classList.toggle("active");

        });

    }


    // Smooth Scroll

    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



    // Form Submit Message

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", function(){

            const btn = form.querySelector("button");

            if(btn){

                btn.innerHTML = "Submitting...";

            }

        });

    });



    // Current Year Footer

    const year = document.querySelector("#year");

    if(year){

        year.innerHTML = new Date().getFullYear();

    }


});



/* Simple Fade Animation */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

});


document.querySelectorAll(".card, .trust-box").forEach((item)=>{

    observer.observe(item);

});
