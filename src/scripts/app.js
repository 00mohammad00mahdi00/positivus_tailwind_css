const $ = document

const menuMobile = $.getElementById('menuMobile')

const menuBar = $.getElementById("menuBar")

const menuBarLinetop = $.getElementById("menuBarLinetop")

const menuBarLineCenter = $.getElementById("menuBarLineCenter")

const menuBarLineBottom = $.getElementById("menuBarLineBottom")

let flagMenu = true

// this is cod for open menu mobile

menuBar.addEventListener("click", function(){
    if(flagMenu){
        menuMobile.classList.remove("-left-[250px]")
        menuMobile.classList.add("left-0")

        menuBarLineCenter.classList.remove("bg-secondary")
        menuBarLineCenter.classList.add("bg-transparent")

        menuBarLinetop.classList.remove("translate-y-2")
        menuBarLinetop.classList.add("rotate-45")

        menuBarLineBottom.classList.remove("-translate-y-2")
        menuBarLineBottom.classList.add("-rotate-45")

        flagMenu = false

    }else{
        menuMobile.classList.add("-left-[250px]")
        menuMobile.classList.remove("left-0")
       
        menuBarLineCenter.classList.remove("bg-transparent")
        menuBarLineCenter.classList.add("bg-secondary")

        menuBarLinetop.classList.add("translate-y-2")
        menuBarLinetop.classList.remove("rotate-45")

        menuBarLineBottom.classList.add("-translate-y-2")
        menuBarLineBottom.classList.remove("-rotate-45")

        flagMenu = true

    }
})

const workingBtn = $.querySelectorAll(".workingProcessBtn")
const workingContent = $.querySelectorAll(".workingProcessContent")
const workingCard = $.querySelectorAll(".working__process__card")
const workingImg = $.querySelectorAll(".workingProcessIcon")
let flagWorking = true
function clickOpenCardWorkinng (listBtn,listContent,listCard){
    for(let i = 0; i < listBtn.length; i++){
        listBtn[i].addEventListener("click", function(){
            if(flagWorking){
                // listContent[i].classList.add(`max-h-[${listContent[i].scrollHeight}px]`)
                
                listContent[i].setAttribute("style",`max-height: ${listContent[i].scrollHeight}px;  margin-top:20px; margin-bottom:30px `)
                listCard[i].setAttribute("style",`background-color:#B9FF66;`)
                workingImg[i].setAttribute("src","./images/index/svg/icon_substraction.svg")
                
                flagWorking = false
            }else{
                listContent[i].removeAttribute("style",`max-height: ${listContent[i].scrollHeight}px`)
                workingImg[i].setAttribute("src","./images/index/svg/icon_Addition.svg")
                listCard[i].setAttribute("style",`background-color::#191A23`)
                
                flagWorking = true
            }
        })
    }
}

clickOpenCardWorkinng(workingBtn,workingContent,workingCard)