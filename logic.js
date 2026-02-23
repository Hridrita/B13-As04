const interviewButtons = document.querySelectorAll('.interview-btn');
const rejectedButtons = document.querySelectorAll('.rejected-btn');

//get variables to hide by dafault img and para in interview section
const imgIcon = document.getElementById("img");
const noJob = document.getElementById("no-job");
const para = document.getElementById("para");

//get variables to hide by dafault img and para in rejected section
const imgIconR = document.getElementById("img-r");
const noJobR = document.getElementById("no-job-r");
const paraR = document.getElementById("para-r");



interviewButtons.forEach(button => {
    button.addEventListener('click', function() {
        //1. sob gula card er not applied button k access krbo
        const card = this.parentElement; 
        const appliedBtn = card.querySelector('.applied-btn');

        //
        const cardCopy = card.cloneNode(true);

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

        //to get interview cards in interview section

        const interviewContainer = document.getElementById('interview-section');
        interviewContainer.classList.remove('items-center', 'text-center');
        interviewContainer.classList.add('items-stretch', 'gap-3');
        interviewContainer.appendChild(cardCopy);
    

        imgIcon.classList.add("hidden");
        noJob.classList.add("hidden");
        para.classList.add("hidden");
        

        
    });
});

rejectedButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const appliedBtn  = card.querySelector('.applied-btn');
        
        appliedBtn.innerText = "REJECTED";

        const cardCopy = card.cloneNode(true);

        
        appliedBtn.classList.remove('btn-primary', 'text-[#002c5cFF]', 'bg-green-500', 'btn-success');
        
        
        appliedBtn.classList.add('btn-error', 'text-white', 'bg-red-500');

        const totalRejected = document.getElementById("rejected-number");
        const totalRejectedNumber = parseInt(totalRejected.innerText);
        totalRejected.innerText = totalRejectedNumber + 1;

        const rejectedContainer = document.getElementById('rejected-section');
        rejectedContainer.classList.remove('items-center', 'text-center');
        rejectedContainer.classList.add('items-stretch', 'gap-3');
        rejectedContainer.appendChild(cardCopy);
    

        imgIconR.classList.add("hidden");
        noJobR.classList.add("hidden");
        paraR.classList.add("hidden");
    });
});


function showOnly(id){
    const jobCards = document.getElementById("job-cards");
     const getInterview = document.getElementById("interview-section");
     const getRejected = document.getElementById("rejected-section");
     
     jobCards.classList.add("hidden");
     getInterview.classList.add("hidden");
     getRejected.classList.add("hidden");
     

     //id wala element ta k show koro
     const selected = document.getElementById(id);
     selected.classList.remove("hidden");

     
}


