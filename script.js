

function thirdsectionchanger(){
    document.addEventListener('DOMContentLoaded', () => {
        // Get all the buttons and content divs
        const btn1 = document.querySelector('.btn1');
        const btn2 = document.querySelector('.btn2');
        const btn3 = document.querySelector('.btn3');
    
        const content1 = document.querySelector('.content1');
        const content2 = document.querySelector('.content2');
        const content3 = document.querySelector('.content3');
    
        // Function to hide all content divs
        function hideAllContent() {
            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
        }
    
        // Add event listeners to each button
        btn1.addEventListener('click', () => {
            hideAllContent();
            content1.style.display = 'block'; // Show content1
        });
    
        btn2.addEventListener('click', () => {
            hideAllContent();
            content2.style.display = 'block'; // Show content2
        });
    
        btn3.addEventListener('click', () => {
            hideAllContent();
            content3.style.display = 'block'; // Show content3
        }); 
    
        // Initially hide all content except content1
        hideAllContent();
        content1.style.display = 'block';
    });

    
    

}
thirdsectionchanger();




