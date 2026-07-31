/* =================================
   CompareWise Premium
   App JavaScript
================================= */


document.addEventListener("DOMContentLoaded", function(){


    // Load Offers

    const offerList = document.getElementById("offer-list");

    if(offerList && typeof CONFIG !== "undefined"){

        CONFIG.offers.forEach(function(offer){

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${offer.name}</h3>
                <p>Compare and find the best available option.</p>
                <a href="${offer.url}" class="offer-btn">
                    View Offer
                </a>
            `;

            offerList.appendChild(card);

        });

    }



    // Mobile Menu

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click", function(){

            navLinks.classList.toggle("active");

        });

    }



    // Footer Year

    const year = document.querySelector("#year");

    if(year){

        year.innerHTML = new Date().getFullYear();

    }



    // Animation

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


});
