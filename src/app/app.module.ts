import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsDataComponent } from './components/news-data/news-data.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsDataComponent,
    SearchfilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
