const interviewButtons = document.querySelectorAll('.interview-btn');
const rejectedButtons = document.querySelectorAll('.rejected-btn');

// get variables to hide by default img and para in interview section
const imgIcon = document.getElementById("img");
const noJob = document.getElementById("no-job");
const para = document.getElementById("para");

// get variables to hide by default img and para in rejected section
const imgIconR = document.getElementById("img-r");
const noJobR = document.getElementById("no-job-r");
const paraR = document.getElementById("para-r");

interviewButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const card = this.parentElement; 
        const appliedBtn = card.querySelector('.applied-btn');

        appliedBtn.innerText = "INTERVIEWED";
        appliedBtn.classList.remove('btn-primary', 'text-[#002c5cFF]', 'bg-red-500', 'btn-error');
        appliedBtn.classList.add('btn-success', 'text-white', 'bg-green-500');

        // 2. interview count barabo
        const totalInterview = document.getElementById("interview-number");
        const totalInterviewNumber = parseInt(totalInterview.innerText);
        totalInterview.innerText = totalInterviewNumber + 1;

        // 3. copy card k interview section a pathabo
        const cardCopy = card.cloneNode(true);
        const interviewContainer = document.getElementById('interview-section');
        
        
        interviewContainer.classList.remove('items-center', 'text-center');
        interviewContainer.classList.add('items-stretch', 'gap-3');
        
        
        imgIcon.classList.add("hidden");
        noJob.classList.add("hidden");
        para.classList.add("hidden");

        const copyRejectedBtn = cardCopy.querySelector('.rejected-btn');
        copyRejectedBtn.addEventListener('click', function() {
            // increment count barbe
            const currentInterview = document.getElementById("interview-number");
            currentInterview.innerText = parseInt(currentInterview.innerText) - 1;

            // ২. rejected count barbe
            const totalRejected = document.getElementById("rejected-number");
            totalRejected.innerText = parseInt(totalRejected.innerText) + 1;

            cardCopy.remove();

            const copyAppliedBtn = cardCopy.querySelector('.applied-btn');
            copyAppliedBtn.innerText = "REJECTED";
            copyAppliedBtn.classList.remove('btn-success', 'bg-green-500');
            copyAppliedBtn.classList.add('btn-error', 'bg-red-500');

            const rejectedContainer = document.getElementById('rejected-section');
            rejectedContainer.classList.remove('items-center', 'text-center');
            rejectedContainer.classList.add('items-stretch', 'gap-3');
            rejectedContainer.appendChild(cardCopy);
            
            //by default jegulu chilo hide krbo
            imgIconR.classList.add("hidden");
            noJobR.classList.add("hidden");
            paraR.classList.add("hidden");
            
            
    if (interviewContainer.getElementsByClassName('relative').length === 0) {
    imgIcon.classList.remove("hidden");
    noJob.classList.remove("hidden");
    para.classList.remove("hidden");
    
    interviewContainer.classList.add('items-center', 'text-center', 'justify-center');
    interviewContainer.classList.remove('items-stretch');
     }
        });

        interviewContainer.appendChild(cardCopy);
    });
});

rejectedButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const appliedBtn  = card.querySelector('.applied-btn');
        
        appliedBtn.innerText = "REJECTED";
        appliedBtn.classList.remove('btn-primary', 'text-[#002c5cFF]', 'bg-green-500', 'btn-success');
        appliedBtn.classList.add('btn-error', 'text-white', 'bg-red-500');

        const cardCopy = card.cloneNode(true);

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
    
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}

