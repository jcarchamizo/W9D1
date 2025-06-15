    // Lista inicial de pasajeros
    let pasajeros = [
        "Juan", "Lucía", "Pedro", "María", "Andrés", "Valentina",
        "Carlos", "Marta", "Sofía", "Javier", "Raquel", "Tomás"
      ];
  
      function mostrarLista() {
        const lista = document.getElementById("listaPasajeros");
        lista.innerHTML = "";
        pasajeros.forEach((nombre, index) => {
          const item = document.createElement("li");
          item.textContent = nombre;
          lista.appendChild(item);
        });
        console.log("Pasajeros actuales:", pasajeros);
      }
  
      function bajaDosUltimos() {
        pasajeros.pop();
        pasajeros.pop();
        mostrarLista();
      }
  
      function subenDosNuevos() {
        const nombre1 = document.getElementById("nuevo1").value.trim();
        const nombre2 = document.getElementById("nuevo2").value.trim();
  
        if (nombre1) pasajeros.push(nombre1);
        if (nombre2) pasajeros.push(nombre2);
  
        document.getElementById("nuevo1").value = "";
        document.getElementById("nuevo2").value = "";
        mostrarLista();
      }
  
      function sustituirSegundo() {
        const reemplazo = document.getElementById("reemplazo").value.trim();
        if (reemplazo && pasajeros.length >= 2) {
          pasajeros[1] = reemplazo;
          document.getElementById("reemplazo").value = "";
          mostrarLista();
        }
      }
  
      function mostrarListaFinal() {
        mostrarLista();
        const mensaje = document.getElementById("mensajeFinal");
        mensaje.innerHTML = "🙏 Lista definitiva lista. ¡Buena suerte pasajeros!";
        console.log("Lista definitiva:", pasajeros);
      }
  
      // Mostrar lista inicial al cargar la página
      mostrarLista();