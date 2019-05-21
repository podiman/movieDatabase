import { Routes } from "@angular/router";

import { MovieContentComponent } from "../app/movie-content/movie-content.component";
import { FilterSearchComponent } from "../app/filter-search/filter-search.component";

export const routes: Routes = [{ path: "movie/:id", component: MovieContentComponent }];
