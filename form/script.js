//set as local
{

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
const main = document.getElementById("main")
const footer = document.querySelector("footer")
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
        footer.style.filter = nav.style.filter = main.style.filter = "none"
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

}