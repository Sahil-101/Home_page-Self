function greetings()
{
    var name=document.getElementById("Name").value;
    if(name==="")
    {
        name="Friend!";
        alert("Hello! " + name);
    }
    else
    {
        alert("Hello! " + name);
    }
}