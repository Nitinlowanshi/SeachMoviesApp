const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moviesbox = document.querySelector("#movie-box");
const getmovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    showmovies(data.results);
}
getmovies(APIURL);

const showmovies = (data) => {
    moviesbox.innerHTML="";
    data.forEach((item) => {
        const box = document.createElement('div');
        box.classList.add('.box');
        box.innerHTML = `
          <div class="box">
                <img src="${IMGPATH + item.IMGPATH}" alt="">
                <div id="hover">
                    <div id="tittle">
                        <h3>Title</h3>
                        <span>9.5</span>
                    </div>
                    <h3>Overview</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque cum placeat eaque sit aspernatur
                        accusantium iusto nesciunt quaerat eius voluptatum, exercitationem atque! Perferendis?</p>
                </div>
            </div>`
        moviesbox.appendChild(box)
    })
}
document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getmovies(SEARCHAPI + event.target.value)
        } else {
            getmovies(APIURL);
        }
    }
)
getmovies(APIURL);
