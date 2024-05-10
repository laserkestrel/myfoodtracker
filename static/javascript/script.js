// Function to set default values for numeric fields if left empty
function setDefaultNumericValues() {
    const numericFields = ['calories', 'fat', 'protein', 'carbs'];
    numericFields.forEach(field => {
        let input = document.querySelector(`input[name="${field}"]`);
        if (input && input.value === '') {
            input.value = '0';
        }
    });
}

// Handling modal actions
function modal(){
    let openModal = document.querySelector('button[data-modal]');
    openModal.onclick = function(){
        let modal = openModal.getAttribute('data-modal');
        console.log('Modal opened:', modal); // Added console log for debugging
        document.getElementById(modal).style.display = 'flex';
    };

    let closeModal = document.querySelector('.close-modal');
    closeModal.onclick = function(){
        closeModal.closest(".modal").style.display = 'none';
    };
}

// Handling goals and progress display
function goals(){
    const progress = document.querySelector('.progress button');
    progress.onclick = function(){
        if (progress.innerHTML === "Close"){
            document.getElementById('p').style.display = "none";
            progress.innerHTML = "View Progress";
        } else {
            document.getElementById('p').style.display = "block";
            progress.innerHTML = "Close";
        }
    }
}

// Adding form submission handler
function addFormSubmissionHandler() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            setDefaultNumericValues();
        });
    }
}

// Initialize all functions after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    goals();
    modal();
    addFormSubmissionHandler(); // Ensure this is initialized
});
