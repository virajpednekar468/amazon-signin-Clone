document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userform'); // Correct ID
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;
  
      const userData = { name, password };
      console.log('User Data:', userData);
      form.reset();

      const csvContent = `name,password\n${name},${password}`;

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'UserData.csv'; // File name
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optionally reset the form
    this.reset();
    });
  });
  