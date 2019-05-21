import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MovieService } from "../movie.service";
import { DataRetrieve } from "../shared/dataretrieve.service";
import { OmdbconnectService } from "../services/omdbconnect.service";
import { Movie } from "../movie.model";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Component({
  selector: "app-filter-search",
  templateUrl: "./filter-search.component.html",
  styleUrls: ["./filter-search.component.css"]
})
export class FilterSearchComponent implements OnInit {
  oneMovie = {};
  batmanMovies = [];
  // @Output() selectedMovie = new EventEmitter<any>();

  // selectedMovie = new BehaviorSubject("movie");
  // currentMovie = this.selectedMovie.asObservable();

  constructor(
    private testBatmanMovies: OmdbconnectService,
    private movieService: MovieService,
    private movieData: DataRetrieve
  ) {}

  ngOnInit() {}

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

  onGetMovieData() {
    this.movieData.getMoreMovieData();
  }

  getTestBatmanMovies() {
    this.testBatmanMovies.getTestBatmanMovieData().subscribe(batmanMovies => {
      this.batmanMovies = batmanMovies.Search;
    });
  }

  selectMovie(movie: Movie) {
    // this.selectedMovie.emit(movie);
    console.log(movie);

    // this.selectedMovie.next(movie.Title);
  }
}
