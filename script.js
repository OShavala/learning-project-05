document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        hideSpinners();
    }, 5000);
});

function hideSpinners() {
    
    let spinner2 = document.getElementById('spinner2');
    let spinner3 = document.getElementById('spinner3');

    if (spinner2 && spinner3) {
        spinner2.style.display = 'none';
        spinner3.style.display = 'none';
    }
   
}



