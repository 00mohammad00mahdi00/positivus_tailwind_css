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