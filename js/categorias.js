const response = await fetch("./genresDB.json");
const data = await response.json();
crearCategorias(Object.values(data));


function crearCategorias(lista) {
    var $fragment = document.createDocumentFragment();

    var $lista = document.getElementById("menu-categorias");

    for (const categoria of lista) {
        var $li = document.createElement("li");
        $li.classList.add("main-nav__submenu-item");

        var $link = document.createElement("a");
        $link.textContent = categoria;
        $link.setAttribute("href", "/categoria/" + categoria)
        $link.setAttribute("data-navigo", "")

        $li.appendChild($link);
        $fragment.appendChild($li);
    }

    $lista.appendChild($fragment);
}


















