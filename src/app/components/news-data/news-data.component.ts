import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { NewsDataService } from 'src/app/services/news-data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: ['./news-data.component.scss']
})
export class NewsDataComponent implements OnInit, OnDestroy {

  newsList: any = [];
  newsListByKeyWord: any = [];
  subscription$!: Subscription;
  countryName = 'IN';
  searchKeywordForApi!: string;
  filterText!: string;

  constructor(private news_Data: NewsDataService, private _spinner: NgxSpinnerService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchAllNews();
    this.news_Data.selectedCountry$.subscribe((value) => {
      this.countryName = value;
      this.fetchAllNews();
    });
    this.news_Data.selectedKeyword$.subscribe((value) => {
      if (!!value) {
        this.searchKeywordForApi = value;
        this.fetchAllNewsByKewords();
      }
    });
    this.news_Data.selectedFilterText$.subscribe((value) => {
      this.filterText = value;
    })
  }
  fetchAllNews() {
    this._spinner.show();
    setTimeout(() => {
      this.subscription$ = this.news_Data.getAllNewsByCountry(this.countryName).subscribe(({
        next: (res) => {
          this.newsList = res.articles;
          this._spinner.hide();
        },
        error: (err: Error) => {
          this._toastr.error("Something went wrong");
          this._spinner.hide();
        }
      }))
    }, 3000)
  }

  fetchAllNewsByKewords() {
    this._spinner.show();
    setTimeout(() => {
      this.subscription$ = this.news_Data.getAllNewsByKeyWord(this.searchKeywordForApi).subscribe(({
        next: (res) => {
          this.newsListByKeyWord = res.articles;
          this._spinner.hide();
        },
        error: (err: Error) => {
          this._toastr.error("Something went wrong");
          this._spinner.hide();
        }
      }))
    }, 3000)
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
