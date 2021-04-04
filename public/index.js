function submitform(event) {
  event.preventDefault();
  const fileInput = document.getElementById('file');
  const uploadedFile = document.getElementById('uploadedFile');

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  fetch('/upload/exels', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const prefix = 'application/vnd.ms-excel';
      const xlData = 'data:'+prefix+';base64,' + data.file;
      console.log(xlData);
    });
}
