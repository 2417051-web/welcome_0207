const galleryImages = document.querySelectorAll(".gallery-card img");


galleryImages.forEach(function (image) {


    image.addEventListener("click", function () {


        const popup = document.createElement("div");


        popup.className = "image-popup";


        popup.innerHTML = `

            <span class="close-popup">&times;</span>

            <img src="${image.src}">

        `;


        document.body.appendChild(popup);


        popup.querySelector(".close-popup").onclick = function () {

            popup.remove();

        };


    });

});
