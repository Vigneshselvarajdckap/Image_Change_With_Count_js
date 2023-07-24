// assign images in array type
const image = 
[
    {
        id :1,
        img: "img1.jpg",
        h1:1
    },
    {
        id :2,
        img: "img2.jpg",
        h1:2
    },
    {
        id :3,
        img: "img3.jpg",
        h1:3
    },
    {
        id :4,
        img: "img4.jpg",
        h1:4
    },
    {
        id :5,
        img: "img5.jpg",
        h1:5
    },
    {
        id :6,
        img: "img6.jpg",
        h1:6
    }

]
// Target html elements
const imgs = document.querySelector('.img')
const h1 = document.querySelector('.h1')
const prebtn = document.querySelector('.btn-1')
const nxtbtn = document.querySelector('.btn-2')

// window is reloaded come default first image 
let mgii = -1
window.addEventListener('DOMContentLoaded',()=>{
    mgii++
    imgs.src = image[mgii].img
    h1.innerText = image[mgii].h1
    prebtn.style.visibility = 'hidden'
})

// next button click increse the next image 
let mgi = 0
nxtbtn.addEventListener('click',()=>{
    mgi ++
    console.log(mgi);
        imgs.src = image[mgi].img
        h1.innerText = image[mgi].h1
        prebtn.style.visibility = 'visible'
        if(h1.innerText == "6"){
            nxtbtn.style.visibility = 'hidden'
        }
})

// previus button click decrese the previus image 
prebtn.addEventListener('click',()=>{
    mgi --
    console.log(mgi);
        imgs.src = image[mgi].img
        h1.innerText = image[mgi].h1
        nxtbtn.style.visibility = 'visible'
        if(h1.innerText == "1"){
            prebtn.style.visibility = 'hidden'
        }
})