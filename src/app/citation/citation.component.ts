import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.css']
})
export class CitationComponent {

  public citation: string;
  primaryColor: string;

  constructor(public dataService: DataService) {
    dataService.addUpdateListener(this);
  }

  public update(): void {
    this.citation = this.dataService.getCitation();
	this.dataService.updateCompleted();
    this.primaryColor = this.dataService.getPrimaryColor();
  }

}
