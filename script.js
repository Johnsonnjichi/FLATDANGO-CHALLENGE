function renderMovies() {
fetch('http://localhost:3000/films/')
.then(res=>res.json())
.then(movies=>{
    console.log(movies)
    let li=''
    
    movies.forEach(mv => {
        li+=`<li>${mv.title}</li>`
    });
    document.getElementById('films').innerHTML=li
    console.log(li)
    let list=document.querySelectorAll('li')
    console.log(list)
    console.log(document.querySelectorAll('li'))
    list.forEach(item=>{
        item.addEventListener('click',()=>{
            console.log(item)
            renederSingleMovie(item.textContent,movies)
        })
    })
    
}
)}



renderMovies()
function renederSingleMovie(moviename,movies){
 let movie =movies.find(mv=>mv.title===moviename)
    document.getElementById('poster').src=movie.poster
    document.getElementById('title').textContent=movie.title
    document.getElementById('runtime').textContent=movie.runtime
    document.getElementById('showtime').textContent=movie.showtime
    document.getElementById('tickets').textContent=movie.capacity-movie.tickets_sold

}
buyTicket.addEventListener('click', event => {
    const filmEndpoint = `${filmsEndpoint}/${selectedFilmId}`;
    get(filmEndpoint).then(film => {
      if (film.tickets_sold < film.capacity) {
        const data = {
          tickets_sold: film.tickets_sold + 1
        };
        fetch(filmEndpoint, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(() => {
          updateFilmDetails({...film, tickets_sold: data.tickets_sold});
        });
      } else {
        alert('Sorry, this showing is sold out.');
      }
    });
  });































