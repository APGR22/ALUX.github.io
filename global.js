//get help from "https://stackoverflow.com/questions/36921947/read-a-server-side-file-using-javascript"
function readFile(file)
{
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", file, false)
    xmlhttp.send()

    if (xmlhttp.status == 200) return xmlhttp.responseText
    else return null
}

//get help from "https://www.w3schools.com/howto/howto_html_include.asp"
function includeHTML()
{
    const allElements = document.getElementsByTagName("*")
    for (const element of allElements)
    {
        const HTMLFileName = element.getAttribute("w3-include-html")
        if (HTMLFileName === null) continue

        const HTMLFileContent = readFile(HTMLFileName)
        if (HTMLFileContent === null) continue
        element.innerHTML = HTMLFileContent

        console.log("Include: " + HTMLFileName)
    }
}