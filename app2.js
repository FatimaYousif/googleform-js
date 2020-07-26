  document.querySelector("#login_email").innerHTML=localStorage.getItem("textvalue");

function sign2()
{  

    let password=document.querySelector("#password").value;
 if(password === "123")
    {
        window.location.href = "three.html";
    }
    else
    {
        document.querySelector("#error").innerHTML="wrong password.";
    }  
    
}