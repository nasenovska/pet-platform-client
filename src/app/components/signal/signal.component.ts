import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Signal} from "../../model/model.signal";
import {SignalService} from "../../services/signal.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignalComponent implements OnInit {
  signals: Signal[];

  constructor(public authService: AuthService, public signalService: SignalService, public router: Router) {
    this.signals = [];
  }

  ngOnInit() {
    this.signalService.getAllSignals().subscribe((signals: Signal[]) => {
      console.log(signals)
      this.signals = signals;
    });
  }
}
