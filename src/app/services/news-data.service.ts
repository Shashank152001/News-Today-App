import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  private countrySelected$ = new BehaviorSubject<string>("IN");
  selectedCountry$ = this.countrySelected$.asObservable();

  private keyWordChoosen$ = new BehaviorSubject<string>("");
  selectedKeyword$ = this.keyWordChoosen$.asObservable();

  private filterText$ = new BehaviorSubject<string>("");
  selectedFilterText$ = this.filterText$.asObservable();

  constructor(private http: HttpClient) { }

  setCountry(country: string) {
    this.countrySelected$.next(country);
  }

  setKeywordForApi(searchParam: string) {
    this.keyWordChoosen$.next(searchParam);
  }

  setFilterText(text: string) {
    this.filterText$.next(text);
  }

  getAllNewsByCountry(country: string): Observable<any> {
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=4b2f38ed32184f2daa039e5c80d148b7`);
  }
  getAllNewsByKeyWord(keyword: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-12-22&sortBy=popularity&apiKey=4b2f38ed32184f2daa039e5c80d148b7`);
  }
}
