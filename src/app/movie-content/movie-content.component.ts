import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-content",
  templateUrl: "./movie-content.component.html",
  styleUrls: ["./movie-content.component.css"]
})
export class MovieContentComponent implements OnInit {
  movieDataComponent = [];
  oneMovie = {};

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  getMovieData() {
    this.movieDataComponent = this.movieService.getMovieList();
    console.log(this.movieDataComponent);
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
