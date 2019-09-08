import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { apodReducer } from './apod.reducer';
import { ApodComponent } from './apod.component';
import { ApodRoutingModule } from './apod-routing.module';

@NgModule({
  declarations: [
    ApodComponent
  ],
  imports: [
    SharedModule,
    ApodRoutingModule,
    StoreModule.forFeature('apod', apodReducer)
  ],
  exports: []
})
export class ApodModule {}