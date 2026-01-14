// Form submission
document.getElementById('memoryForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    try {
        // For now, just show success message
        // Later connect to backend
        alert('Thank you for sharing your memory! It will be reviewed before posting.');
        this.reset();
    } catch (error) {
        alert('Error submitting. Please try again.');
    }
});

// Gallery filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.dataset.type === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});