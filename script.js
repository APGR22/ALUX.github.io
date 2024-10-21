//set as local
{
    
includeHTML()
window.addEventListener("DOMContentLoaded", function(event)
{
    for (const func of functionList)
    {
        func()
    }
}
)

}