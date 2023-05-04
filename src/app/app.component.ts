import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'discgolf-scorecard-v1';

  changeTitle(activeComponentTitle: string) {
    this.title = activeComponentTitle;
  }
}
