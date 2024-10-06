const form = document.querySelector('.contact');
const formButton = document.querySelector('.form-btn');
const formInputs = document.querySelectorAll('.formInput');
const resumeBtn = document.getElementById('downloadResumeBtn');

formButton.addEventListener('click', setTimeout(()=>{
    formInputs.forEach(formInput=> formInput.value = '');
}, 100))

resumeBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'starter-code/assets/pdf/a4-Sonwabile-General.pdf'; // Replace with the actual path to your resume file
    link.download = 'Resume.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});