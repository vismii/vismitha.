// Button click event listener
document.getElementById('nextPageBtn').addEventListener('click', () => {
    window.location.href ='index.html'; // Replace with your next page's URL
  });
  
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  