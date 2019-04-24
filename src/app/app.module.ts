import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FilterSearchComponent } from "./filter-search/filter-search.component";
import { MovieContentComponent } from "./movie-content/movie-content.component";
import { DataRetrieve } from "./shared/dataretrieve.service";
import { MovieService } from "./movie.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterSearchComponent,
    MovieContentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  providers: [DataRetrieve, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
