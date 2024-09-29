// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData()
{
    let data = {
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
        zipCode: document.getElementById("zip-code").value,
        status: document.getElementById("status").checked
    }
    return data
}

function isNumber(data)
{
    return !isNaN(data)
}

function checkboxIsChecked()
{
    return document.getElementById("status").checked
}

function validateFormData(obj)
{
    return !!obj && isNumber(obj.zipCode) && checkboxIsChecked()
}

function submit()
{
    let warn = document.getElementById("warning")
    let data = handleGetFormData()

    if (!validateFormData(data))
    {
        warn.innerHTML = "Periksa form anda sekali lagi"
    }
    else
    {
        warn.innerHTML = ""
    }
}
function FormToSubmit(event)
{
    event.preventDefault()
    submit()
}
document.getElementById("form-isian").addEventListener("submit", FormToSubmit)

//self

const nav = document.querySelector("nav")
const link_img = document.getElementById("link-img")
const search = document.getElementById("search")
const main = document.getElementById("main")
const form = document.getElementById("formulir")
const form_name = document.getElementById("name")
const form_city = document.getElementById("city")
const form_email = document.getElementById("email")
const form_zipCode = document.getElementById("zip-code")
const form_status = document.getElementById("status")
const form_warning = document.getElementById("warning")

function FormSetWidth(ElementIdName)
{
    const element = document.getElementById(ElementIdName)
    if (ElementIdName !== "submit-form")
    {
        element.style.width = "60%"
        element.style.fontSize = "100%"
    }
    element.style.fontWeight = "normal"
}

FormSetWidth("name")
FormSetWidth("city")
FormSetWidth("email")
FormSetWidth("zip-code")
FormSetWidth("submit-form")

function FormSetStyle(ElementIdName)
{
    const element = document.getElementById(ElementIdName)
    element.style.margin = "0 0 1.7% 0"
}

FormSetStyle("name")
FormSetStyle("city")
FormSetStyle("email")
FormSetStyle("zip-code")
FormSetStyle("check")
FormSetStyle("status")
FormSetStyle("submit-form")
FormSetStyle("warning")

document.getElementById("formulir").style.display = "none"
function FormClose()
{
    form.classList.remove("formulir-muncul")
    form.classList.add("formulir-hilang")
    form.onanimationend = function()
    {
        form.style.display = "none"
        nav.style.filter = main.style.filter = "none"
        main.style.pointerEvents = "auto"
        main.style.marginLeft = "0"
        main.style.marginTop = "6.48%"
        document.body.style.overflow = "visible"

        form_name.value = ""
        form_city.value = ""
        form_email.value = ""
        form_zipCode.value = ""
        form_warning.innerHTML = ""
        form_status.checked = false
    }
}

function LabelChecked(name)
{
    form_status.checked = !form_status.checked
}

function CTA()
{
    form.style.display = "flex"
    form.style.justifyContent = "space-between"
    form.style.alignItems = "center"
    nav.style.filter = main.style.filter = "blur(3px)"
    main.style.pointerEvents = "none"
    document.body.style.overflow = "hidden"

    form.onanimationend = function(){}

    form.classList.remove("formulir-hilang")
    form.classList.add("formulir-muncul")
}

window.onscroll = function()
{
    const kondisi = document.documentElement.scrollTop > 10
    const ukuran_normal = link_img.style.width === "46%"
    const ukuran_kecil = link_img.style.width === "37%"

    if (kondisi && ukuran_normal)
    {
        nav.classList.add("nav-onscroll")
        nav.classList.remove("nav-normal")

        link_img.classList.add("link-img-onscroll")
        link_img.classList.remove("link-img-normal")
        link_img.style.width = "37%"
    }
    else if (!kondisi && ukuran_kecil)
    {
        nav.classList.add("nav-normal")
        nav.classList.remove("nav-onscroll")

        link_img.classList.add("link-img-normal")
        link_img.classList.remove("link-img-onscroll")
        link_img.style.width = "46%"
    }
}
window.onscroll()

let SearchBarOpen = true;
function SearchBar()
{
    if (SearchBarOpen)
    {
        search.style.visibility = "visible"
        search.classList.add("search-bar-open")
        search.classList.remove("search-bar-close")
        search.onanimationend = function(){}
    }
    else
    {
        search.classList.add("search-bar-close")
        search.classList.remove("search-bar-open")
        search.onanimationend = function()
        {
            search.style.visibility = "hidden"
        }
    }

    SearchBarOpen = !SearchBarOpen
}
search.style.visibility = "hidden"

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

    // element.style.left = String(50 - (width_persen / 2)) + "%"
    // console.log(element.parentElement.clientWidth, document.body.clientWidth, element.parentElement.clientLeft)
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

    // let height = element.parentElement.clientHeight / 100 * value
    // element.style.top = String(height) + "px"
}

document.body.onresize = function()
{
    Set2CenterWidth(document.getElementById("description"))
    Set2CenterHeight(document.getElementById("description"))
}
document.body.onresize() //terapkan perubahan pertama kali