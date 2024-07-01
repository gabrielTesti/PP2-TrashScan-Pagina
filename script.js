
document.getElementById('add-report').addEventListener('click', function() {
    const photoInput = document.getElementById('photo-input');
    const descriptionInput = document.getElementById('description-input');
    const reportsContainer = document.getElementById('reports-container');
    
    // trim() elimina los espacios en blanco al principio y al final del texto.
    if (photoInput.files.length > 0 && descriptionInput.value.trim() !== "") {
        const file = photoInput.files[0];
        const reader = new FileReader();
        //permite que las aplicaciones web lean ficheros almacenados en el cliente de forma asincrona
        

        reader.onload = function(event) {
            const reportElement = document.createElement('div');
            reportElement.className = 'report';
            
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result; // contiene los datos del archivo leído por el FileReader.
            
            const descElement = document.createElement('div');
            descElement.className = 'description';
            descElement.textContent = descriptionInput.value.trim();
            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', function() {
                reportsContainer.removeChild(reportElement);
            });
            
            reportElement.appendChild(imgElement);
            reportElement.appendChild(descElement);
            reportElement.appendChild(deleteButton);
            
            reportsContainer.appendChild(reportElement);
            
            //borrar inputs
            photoInput.value = '';
            descriptionInput.value = '';

            alert("Reporte enviado exitosamente")
        };
        
        reader.readAsDataURL(file); //convierte la imagen del archivo file en url de datos y luego usa esa url para mostrar la imagen en la interfaz
    } else {
        alert('Por favor, añadir foto y ubicación.');
    }
});
