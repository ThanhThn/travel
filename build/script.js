const infor = [
    {
        star: 5,
        introl: "“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”",
        name: "Edward Newgate",
        local:"Founder Circle",
        img:"../img/profile.png",
    },
    {
        star: 2,
        introl: "“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”",
        name: "Megan Ruth",
        local:"Founder Circle",
        img:"../img/profile2.png",
    },
    {
        star: 3,
        introl: "“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”",
        name: "George Dagerotip",
        local:"Founder Circle",
        img:"../img/profile3.png",
    },
    {
        star: 4,
        introl: "“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”",
        name: "Zhanna Rinatova",
        local:"Founder Circle",
        img:"../img/profile4.png",
    }
]
var rate = document.querySelectorAll(".fa-star")
const content = document.getElementById('content');
const change = document.getElementById('change');
const btnL = document.getElementById('btn-left');
const btnR = document.getElementById('btn-right');
var count = 0;
function AddElement(nameElement, classElement = "", content = "", typeContent = ""){
    let newElement = document.createElement(nameElement);
    let classElementList = classElement.split(" ");
    classElementList.forEach(element => {
        if(element != ""){
            newElement.classList.add(element);
        }
    });
    if(typeContent == ""){
        newElement.textContent = content;
    }else{
        newElement.setAttribute(typeContent, content);
    }
    return newElement;
}
function ChangeContent(i){
    rate.forEach(e=>{
        e.classList.remove('fa-solid','star');
        e.classList.add('fa-regular');
    })
    for(let j = 0;j < infor[i].star; j++){
      rate[j].classList.remove('fa-regular');
      rate[j].classList.add('fa-solid','star');
    }
    content.appendChild(AddElement("p", " my-4", infor[i].introl));
    let newBlock = AddElement("div","my-8");
        content.appendChild(newBlock);
    newBlock.appendChild(AddElement("h6","font-bolder", infor[i].name));
    newBlock.appendChild(AddElement("p","my-2 md:my-0", infor[i].local));
    change.insertBefore(AddElement("img","rounded-lg w-3/4 md:w-fit", infor[i].img, "src"), change.firstChild);
        
}
function ChangeLimit(i){
    if(count <= 0){
        btnL.classList.remove('border-black');
        btnL.classList.add('btn');
    }else if(count > 0 && count < infor.length-1){ 
        btnL.classList.remove("btn");
        btnL.classList.add('border-black');
        btnR.classList.remove("btn");
        btnR.classList.add('border-black');
    }else{
        btnR.classList.remove('border-black');
        btnR.classList.add('btn');
    }
}
ChangeLimit(0);
ChangeContent(0);

btnL.addEventListener('click',()=>{
    count--;
    ChangeLimit(count);
    if(count < 0){
        count = 0;
    }
    else{
        content.innerHTML = '';
        change.removeChild(change.firstChild);
        ChangeContent(count);
    }
}
);
btnR.addEventListener('click',()=>{
    count++;
    ChangeLimit(count);
    if(count == infor.length){
        count = infor.length-1;
    }
    else{
        content.innerHTML = '';
        change.removeChild(change.firstChild);
        ChangeContent(count);
    }
}
);

//Chuyển động trên điện thoại
const btnContainer = document.getElementById('btn-container');
let intervalId, i = 0;
function startInterval() {
    intervalId = setInterval(() => {
        if (window.innerWidth < 768 && btnContainer.classList.contains('invisible')) {
            if(i < infor.length){
                content.innerHTML = '';
                change.removeChild(change.firstChild);
                ChangeContent(i);
                i++;
                if(i == infor.length){
                    i = 0;
                }
            }    
        }
      }, 2000); 
  }
// Kiểm tra kích thước của trình duyệt khi load trang và cả khi thay đổi kích thước
window.addEventListener('DOMContentLoaded', () => {
  checkWindowSize();
});
window.addEventListener('resize', () => {
  checkWindowSize();
});

function checkWindowSize() {
  // Lấy kích thước của trình duyệt
  const windowWidth = window.innerWidth;
  // Kiểm tra điều kiện để bắt đầu hoặc dừng hàm setInterval
  if (windowWidth < 768 && btnContainer.classList.contains('invisible')) {
    startInterval();
  }
}
//Show menu 
const menu = document.querySelectorAll("#menu-btn i");
const nav = document.getElementById("nav");

menu.forEach(e => {
    e.addEventListener("click", ()=>{
        menu.forEach(e=>{
            e.classList.toggle("visible");
            e.classList.toggle("invisible");
            if(e.classList.contains("visible")){
                nav.classList.toggle("invisible");
                nav.classList.toggle("visible");
            }
        })
    })
})

$(function(){
    $(".select li").click(function(){
        console.log($(this).parent().siblings("p"))
        $(this).parent().parent().siblings("p").text($(this).text())
    })
})
