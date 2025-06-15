 // Paso 1: Crear array con al menos 5 animales
 let zoo = ["León", "Tigre", "Elefante", "Jirafa", "Hipopótamo"];
 console.log("Animales iniciales:", zoo);

 // Paso 2: Añadir dos al final
 zoo.push("Cebra", "Panda");
 console.log("Después de añadir dos al final:", zoo);

 // Paso 3: Quitar uno al final
 zoo.pop();
 console.log("Después de quitar uno al final:", zoo);

 // Paso 4: Cambiar el tercero por otro
 zoo[2] = "Rinoceronte";
 console.log("Después de cambiar el tercero por 'Rinoceronte':", zoo);

 // Paso 5: Imprimir total
 const totalSpan = document.getElementById("total");
 totalSpan.textContent = zoo.length;
 console.log("Total de animales:", zoo.length);

 // Paso 6: Mostrar los animales en una lista HTML
 const lista = document.getElementById("listaAnimales");

 for (let i = 0; i < zoo.length; i++) {
   const item = document.createElement("li");
   item.textContent = `${i + 1}. ${zoo[i]}`;
   lista.appendChild(item);
   console.log(`${i + 1}. ${zoo[i]}`);
 }