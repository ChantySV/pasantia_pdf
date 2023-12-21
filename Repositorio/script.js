const contenedor = document.getElementById('contenedor');
let resultadoDocumentos = '';

const cargaDocumentos = (datos) => {
  datos.forEach(dato => {
    // Elimina la parte del directorio 'uploads\\' de la ruta del archivo
    const nombreArchivo = dato.ruta_pdf.split('\\').pop();
    console.log(nombreArchivo);
    resultadoDocumentos +=
      `<li><a href="../uploads/${nombreArchivo}" target="_blank">${dato.titulo}</a></li>`;
  });
  contenedor.innerHTML = resultadoDocumentos;
};

axios.get('http://localhost:5000/documentos')
  .then(response => {
    cargaDocumentos(response.data);
    console.log(response.data);
  })
  .catch(err => console.log(err));
