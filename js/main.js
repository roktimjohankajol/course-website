
/***********************************

Testimonial Slider

************************** */

function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){ /* If the element exists*/
        carouselOne.addEventListener('slid.bs.carousel', function (){
            const activeItem = this.querySelector(".active"); 
            document.querySelector(".js-testimonial-img").src = 
            activeItem.getAttribute("data-js-testimonial-img");
        })
    }
}
testimonialSlider(); 

/*************************** Course preview video 
************************/ 

function coursePreviewVideo(){
    const coursePreviewModal = document.querySelector(".js-course-preview-modal");
    if(coursePreviewModal){
        coursePreviewModal.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-review-video").play();
            this.querySelector(".js-course-review-video").currentTime = 0;
        });
        coursePreviewModal.addEventListener("hide.bs.modal", function(){
            this.querySelector(".js-course-review-video").pause();
        });
    }
}
coursePreviewVideo();





/***********************************/


