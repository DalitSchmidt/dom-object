var Movie = function(name, producer, year){
    this.name = name;
    this.producer = producer;
    this.year = year;
}

var movies = [];

movies.push(new Movie("Willy Wonka and the Chocolate Factory", "Mell Stuart", 1971));
movies.push(new Movie("Rock the Casbah", "Yariv Horovitz", 2012));
movies.push(new Movie("Ice Age", "Steve Martino And Mike Tormiih", 2002));
movies.push(new Movie("Billy Elliot", "Stephen Daldry", 2000));
movies.push(new Movie("The Devil Wears Prada", "David Frenkel", 2006));
movies.push(new Movie("The social network", "David Fincher", 2010));
movies.push(new Movie("Dangerous Dance", "Menachem Golan", 2007));
movies.push(new Movie("Footnote", "Jossef Sider", 2011));
movies.push(new Movie("Bufor", "Jossef Sider", 2007));
movies.push(new Movie("Ajami", "Yaron Shani And Scandar Copti", 2009));
movies.push(new Movie("Ajami", "Yaron Shani And Scandar Copti", 2009));
movies.push(new Movie("The hundred-year-old man who climbed out the window and disappeared", "Felix Hrngrn", 2013));
movies.push(new Movie("Beit Lehem", "Yuval Adler", 2013));
movies.push(new Movie("Shlager", "Assi Dayan", 1979));
movies.push(new Movie("Bananot", "Eitan Fux", 2013));
movies.push(new Movie("Peers", "Uri Zohar", 1973));
movies.push(new Movie("Ha'madrikh le'singles", "Christian Ditter", 2016));
movies.push(new Movie("Saba be'hafra'a", "Dan Meizer", 2016));
movies.push(new Movie("Titanic", "James Kameroon", 1997));
movies.push(new Movie("Mike and Dave Need Wedding Dates", "Jake Stzimnski", 2016));
movies.push(new Movie("Charlie and the Chocolate Factory", "Team Berton", 2005));

function getMovieName(target) {
    var tr = target.parentElement.parentElement;
    return tr.children[0].innerHTML;
}

function getIndexByName(nameOfMovie) {
    for (var i=0;i<movies.length;i++) {
        if (movies[i].name == nameOfMovie) {
            return i;
        }
    }
}

function removeElement(event) {
    event.target.parentElement.parentElement.remove();
    var nameOfMovieToRemove = getMovieName(event.target);
    var indexToRemoveFromTheMovieArray = getIndexByName(nameOfMovieToRemove);
    movies.splice(indexToRemoveFromTheMovieArray, 1);
}

function createElement(movie) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = movie.name;

    var td2 = document.createElement("td");
    td2.innerHTML = movie.producer;

    var td3 = document.createElement("td");
    td3.innerHTML = movie.year;

    var td4 = document.createElement("td");
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.onclick = removeElement;
    td4.appendChild(button);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    return tr;
}

function fillTable() {
    var table = document.getElementById("movieTable");

    for (var i=0;i<movies.length;i++) {
        var element = createElement(movies[i]);
        table.appendChild(element);
    }
}

function addItem() {
    var name = document.getElementById("nameInput").value;
    var producer = document.getElementById("producerInput").value;
    var year = document.getElementById("yearInput").value;
    var movieObj = new Movie(name, producer, year);
    movies.push(movieObj);
    var element = createElement(movieObj);
    var table = document.getElementById("movieTable");
    table.appendChild(element);
    document.getElementById("nameInput").value = "";
    document.getElementById("producerInput").value = "";
    document.getElementById("yearInput").value = "";
}

// function Movies (name, year, director) {
//     this.name = name;
//     this.year = year;
//     this.duration = director;
// }
//
// var Movie1 = new Movies ("Willy Wonka and the Chocolate Factory", 1971, "Mell Stuart");
// var Movie2 = new Movies ("Rock the Casbah", 2012, "Yariv Horovitz");
// var Movie3 = new Movies ("Ice Age", 2002, "Steve Martino And Mike Tormiih");
// var Movie4 = new Movies ("Billy Elliot", 2000, "Stephen Daldry");
// var Movie5 = new Movies ("The Devil Wears Prada", 2006, "David Frenkel");
// var Movie6 = new Movies ("The social network", 2010, "David Fincher");
// var Movie7 = new Movies ("Dangerous Dance", 2007, "Menachem Golan");
// var Movie8 = new Movies ("Footnote", 2011, "Jossef Sider");
// var Movie9 = new Movies ("Bufor", 2007, "Jossef Sider");
// var Movie10 = new Movies ("Ajami", 2009, "Yaron Shani And Scandar Copti");
// var Movie11 = new Movies ("The hundred-year-old man who climbed out the window and disappeared", 2013, "Felix Hrngrn");
// var Movie12 = new Movies ("Beit Lehem", 2013, "Yuval Adler");
// var Movie13 = new Movies ("Shlager", 1979, "Assi Dayan");
// var Movie14 = new Movies ("Bananot", 2013, "Eitan Fux");
// var Movie15 = new Movies ("Peers", 1973, "Uri Zohar");
// var Movie16 = new Movies ("Ha'madrikh le'singles", 2016, "Christian Ditter");
// var Movie17 = new Movies ("Saba be'hafra'a", 2016, "Dan Meizer");
// var Movie18 = new Movies ("Titanic", 1997, "James Kameroon");
// var Movie19 = new Movies ("Mike and Dave Need Wedding Dates", 2016, "Jake Stzimnski");
// var Movie20 = new Movies ("Charlie and the Chocolate Factory", 2005, "Team Berton");
//
// var arrMovie = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7, Movie8, Movie9, Movie10, Movie11, Movie12, Movie13, Movie14, Movie15, Movie16, Movie17, Movie18, Movie19, Movie20];
//
// var table = document.getElementById("table");
//
// function addItem(){
//     var tr = document.createElement("tr");
//     var td1 = document.createElement("td");
//     var td2 = document.createElement("td");
//     var td3 = document.createElement("td");
//     var arrMovie = document.createElement("arrMovie");
//     var button = document.createElement("button");
//
//     button.onclick = function(){
//         tr.remove();
//     }
//
//     var valueOfInput = document.getElementById("inp1").value;
//     td1.innerHTML = valueOfInput;
//     var cb = document.createElement("input");
//
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.appendChild(tr);
//     document.getElementById("inp1").value = "";
//
//     console.log (arrMovie);
// }