function goinbackbabyyyyy() {
    document.getElementById("SectieMAIN").style.display ="flex";
    document.getElementById("Sectie1").style.display ="none";
    document.getElementById("Sectie2").style.display ="none";
    document.getElementById("Sectie3").style.display ="none";
    document.getElementById("Sectie4").style.display ="none";
    document.getElementById("SectieMAINBACK").style.display = "none";
}

function showSectie1() {
    
    document.getElementById("SectieMAIN").style.display ="none";
    document.getElementById("Sectie1").style.display ="flex";
    document.getElementById("Sectie2").style.display ="none";
    document.getElementById("Sectie3").style.display ="none";
    document.getElementById("Sectie4").style.display ="none";
    document.getElementById("SectieMAINBACK").style.display = "flex";
}

function showSectie2() {
    
    document.getElementById("SectieMAIN").style.display ="none";
    document.getElementById("Sectie1").style.display = "none";
    document.getElementById("Sectie2").style.display ="flex";
    document.getElementById("Sectie3").style.display ="none";
    document.getElementById("Sectie4").style.display ="none";
    
    document.getElementById("SectieMAINBACK").style.display = "flex";
}

function showSectie3() {
    
    document.getElementById("SectieMAIN").style.display ="none";
    document.getElementById("Sectie1").style.display = "none";
    document.getElementById("Sectie2").style.display ="none";
    document.getElementById("Sectie3").style.display ="flex";
    document.getElementById("Sectie4").style.display ="none";
    
    document.getElementById("SectieMAINBACK").style.display = "flex";
}

function showSectie4() {
    
    document.getElementById("SectieMAIN").style.display ="none";
    document.getElementById("Sectie1").style.display = "none";
    document.getElementById("Sectie2").style.display ="none";
    document.getElementById("Sectie3").style.display ="none";
    document.getElementById("Sectie4").style.display ="flex";
    document.getElementById("SectieMAINBACK").style.display = "flex";
}

function showflashfront() {
    document.getElementById("FlashB").style.display ="none";
    document.getElementById("FlashF").style.display ="flex";
}

function showflashback() {
    document.getElementById("FlashF").style.display ="none";
    document.getElementById("FlashB").style.display ="flex";

}

document.getElementById("Sectie1Header").addEventListener("click", showSectie1);
document.getElementById("Sectie2Header").addEventListener("click", showSectie2);
document.getElementById("Sectie3Header").addEventListener("click", showSectie3);
document.getElementById("Sectie4Header").addEventListener("click", showSectie4);
document.getElementById("SectieMAINBACK").addEventListener("click", goinbackbabyyyyy);

document.getElementById("FlashF").addEventListener("click", showflashback);
document.getElementById("FlashB").addEventListener("click", showflashfront);