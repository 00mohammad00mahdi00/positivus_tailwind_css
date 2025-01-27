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

const workingProcessCaer1 = $.getElementById("workingProcessCaer1")

const workingProcessBtn1 = $.getElementById("workingProcessBtn1")

const workingProcessContent1 =$.getElementById("workingProcessContent1")

const workingProcessIcon1 = $.getElementById("workingProcessIcon1")


const workingProcessCaer2 = $.getElementById("workingProcessCaer2")

const workingProcessBtn2 = $.getElementById("workingProcessBtn2")

const workingProcessContent2 =$.getElementById("workingProcessContent2")

const workingProcessIcon2 = $.getElementById("workingProcessIcon2")


const workingProcessCaer3 = $.getElementById("workingProcessCaer3")

const workingProcessBtn3 = $.getElementById("workingProcessBtn3")

const workingProcessContent3 =$.getElementById("workingProcessContent3")

const workingProcessIcon3 = $.getElementById("workingProcessIcon3")


const workingProcessCaer4 = $.getElementById("workingProcessCaer4")

const workingProcessBtn4 = $.getElementById("workingProcessBtn4")

const workingProcessContent4 =$.getElementById("workingProcessContent4")

const workingProcessIcon4 = $.getElementById("workingProcessIcon4")


const workingProcessCaer5 = $.getElementById("workingProcessCaer5")

const workingProcessBtn5 = $.getElementById("workingProcessBtn5")

const workingProcessContent5 =$.getElementById("workingProcessContent5")

const workingProcessIcon5 = $.getElementById("workingProcessIcon5")


const workingProcessCaer6 = $.getElementById("workingProcessCaer6")

const workingProcessBtn6 = $.getElementById("workingProcessBtn6")

const workingProcessContent6 =$.getElementById("workingProcessContent6")

const workingProcessIcon6 = $.getElementById("workingProcessIcon6")

function WorkingProcessOpen(card, btn, content, img){
    

    let flag = true
    btn.addEventListener("click", function(){
        if(flag){
            img.src = "./images/index/svg/icon_substraction.svg"

            card.classList.remove("bg-third")
            card.classList.add("bg-primary")

            content.classList.remove("hidden")
            content.classList.add("block")

            flag = false
        }else{
            img.src = "./images/index/svg/icon_Addition.svg"

            card.classList.add("bg-third")
            card.classList.remove("bg-primary")

            content.classList.remove("block")
            content.classList.add("hidden")

            flag = true
        }
    })
}


function WorkingProcessClose(card, btn, content, img){
    

    let flag = true
    btn.addEventListener("click", function(){
        if(flag){
            img.src = "./images/index/svg/icon_Addition.svg"

            card.classList.add("bg-third")
            card.classList.remove("bg-primary")

            content.classList.remove("block")
            content.classList.add("hidden")

            flag = false
        }else{
            
            img.src = "./images/index/svg/icon_substraction.svg"

            card.classList.remove("bg-third")
            card.classList.add("bg-primary")

            content.classList.remove("hidden")
            content.classList.add("block")

            flag = true
        }
    })
}

WorkingProcessClose(workingProcessCaer1,workingProcessBtn1,workingProcessContent1,workingProcessIcon1)
WorkingProcessOpen(workingProcessCaer2,workingProcessBtn2,workingProcessContent2,workingProcessIcon2)
WorkingProcessOpen(workingProcessCaer3,workingProcessBtn3,workingProcessContent3,workingProcessIcon3)
WorkingProcessOpen(workingProcessCaer4,workingProcessBtn4,workingProcessContent4,workingProcessIcon4)
WorkingProcessOpen(workingProcessCaer5,workingProcessBtn5,workingProcessContent5,workingProcessIcon5)
WorkingProcessOpen(workingProcessCaer6,workingProcessBtn6,workingProcessContent6,workingProcessIcon6)
