import { NewsDataService } from './../../services/news-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropdownGroup!: FormGroup;
  countryName!: string;
  keyword!: string;
  filterText!: string;

  country: any = [
    {
      "id": 1,
      "country_name": "India",
      "country_code": "IN"
    },{
      "id": 2,
      "country_name": " France",
      "country_code": "FR"
    },
    {
      "id": 3,
      "country_name": "U.S.A",
      "country_code": "US"
    }, {
      "id": 4,
      "country_name": " Australia",
      "country_code": "AU"
    },
    {
      "id": 5,
      "country_name": "Canada",
      "country_code": "CA"
    },{
      "id": 6,
      "country_name": " Germany",
      "country_code": "GR"
    },{
      "id": 7,
      "country_name": "Russia",
      "country_code": "RU"
    },{
      "id": 8,
      "country_name": "Japan",
      "country_code": "JP"
    },{
      "id": 8,
      "country_name": "Italy",
      "country_code": "IT"
    },{
      "id": 9,
      "country_name": "New Zealand",
      "country_code": "NZ"
    },{
      "id": 9,
      "country_name": "Norway",
      "country_code": "NO"
    }
  ];

  constructor(private _fb: FormBuilder, private _newsData: NewsDataService) { }
  ngOnInit(): void {
    this.dropdownGroup = this._fb.group({
      dropdown: ['India']
    })
  }
  onChange(item: any) {
    this.countryName = item;
    this._newsData.setCountry(this.countryName);
  }
  fetchApiByKeyWord(searchParam: string) {
    this._newsData.setKeywordForApi(searchParam);
  }
  passFilterText() {
    this._newsData.setFilterText(this.filterText);
  }
}
