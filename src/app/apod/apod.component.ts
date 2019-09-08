import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApod from './apod.reducer';
import { Observable } from 'rxjs';
import { Apod } from './apod.model';
import { ApodService } from './apod.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit{
  apodData: Apod;
  socket: any;
  safeUrl;
  model: Date = new Date();
  maxDate: Date = new Date();
  isLoading$: Observable<boolean>;
  constructor(private sanitizer: DomSanitizer, private store: Store<fromApod.State>, private apod: ApodService) { }

  ngOnInit() {
    this.getFromStore();
    if(this.apodData.title){
      return;
    }else{
      this.apod.fetchApod(this.model.toLocaleDateString().split("T")[0]);
    }

  }

  getFromStore() {
    this.store.select(fromApod.getApod).subscribe((data: Apod) => {
      this.apodData = data;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.apodData['url']
      );
    });
  }
  onDateChanged(event): void {
    this.model = new Date(event.target.value);
    this.apod.fetchApod(this.model.toLocaleDateString().split("T")[0]);
  }
}