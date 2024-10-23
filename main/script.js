//set as local
{

const nav = document.querySelector("nav")
const main = document.getElementById("main")
const hasilImgText = document.querySelectorAll(".hasil-img-text-wrapper")
const footer = document.querySelector("footer")
const form = document.getElementById("formulir")

function hasilImgTextHoverOpen(index)
{
    const element = hasilImgText.item(index)

    element.style.height = "100%"
    element.style.filter = "opacity(100%)"
}
function hasilImgTextHoverClose(index)
{
    const element = hasilImgText.item(index)

    element.style.height = "0"
    element.style.filter = "opacity(0)"
}

function hasilInit()
{
    const elements = document.querySelectorAll(".hasil-img-crop")
    for (let index = 0; index < elements.length; index++)
    {
        const element = elements.item(index)
        element.onmouseover = function()
        {
            hasilImgTextHoverOpen(index)
        }
        element.onmouseout = function()
        {
            hasilImgTextHoverClose(index)
        }
    }
}
hasilInit()

function CTA()
{
    form.style.display = "flex"
    form.style.justifyContent = "space-between"
    form.style.alignItems = "center"
    footer.style.filter = nav.style.filter = main.style.filter = "blur(3px)"
    main.style.pointerEvents = "none"
    document.body.style.overflow = "hidden"

    form.onanimationend = function(){}

    form.classList.remove("formulir-hilang")
    form.classList.add("formulir-muncul")
}

}