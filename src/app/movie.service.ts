import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";

@Injectable()
export class MovieService {
  private movies: Movie[] = [];
  constructor() {}

  setMovieList(movies: Movie[]) {
    this.movies = movies;
    console.log(this.movies);
  }
  getMovieList() {
    // this.getData.getMoreMovieData();
    return this.movies;
  }
}
