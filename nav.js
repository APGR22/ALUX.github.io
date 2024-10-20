//set as local
{

const nav = document.querySelector("nav")
const link_img = document.getElementById("link-img")
const search = document.getElementById("search")

window.onscroll = function()
{
    const kondisi = document.documentElement.scrollTop > 10

    if (kondisi)
    {
        nav.style.fontSize = "1.4vw"
        link_img.style.width = "37%"
    }
    else
    {
        nav.style.fontSize = "2vw"
        link_img.style.width = "46%"
    }
}

let SearchBarOpen = true;
function SearchBar()
{
    if (SearchBarOpen)
    {
        search.style.visibility = "visible"
        search.style.width = "30%"
        search.ontransitionend = function(){}
    }
    else
    {
        search.style.width = "0"
        search.ontransitionend = function()
        {
            search.style.visibility = "hidden"
        }
    }

    SearchBarOpen = !SearchBarOpen
}

}