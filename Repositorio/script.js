const contenedor = document.getElementById('contenedor');
let resultadoDocumentos = '';

const cargaDocumentos = (datos) => {
  datos.forEach(dato => {
    // Elimina la parte del directorio 'uploads\\' de la ruta del archivo
    const nombreArchivo = dato.ruta_pdf.split('\\').pop();
    console.log(nombreArchivo);
    resultadoDocumentos +=
      `<li><a href="../uploads/${nombreArchivo}" target="_blank" class="link">${dato.titulo}</a> </li>`;
  });
  contenedor.innerHTML = resultadoDocumentos;
};

axios.get('http://localhost:5000/documentos')
  .then(response => {
    cargaDocumentos(response.data);
    console.log(response.data);
  })
  .catch(err => console.log(err));



  // Suponiendo que tienes un formulario con los campos necesarios y un input para seleccionar un archivo

const form = document.querySelector('#Documento'); // Obtener referencia al formulario HTML

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevenir el comportamiento predeterminado de enviar el formulario

  const formData = new FormData(form); // Crear un objeto FormData para enviar los datos del formulario

  try {
    const response = await fetch('/ruta/del/servicio/post', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.error);
    }

    const data = await response.json();
    console.log('Respuesta del servidor:', data);
    // Realizar acciones adicionales con la respuesta del servidor si es necesario

  } catch (error) {
    console.error('Error al enviar la solicitud:', error.message);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
});
