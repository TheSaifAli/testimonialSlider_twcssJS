const testimonialText =document.querySelector("#testimonialText");
const testimonialPic =document.querySelector("#testimonialPic")
const testimonialUser =document.querySelector("#testimonialUser")


let idx =0;

const updateTestimonial=async()=>{
 
    await fetch('testimonialData.json').then(res=>res.json()).then(data=>{
        setTimeout(()=>{
            if(idx==data.length)
            {
                idx=0;
            }
            testimonialText.textContent = data[idx].text;
            testimonialText.classList.toggle('animation');
            testimonialPic.src = data[idx].profile;
            testimonialPic.classList.toggle('animation');
            testimonialUser.textContent=data[idx].name;
            testimonialUser.classList.toggle('animation')
            updateTestimonial();
            idx++
        },4000)
     
    });
    
}
updateTestimonial();