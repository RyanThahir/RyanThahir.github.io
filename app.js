const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".content-image");
const opacity = document.querySelectorAll(".opacity");
const border = document.getElementsByClassName("border");
const bam1 = document.querySelector(".bambu1")
const bam2 = document.querySelector(".bambu2")
const peoplei = document.querySelector(".peoplekiri");
const peoplea= document.querySelector(".peoplekanan");
const vrs = document.querySelector(".latarvrs");
const bg = document.querySelector(".container-bg")

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = (scroll / (sectionY.top + section_height))+0.5;
    })
	
	let speedbam1 = bam1.dataset.speed;
	bam1.style.transform = `translateX(${scroll*speedbam1*(-1)}px`;
	let speedbam2 = bam2.dataset.speed;
	bam2.style.transform = `translateX(${scroll*speedbam2*(-1)}px`;
	let speedpa = peoplea.dataset.speed;
	peoplea.style.transform = `translateX(${scroll*speedpa*(-1)}px`;
	let speedpi = peoplei.dataset.speed;
	peoplei.style.transform = `translateX(${scroll*speedpi}px`;
    // let speedbg = bg.dataset.speed
    // bg.style.transform = `translateY(${scroll * speedbg}px)`

	
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 50}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`

    // border.style.width = `${scroll / (sectionY.top + section_height) * 50}%`


    for(let i=0;i<border.length;i++){
        let y = border[i].getBoundingClientRect().top
        y = y<=100?100:y
        let width = 80/y * 100
        width = width >=100?100:width
        border[i].style.width = `${width}%`
        console.log(border[i].getBoundingClientRect().top)
    }

})