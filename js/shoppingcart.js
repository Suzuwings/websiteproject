window.addEventListener('load', function() {
    calcCart();
  
    document.getElementById("regSubmit").onclick = sessionTest;
    document.getElementById("fnBox").onblur = calcCart;
    document.getElementById("lnBox").onblur = calcCart; 
    document.getElementById("mailBox").onblur = calcCart;   
    document.getElementById("phoneBox").onblur = calcCart;     
    document.getElementById("selectFigure").onchange = calcCart; 

  
  });
  
  function sessionTest() {
    var confSession = document.getElementById("selectFigure");
    if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
    }
    else {
      confSession.setCustomValidity("");
    }
  }
  
  
  
  function calcCart() {
  // 1
    sessionStorage.confName = document.forms.regForm.elements.firstName.value + " " + document.forms.regForm.elements.lastName.value;
  
  // 2

  
    sessionStorage.confMail = document.forms.regForm.elements.email.value;
  
    sessionStorage.confPhone = document.forms.regForm.elements.phoneNumber.value;
  
    
  // 3
   
     
  // 4
     var selectedSession = document.getElementById("selectFigure").selectedIndex;
  
     if (selectedSession !== -1) 
     {
        sessionStorage.confSession = document.forms.regForm.elements.selectFigure[selectedSession].text;
  
        sessionStorage.confSessionCost = document.forms.regForm.elements.selectFigure[selectedSession].value;
     } 
     else 
     {
        sessionStorage.confSession = "";
        sessionStorage.confSessionCost = 0;
     }
  // 5
     
     
  // 6
     sessionStorage.confTotal = parseFloat(sessionStorage.confSessionCost);
     
  // 7
     writeSessionValues(); 
  }
  
  
  function writeSessionValues() {
    document.getElementById("regName").textContent = sessionStorage.confName;
  
  
    document.getElementById("regEmail").textContent = sessionStorage.confMail;
  
    document.getElementById("regPhone").textContent = sessionStorage.confPhone;
  
    document.getElementById("regFigure").textContent = sessionStorage.confSession;
  
    
    document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
  }