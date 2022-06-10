class Movie {
    constructor(movie,genre,director,releaseYear,rating){
        this.movie = movie;
        this.genre = genre;
        this.director = director;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverView(){
        return `${this.movie}, a ${this.genre} film direct by ${this.director} was
        released in ${this.releaseYear}. It received a rating of ${this.rating}`;
    }
}

const MadMax = new Movie('MadMax','Action','juanito casas',1920,5);
console.log(MadMax)
console.log(MadMax.getOverView())
