import { Component, OnInit } from '@angular/core';
import { Stats } from './stats.model';
import { WelcomeService } from './welcome.service';
import { Store } from '@ngrx/store';
import * as fromWelcome from './welcome.reducer';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  socket: any;
  stats: Stats;
  constructor(private welcome: WelcomeService, private store: Store<fromWelcome.State>) { }

  ngOnInit() {
    this.store.select(fromWelcome.getStats).subscribe((data: Stats) => {
      this.stats = data;
    });
    if(this.stats.near_earth_object_count){
      return;
    }else{
      this.welcome.fetchStats();
    }

  }

}
