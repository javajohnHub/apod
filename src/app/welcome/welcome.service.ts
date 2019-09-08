import { Injectable } from "@angular/core";
import { UIService } from "../shared/ui.service";
import * as UI from "../shared/ui.actions";
import * as fromWelcome from "./welcome.reducer";
import * as WelcomeActions from "./welcome.actions";
import { Store } from "@ngrx/store";
import { SocketService } from '../shared/socket.service';
import { Stats } from './stats.model';
@Injectable()
export class WelcomeService {
  socket: any;
  constructor(
    private uiService: UIService,
    private store: Store<fromWelcome.State>
  ) {}

  fetchStats() {
    this.socket = SocketService.getInstance();
    this.store.dispatch(new UI.StartLoading());
    this.socket.on('send stats', (stats: Stats) => {
      this.store.dispatch(new WelcomeActions.SetStats(stats));
      this.store.dispatch(new UI.StopLoading());
    }, (err) => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(
        "Fetching stats failed, please try again later",
        null,
        3000
      );
    });
    this.socket.emit('get stats');
  }
}
