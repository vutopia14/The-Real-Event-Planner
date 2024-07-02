var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevbtn").style.display = "none"; 
    } else {
        document.getElementById("prevbtn").style.display = "inline";  
    }
    x[n].style.display = "block";
    if (n == (x.length - 1)) {
        document.getElementById("nextbtn").innerHTML = "submit"; 
    } else {
        document.getElementById("nextbtn").innerHTML = "next";  
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}