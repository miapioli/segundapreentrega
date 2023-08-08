function Manga(id, nombre, precio, cantidad, categoria) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  this.categoria = categoria;
}
//Array//
const mangas = [];

mangas.push(new Manga(1, "Oshi no ko", 800, 10, "Seinen"));
mangas.push(new Manga(2, "Viland saga", 800, 5, "Seinen"));
mangas.push(new Manga(3, "Neon Genesis Evangelion", 600, 8, "Mecha"));
mangas.push(new Manga(4, "Chainsaw man", 900, 3, "Shonen"));
mangas.push(new Manga(5, "JOJOS", 900, 6, "Shonen"));

mangas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(mangas); //Productos

const mangaDeseado = prompt("¿Qué producto deseas comprar?");

const mangaEncontrado = mangas.find((Manga) => Manga.nombre === mangaDeseado);

if (mangaEncontrado) {
  const costoTotal = mangaEncontrado.precio;

  alert(`El manga "${mangaEncontrado.nombre}" está listo para ser enviado a su hogar. 
  El costo total es $${costoTotal}. ¡Gracias por su compra!`);
} else {
  alert("Lo siento, el producto solicitado no se encuentra disponible.");
}
