import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((r: Response) => {console.log(r); });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe((r: Response) => {console.log(r.json()); });
  }
}
