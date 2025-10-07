setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    const nextSlide = currentSlide.nextElementSibling;

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
},1000);