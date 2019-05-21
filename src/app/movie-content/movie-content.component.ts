import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { OmdbconnectService } from "../services/omdbconnect.service";
import { Movie } from "../movie.model";

@Component({
  selector: "app-movie-content",
  templateUrl: "./movie-content.component.html",
  styleUrls: ["./movie-content.component.css"]
})
export class MovieContentComponent implements OnInit {
  movieDataComponent = [];
  oneMovie = {};
  batmanMovies = [];
  errorMsg;

  constructor(private movieService: MovieService, private omdbService: OmdbconnectService) {}

  ngOnInit() {
    // this.filterComp.currentMovie.subscribe(movie => {
    //   this.oneMovie = movie;
    // });
  }

  getMovieData() {
    this.movieDataComponent = this.movieService.getMovieList();
    console.log(this.movieDataComponent);
  }

  getTestBatmanMovies() {
    this.omdbService.getTestBatmanMovieData().subscribe(
      batmanMovies => {
        this.batmanMovies = batmanMovies.Search;
      },
      error => {
        this.errorMsg = <any>error;
      }
    );
    // console.log(this.batmanMovies);
  }

  selectMovie(movie: Movie) {
    // this.selectedMovie.emit(movie);
    console.log(movie);

    // this.selectedMovie.next(movie.Title);
  }

  // onGetMovieData() {
  //   this.movieService.getMovieData().subscribe(
  //     (movieData: any) => {
  //       // this.oneMovie = Object.assign({}, movieData);
  //       this.oneMovie = movieData;
  //       // console.log(this.movieDataComponent);
  //     },
  //     err => console.log(err)
  //   );
  //   console.log(this.oneMovie);
  // }

  // onGetMoreMovieData() {
  //   this.movieService.getMoreMovieData().subscribe(
  //     (movieData: any[]) => {
  //       this.movieDataComponent = movieData;
  //       console.log(this.movieDataComponent);
  //     },
  //     err => console.log(err)
  //   );
  // }
}
