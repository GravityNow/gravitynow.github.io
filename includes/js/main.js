document.addEventListener('DOMContentLoaded', () => {
  const joinButton = document.getElementById('joinBtn');

  if (joinButton) {
    joinButton.addEventListener('click', (event) => {
      // Prevents any unwanted default actions if embedded inside forms
      event.preventDefault(); 
      
      // Placeholder logic for application handler
      console.log('Join the Team button was clicked!');
      alert('Thank you for your interest! The application form will load shortly.');
    });
  }
});