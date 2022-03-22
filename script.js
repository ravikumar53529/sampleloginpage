

function  myFun(){
   
    var un=document.forms["myform"]["uname"].value;
    var phn=document.forms["myform"]["pass"].value;
    if(un=="ravikumar" && phn=="9441153529")
    {
        
        
        window.location.href="homepage.html";
        
    
    }
    else{
        alert("Username and Phone number Doesn't match");
    }
}

   
function myReg(){
    let regname=document.forms["formreg"]["regname"].value;
    window.localStorage.setItem("username",regname);
    let storedusername=localStorage.getItem("username");
    let regnumber=document.forms["formreg"]["regnum"].value;
    let storedphonenumber=localStorage.getItem("phone");
   
    window.localStorage.setItem("phone",regnumber);
      if (storedusername=="" && storedphonenumber==""){
          alert("Please Fill username and phone number");
      }
      else{
          alert("Registred successfully")
      }
}


function pdfUpload(){
    window.alert("pdfupload working");
    let file1=document.forms["pdfupload"]["pdf1"].value;
    window.localStorage.setItem("pdf1",file1);
    let storedpdf1=localStorage.getItem("pdf1");
     window.alert(storedpdf1);
    let file2=document.forms["pdfupload"]["pdf2"].value;
    window.localStorage.setItem("pdf2",file2);
    let storedpdf2=localStorage.getItem("pdf2");
    window.alert("data submitted");
    document.getElementById("showfile1").innerHTML=file1;
    document.getElementById("showfile2").innerHTML=file2;
    let mergedpdf=file1+file2;
    document.setItem("pdf3",mergedpdf);
    let storedmergedpdf=localStorage.getItem("pdf3");
    document.getElementById("down3").innerHTML=mergedpdf;
    

}
