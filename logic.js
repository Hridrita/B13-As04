const interviewButtons = document.querySelectorAll('.interview-btn');
const rejectedButtons = document.querySelectorAll('.rejected-btn');




interviewButtons.forEach(button => {
    button.addEventListener('click', function() {
        //1. sob gula card er not applied button k access krbo
        const card = this.parentElement; 
        const appliedBtn = card.querySelector('.applied-btn');

        //2. button e interview lekha uthbe
        
        appliedBtn.innerText = "INTERVIEWED";

        //3. applied button ta remove krbo

        
        appliedBtn.classList.remove('btn-primary', 'text-[#002c5cFF]', 'bg-red-500', 'btn-error');

        //4. interview button er jnno bg color r text color dibo
        
        
        appliedBtn.classList.add('btn-success', 'text-white', 'bg-green-500');

        //5. interview er text get kore increment krbo

        const totalInterview = document.getElementById("interview-number");
        const totalInterviewNumber = parseInt(totalInterview.innerText);
        totalInterview.innerText = totalInterviewNumber + 1;

        
    });
});

rejectedButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const appliedBtn  = card.querySelector('.applied-btn');
        
        appliedBtn.innerText = "REJECTED";

        
        appliedBtn.classList.remove('btn-primary', 'text-[#002c5cFF]', 'bg-green-500', 'btn-success');
        
        
        appliedBtn.classList.add('btn-error', 'text-white', 'bg-red-500');

        const totalRejected = document.getElementById("rejected-number");
        const totalRejectedNumber = parseInt(totalRejected.innerText);
        totalRejected.innerText = totalRejectedNumber + 1;
    });
});



