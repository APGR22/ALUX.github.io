//set as local
{

function Set2CenterWidth(element)
{
    const ParentLeft = element.parentElement.offsetLeft
    const ParentWidthLeftOutsideContent = element.parentElement.clientLeft
    const ParentLeftContent = ParentLeft + ParentWidthLeftOutsideContent
    const ParentWidthContent = element.parentElement.clientWidth
    const Width = element.offsetWidth

    const ResultLeftInContent = (ParentWidthContent/2) - (Width/2)

    const result = ParentLeftContent + ResultLeftInContent

    element.style.left = String(result) + "px"
}
function Set2CenterHeight(element)
{
    const ParentTop = element.parentElement.offsetTop
    const ParentHeightTopOutsideContent = element.parentElement.clientTop
    const ParentTopContent = ParentTop + ParentHeightTopOutsideContent
    const ParentHeightContent = element.parentElement.clientHeight
    const Height = element.offsetHeight

    const ResultTopInContent = (ParentHeightContent/2) - (Height/2)

    const result = ParentTopContent + ResultTopInContent

    element.style.top = String(result) + "px"
}

document.body.onresize = function()
{
    Set2CenterWidth(document.getElementById("description"))
    Set2CenterHeight(document.getElementById("description"))
}
functionList.push(document.body.onresize) //terapkan perubahan pertama kali

}