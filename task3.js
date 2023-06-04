function form_Validation(){
    var nam = document.getElementById("fname");
    var mail =document.getElementById("fmail");
    var lin=document.getElementById("fwebsite");
    var msg =document.getElementById("fmsg");
     
    if(nam.value==""){
     nam.style.border="solid red";
     document.getElementById("txt").style.visibility="visible";
    }
    
     if(mail.value==""){
     mail.style.border="solid red";
     document.getElementById("txt2").style.visibility="visible";
     
    }
    
     if(lin.value==""){
     lin.style.border="solid red";
     document.getElementById("txt3").style.visibility="visible";
     
    }
    
     if(msg.value==""){
     msg.style.border="solid red";
     document.getElementById("txt4").style.visibility="visible";
     
    }
    
    return false;
    
 }