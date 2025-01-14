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
//VOOR BRONNEN:

function closeFn() {
    document.getElementById(
        "overlay"
    ).style.display = "none";
    document.getElementById(
        "popupDialog"
    ).style.display = "none";
}

function popupFn() {
    document.getElementById(
        "overlay"
    ).style.display = "block";
    document.getElementById(
        "popupDialog"
    ).style.display = "block";
}

function show1AND2(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Wubbels,T., & Brekelmans, M. (2005). <br>Two decades of research on teacher-student relations in class. International Journal of Educational Research, 43, 6–24.</li><li>DenBrok,P.(2011). Reader. Interpersoonlijke ontwikkeling van de docent. Eindhoven School of Education</li></ul>"
    popupFn();
}

function show3(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Struyven, K., Gheyssens, E., Coubergs, C., De Doncker, H. & De Neve, D. (2019). <br>Binnenklasdifferentiatie in de praktijk. Ieders leer-kracht realiseren. Gent/Leuven: Acco.</li></ul>"
    popupFn();
}

function show5AND8(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Surma, T., Vanhoyweghen, K., Sluijsmans, D., Camp, G., Muijs, D., & Kirschner, P.A. (2019). Wijze lessen, 12 bouwstenen voor effectieve didactiek (e-book, creative commons). Meppel: Ten Brink Uitgevers.</li><li>Coppens, L., Decabooter, I., Dierick, S., Saenen, L., Struyven, K., & Vervoort, A. (z.d.). <br>Leren en Ontwikkeling: Pedagogiek en Didactiek voor Educatieve Masters. UHasselt.</li></ul>"
    popupFn();
}

function show5(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Surma, T., Vanhoyweghen, K., Sluijsmans, D., Camp, G., Muijs, D., & Kirschner, P.A. (2019). Wijze lessen, 12 bouwstenen voor effectieve didactiek (e-book, creative commons). Meppel: Ten Brink Uitgevers.</li></ul>"
    popupFn();
}

function show6(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Shute, V. J. (2008). Focus on Formative Feedback. Review of Educational Research, 78(1), 153-189. https://doi.org/10.3102/0034654307313795</li></ul>"
    popupFn();
}

function show7(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>ExpertisecentrumHogerOnderwijs:Positivevibration,yeah!Eenpositiefklasklimaat.(2020). RetrievedSeptember1,2022,<br>from https://medialibrary.uantwerpen.be/files/53980/a7573dd5-af21-4ca0-bc4c-501e1bfbce5e.pdf?_ga=2.50001124.311511410.1661766092-111128178.1647852995</li></ul>"
    popupFn();
}

function show8(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Coppens, L., Decabooter, I., Dierick, S., Saenen, L., Struyven, K., & Vervoort, A. (z.d.). <br>Leren en Ontwikkeling: Pedagogiek en Didactiek voor Educatieve Masters. UHasselt.</li></ul>"
    popupFn();
}

function show9(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li><li>Lesobservatie-instrument: Leuvense betrokkenheidschaal (LBS). (z.d.). PO-Raad. <br>https://www.poraad.nl/lesobservatie-instrument-leuvense-betrokkenheidschaal-lbs</li></li</ul>"
    popupFn();
}

function show10(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Leren als doel, leerlinggericht werken. (z.d.). [Presentatieslides]. UHasselt Blackboard.</li></ul>"
    popupFn();
}

function showtest(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Hier komt de bron te staan die gebruikt is.</li><li>Druk op de knop 'sluiten' om verder te lezen.</li></ul>"
    popupFn();
}

function show11(){
    document.getElementById("bronpopup").innerHTML = "<p>De volgende bron(nen) zijn gebruikt:</p> <ul><li>Six,L., Timmermans, B., De Bodt, M., & Van Looy, L.: Meer stem voor leraren. (n.d.). Retrieved<br>September 8, 2022, from https://www.stemcoach.be/sites/default/files/Meer%20stem%20leraren_0.pd</li></ul>"
    popupFn();
}

elements = document.getElementsByClassName("POP1AND2")
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show1AND2);
}
elements = document.getElementsByClassName("POP3");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show3);
}
elements = document.getElementsByClassName("POP5AND8");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show5AND8);
}
elements = document.getElementsByClassName("POP5");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show5);
}
elements = document.getElementsByClassName("POP6");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show6);
}
elements = document.getElementsByClassName("POP7");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show7);
}
elements = document.getElementsByClassName("POP8");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show8);
}
elements = document.getElementsByClassName("POP9");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show9);
}
elements = document.getElementsByClassName("POP10");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show10);
}
elements = document.getElementsByClassName("POP11");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", show11);
}
elements = document.getElementsByClassName("POPTEST");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", showtest);
}

function ShowVideo(){
    document.getElementById("VideoEdition").style.display ="grid";
    document.getElementById("TextEdition").style.display ="none";
}
function ShowText(){
    document.getElementById("VideoEdition").style.display ="none";
    document.getElementById("TextEdition").style.display ="grid";
}

document.getElementById("ShowTheText").addEventListener("click", ShowText);
document.getElementById("ShowTheVideo").addEventListener("click", ShowVideo);