import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { DataRetrieve } from "../shared/dataretrieve.service";

@Component({
  selector: "app-filter-search",
  templateUrl: "./filter-search.component.html",
  styleUrls: ["./filter-search.component.css"]
})
export class FilterSearchComponent implements OnInit {
  oneMovie = {};

  constructor(
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
}
