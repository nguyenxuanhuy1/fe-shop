import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/all.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults: any[] = [];
  selectedPriceRange: string = "";
  selectedMinPrice!: number;
  selectedMaxPrice!: number;

  @Output() searchResultsChange = new EventEmitter<any[]>();

  constructor(private router: Router, private service: ServiceService,) { }

  handlePriceRangeSelection(priceRange: string) {
    if (priceRange === "0-50000") {
      this.selectedMinPrice = 0;
      this.selectedMaxPrice = 50000;
    } else if (priceRange === "50000-200000") {
      this.selectedMinPrice = 50000;
      this.selectedMaxPrice = 100000;
    } else if (priceRange === ">200000") {
      this.selectedMinPrice = 200000;
      this.selectedMaxPrice = 9999999;
    }
  }
  onDropdownChange() {
    this.handlePriceRangeSelection(this.selectedPriceRange);
  }

  search() {

    if (this.selectedMinPrice !== undefined && this.selectedMaxPrice !== undefined) {
      this.service.searchData(this.selectedMinPrice, this.selectedMaxPrice).subscribe((data) => {
        this.searchResults = data;
        this.searchResultsChange.emit(data);
      });

    } else {
      return;
    }
  }
}