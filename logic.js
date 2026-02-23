const interviewButtons = document.querySelectorAll('.interview-btn');
const rejectedButtons = document.querySelectorAll('.rejected-btn');

const imgIcon = document.getElementById("img");
const noJob = document.getElementById("no-job");
const para = document.getElementById("para");

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

        const totalInterview = document.getElementById("interview-number");
        totalInterview.innerText = parseInt(totalInterview.innerText) + 1;

        const cardCopy = card.cloneNode(true);
        const interviewContainer = document.getElementById('interview-section');
        const rejectedContainer = document.getElementById('rejected-section');
        
        
        interviewContainer.classList.remove('items-center', 'text-center', 'justify-center');
        interviewContainer.classList.add('items-stretch', 'gap-3');
        
        imgIcon.classList.add("hidden");
        noJob.classList.add("hidden");
        para.classList.add("hidden");

        const setupCardLogic = (currentCard) => {
            const copyRejectedBtn = currentCard.querySelector('.rejected-btn');
            const copyInterviewBtn = currentCard.querySelector('.interview-btn');

            copyRejectedBtn.onclick = function() {
                document.getElementById("interview-number").innerText = parseInt(document.getElementById("interview-number").innerText) - 1;
                document.getElementById("rejected-number").innerText = parseInt(document.getElementById("rejected-number").innerText) + 1;

                const copyAppliedBtn = currentCard.querySelector('.applied-btn');
                copyAppliedBtn.innerText = "REJECTED";
                copyAppliedBtn.classList.remove('btn-success', 'bg-green-500');
                copyAppliedBtn.classList.add('btn-error', 'bg-red-500');

                
                rejectedContainer.classList.remove('items-center', 'text-center', 'justify-center');
                rejectedContainer.classList.add('items-stretch', 'gap-3');

                rejectedContainer.appendChild(currentCard);
                updateEmptyStates();
            };

            copyInterviewBtn.onclick = function() {
                if(currentCard.parentElement.id === 'rejected-section'){
                    document.getElementById("rejected-number").innerText = parseInt(document.getElementById("rejected-number").innerText) - 1;
                    document.getElementById("interview-number").innerText = parseInt(document.getElementById("interview-number").innerText) + 1;

                    const copyAppliedBtn = currentCard.querySelector('.applied-btn');
                    copyAppliedBtn.innerText = "INTERVIEWED";
                    copyAppliedBtn.classList.remove('btn-error', 'bg-red-500');
                    copyAppliedBtn.classList.add('btn-success', 'bg-green-500');

                    interviewContainer.appendChild(currentCard);
                    updateEmptyStates();
                }
            };
        };

        setupCardLogic(cardCopy);
        interviewContainer.appendChild(cardCopy);
    });
});


rejectedButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const appliedBtn = card.querySelector('.applied-btn');
        
        appliedBtn.innerText = "REJECTED";
        appliedBtn.classList.remove('btn-primary', 'text-[#002c5cFF]', 'bg-green-500', 'btn-success');
        appliedBtn.classList.add('btn-error', 'text-white', 'bg-red-500');

        const cardCopy = card.cloneNode(true);
        const totalRejected = document.getElementById("rejected-number");
        totalRejected.innerText = parseInt(totalRejected.innerText) + 1;

        const rejectedContainer = document.getElementById('rejected-section');
        const interviewContainer = document.getElementById('interview-section');
        
        
        rejectedContainer.classList.remove('items-center', 'text-center', 'justify-center');
        rejectedContainer.classList.add('items-stretch', 'gap-3');

        imgIconR.classList.add("hidden");
        noJobR.classList.add("hidden");
        paraR.classList.add("hidden");

        const setupCardLogic = (currentCard) => {
            const copyInterviewBtn = currentCard.querySelector('.interview-btn');
            const copyRejectedBtn = currentCard.querySelector('.rejected-btn');

            copyInterviewBtn.onclick = function() {
                document.getElementById("rejected-number").innerText = parseInt(document.getElementById("rejected-number").innerText) - 1;
                document.getElementById("interview-number").innerText = parseInt(document.getElementById("interview-number").innerText) + 1;

                const copyAppliedBtn = currentCard.querySelector('.applied-btn');
                copyAppliedBtn.innerText = "INTERVIEWED";
                copyAppliedBtn.classList.remove('btn-error', 'bg-red-500');
                copyAppliedBtn.classList.add('btn-success', 'bg-green-500');

                
                interviewContainer.classList.remove('items-center', 'text-center', 'justify-center');
                interviewContainer.classList.add('items-stretch', 'gap-3');

                interviewContainer.appendChild(currentCard);
                updateEmptyStates();
            };

            copyRejectedBtn.onclick = function() {
                if(currentCard.parentElement.id === 'interview-section'){
                    document.getElementById("interview-number").innerText = parseInt(document.getElementById("interview-number").innerText) - 1;
                    document.getElementById("rejected-number").innerText = parseInt(document.getElementById("rejected-number").innerText) + 1;

                    const copyAppliedBtn = currentCard.querySelector('.applied-btn');
                    copyAppliedBtn.innerText = "REJECTED";
                    copyAppliedBtn.classList.remove('btn-success', 'bg-green-500');
                    copyAppliedBtn.classList.add('btn-error', 'bg-red-500');

                    rejectedContainer.appendChild(currentCard);
                    updateEmptyStates();
                }
            };
        };

        setupCardLogic(cardCopy);
        rejectedContainer.appendChild(cardCopy);
    });
});

function updateEmptyStates() {
    const intContainer = document.getElementById('interview-section');
    const rejContainer = document.getElementById('rejected-section');

    const isIntEmpty = intContainer.getElementsByClassName('relative').length === 0;
    imgIcon.classList.toggle("hidden", !isIntEmpty);
    noJob.classList.toggle("hidden", !isIntEmpty);
    para.classList.toggle("hidden", !isIntEmpty);
    
    if(isIntEmpty) {
        intContainer.classList.add('items-center', 'text-center', 'justify-center');
        intContainer.classList.remove('items-stretch');
    }

    const isRejEmpty = rejContainer.getElementsByClassName('relative').length === 0;
    imgIconR.classList.toggle("hidden", !isRejEmpty);
    noJobR.classList.toggle("hidden", !isRejEmpty);
    paraR.classList.toggle("hidden", !isRejEmpty);
    
    if(isRejEmpty) {
        rejContainer.classList.add('items-center', 'text-center', 'justify-center');
        rejContainer.classList.remove('items-stretch');
    }
}

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