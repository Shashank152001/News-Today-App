import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(searchText,'--->')
    if(!items) return [];

    if(!searchText) return items;

    return this.searchItems(items, searchText.toLowerCase());
  }
private searchItems(items :any[], searchText: string): any[] {
     let results: any[]=[];
      items.forEach(it => {
        if (it.title.toLowerCase().includes(searchText)) {
            results.push(it);
        } else {
          let searchResults =  this.searchItems(it.items_containers, searchText);
          if (searchResults.length > 0) {
              results.push({
                title: it.title,
                items_containers: searchResults
              });
          }
        }
      });
      return results;
   }
}
