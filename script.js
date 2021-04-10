
var changetheGorod = function (n) {
    n=Number(n);
    if(n==1){
        document.getElementById('gorod-name').innerText="Актау";
    } 
    else if(n==2){        
        document.getElementById('gorod-name').innerText="Атырау";
        
    }
    else if(n==3){        
        document.getElementById('gorod-name').innerText="Жезказган";
        
    }
    else if(n==4){        
        document.getElementById('gorod-name').innerText="Караганда";
        
    }
    
}
var firstActive = function (n) {
    n=Number(n);
    if(n==1){
        document.getElementById('first').style.display="block";
        document.getElementById('second').style.display="none";
        document.getElementById('third').style.display="none";

        document.getElementById('first2').style.display="block";
        document.getElementById('second2').style.display="none";
        document.getElementById('third2').style.display="none";

        document.getElementById('firstword').style.color="red";
        document.getElementById('secondword').style.color="black";
        document.getElementById('thirdword').style.color="black";

        document.getElementById('firstword2').style.color="red";
        document.getElementById('secondword2').style.color="black";
        document.getElementById('thirdword2').style.color="black";

        document.getElementById('aes-img2').style.display="flex";
        document.getElementById('ves-bar2').style.color="flex"
    } 
    else if(n==2){        
        document.getElementById('first').style.display="none";
        document.getElementById('second').style.display="block";
        document.getElementById('third').style.display="none";

        document.getElementById('first2').style.display="none";
        document.getElementById('second2').style.display="block";
        document.getElementById('third2').style.display="none";

        document.getElementById('firstword').style.color="black";
        document.getElementById('secondword').style.color="red";
        document.getElementById('thirdword').style.color="black"

        document.getElementById('firstword2').style.color="black";
        document.getElementById('secondword2').style.color="red";
        document.getElementById('thirdword2').style.color="black"
        
        document.getElementById('aes-img2').style.display="flex";
        document.getElementById('ves-bar2').style.color="flex"
    }
    else if(n==3){        
        document.getElementById('first').style.display="none";
        document.getElementById('second').style.display="none";
        document.getElementById('third').style.display="block";

        document.getElementById('first2').style.display="none";
        document.getElementById('second2').style.display="none";
        document.getElementById('third2').style.display="block";

        document.getElementById('firstword').style.color="black";
        document.getElementById('secondword').style.color="black";
        document.getElementById('thirdword').style.color="red"

        document.getElementById('firstword2').style.color="black";
        document.getElementById('secondword2').style.color="black";
        document.getElementById('thirdword2').style.color="red"

        document.getElementById('aes-img2').style.display="none";
        document.getElementById('ves-bar2').style.color="none"
        
    }
    
    
}