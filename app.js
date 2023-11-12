const searchBtn = document.getElementById("search-btn");

searchBtn.onclick = () => {
   
    fetch("superheroes.php")
        .then(res => res.text()) 
        .then(html => {
            alert(html)
        })
        .catch(console.error);
};
