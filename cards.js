/**
 * [X]Crear tarjeta
 * [X]Crear secciones p/tarjeta
 * [X]Img
 * [X]Nombre, desc, edad, lista de algo
 * [X]Insertar en la tarjeta
 * [X]Mostrar dentro de div.container
 * [X]Crear funciones reutilizables
 * [X]Funciones para crear items
 * [X]Funciones para inyectar texto
 * [X]Funciones para renderizar
 * [X]Multiples usuarios
 **/

const CARDS_CONTAINER = document.querySelector("#card-container");
const USERS = [
    {
      id: 1,
      username: "booklover123",
      description: "Avid reader and coffee enthusiast.",
      age: 29,
      fav_books: {
        books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
      },
    },
    {
      id: 2,
      username: "literature_junkie",
      description: "Poetry lover and amateur writer.",
      age: 35,
      fav_books: {
        books: ["The Great Gatsby", "Invisible Man", "Beloved"],
      },
    },
  ];

//Crear secciones
function createElement() {
const cardObj = {
    name_section: document.createElement("h3"),
    desc_section: document.createElement("p"),
    age_section: document.createElement("p"),
    book_section: document.createElement("div"),
}   
return cardObj;
}

//Crear tarjeta
//Inyectamos info
function injectData(obj, user) {
    const bookList = user.fav_books.books.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });

    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.description;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
}

USERS.forEach((user) => {
    const cardData = createElement();
    injectData(cardData, user);
});
