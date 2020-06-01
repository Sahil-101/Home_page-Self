function greetings()
{
    var name=document.getElementById("Name").value;
    if(name==="")
    {
        name="Friend!";
        alert("Hello! " + name + "\n Have a Good Day");
    }
    else
    {
        alert("Hello! " + name + "\n Have a Good Day");
    }
}