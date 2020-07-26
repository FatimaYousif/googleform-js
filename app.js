
function sign()
{
 let email=document.querySelector("#email").value;
 localStorage.setItem("textvalue",email);
 
 if(email === "fyousif30@gmail.com")
    {
        window.location.href = "two.html";
    }
    else
    {
        document.querySelector("#error").innerHTML="inavlid email.";
   
    }   
    return false; 
}
