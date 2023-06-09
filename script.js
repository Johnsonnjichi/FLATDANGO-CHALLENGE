function renderMovies() {
  fetch("http://localhost:3000/films/")
    .then((res) => res.json())
    .then((movies) => {
      console.log(movies);
      let li = "";

      movies.forEach((mv) => {
        li += `<li>${mv.title}</li>`;
      });
      document.getElementById("films").innerHTML = li;
      console.log(li);
      let list = document.querySelectorAll("li");
      console.log(list);
      console.log(document.querySelectorAll("li"));
      list.forEach((item) => {
        item.addEventListener("click", () => {
          console.log(item);
          renederSingleMovie(item.textContent, movies);
        });
      });
    });
}

renderMovies();
function renederSingleMovie(moviename, movies) {
  let movie = movies.find((mv) => mv.title === moviename);
  document.getElementById("poster").src = movie.poster;
  document.getElementById("title").textContent = movie.title;
  document.getElementById("runtime").textContent = movie.runtime;
  document.getElementById("showtime").textContent = movie.showtime;
  document.getElementById("tickets").textContent =
    movie.capacity - movie.tickets_sold;
  document.getElementById("buy-ticket");

  document.getElementById(
    "buy-ticket"
  ).innerHTML = `<button id="buy-button">Buy Ticket</button>`;
  document.getElementById("buy-button").addEventListener("click", () => {
    let ticketsLeft = movie.capacity - movie.tickets_sold;
    if (ticketsLeft > 0) {
      movie.tickets_sold += 1;
      document.getElementById("tickets").textContent = ticketsLeft - 1;
    } else {
      alert("Sorry, Tickets are sold out!");
    }
  });
}
