// Ini Javascript

// Slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Auto-slide
let slideInterval = setInterval(function(){
    plusSlides(1);
}, 3000); 

// Message Form and Validation
const submitButton = document.getElementById('submitButton');
const resultName = document.getElementById('resultName');
const resultBirthdate = document.getElementById('resultBirthdate');
const resultGender = document.getElementById('resultGender');
const resultMessage = document.getElementById('resultMessage');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();

    if (!name || !birthdate || !gender || !message) {
        alert('Semua data harus diisi!');
        return;
    }

    resultName.textContent = name;
    resultBirthdate.textContent = birthdate;
    resultGender.textContent = gender.value;
    resultMessage.textContent = message;

    alert('Form berhasil disubmit!');

    resultName.textContent = name;
    resultBirthdate.textContent = birthdate;
    resultGender.textContent = gender;
    resultMessage.textContent = message;

    // Mengubah nama User ketika di submit
    document.getElementById('name').value = '';
    document.getElementById('birthdate').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('message').value = '';

    welcomeMessage.textContent = `Hi ${name}, Welcome to My Website`;

    form.reset();
});

// Hide and Show Profile, Portofolio, dan Message Us
document.getElementById('toggleProfile').addEventListener('click', function() {
    const profileSection = document.querySelector('#section-our-profile .profile-icon-container');
    if (profileSection.style.display === 'none') {
        profileSection.style.display = 'flex';
        this.textContent = 'Hide';
    } else {
        profileSection.style.display = 'none';
        this.textContent = 'Show';
    }
});

document.getElementById('togglePortofolio').addEventListener('click', function() {
    const portofolioSection = document.querySelector('#section-portofolio .my-portofolio');
    if (portofolioSection.style.display === 'none') {
        portofolioSection.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        portofolioSection.style.display = 'none';
        this.textContent = 'Show';
    }
});

document.getElementById('toggleMessageUs').addEventListener('click', function() {
    const messageForm = document.querySelector('#section-message-us .form-container');
    if (messageForm.style.display === 'none') {
        messageForm.style.display = 'flex';
        this.textContent = 'Hide';
    } else {
        messageForm.style.display = 'none';
        this.textContent = 'Show';
    }
});
