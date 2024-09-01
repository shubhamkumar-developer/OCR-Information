document.getElementById('uploadForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('aadhaarImage', document.getElementById('aadhaarImage').files[0]);

  try {
      const response = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData
      });
      const data = await response.json();
      document.getElementById('result').innerHTML = `
          <h2>Extracted Information</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Aadhaar Number:</strong> ${data.aadhaarNumber}</p>
      `;
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('result').innerHTML = '<p>Error processing the image.</p>';
  }
});