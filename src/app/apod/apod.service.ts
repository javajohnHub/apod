import { Injectable } from "@angular/core";
import { UIService } from "../shared/ui.service";
import * as UI from "../shared/ui.actions";
import * as fromApod from "./apod.reducer";
import * as ApodActions from "./apod.actions";
import { Store } from "@ngrx/store";
import { SocketService } from '../shared/socket.service';
import { Apod } from './apod.model';
@Injectable()
export class ApodService {
  socket: any;
  constructor(
    private uiService: UIService,
    private store: Store<fromApod.State>
  ) {

  }

  fetchApod(date: string) {
    this.socket = SocketService.getInstance();
    this.store.dispatch(new UI.StartLoading());
    this.store.dispatch(new ApodActions.StartFetching());
    this.socket.emit('get apod', date);
    this.socket.on('send apod', (apod: Apod) => {
      this.store.dispatch(new ApodActions.SetApod(apod));
      this.store.dispatch(new UI.StopLoading());
    }, (err) => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(
        "Fetching stats failed, please try again later",
        null,
        3000
      );
    });
  }
}
