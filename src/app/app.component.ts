import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dialogOpen = false;

  // Kendo UI Button click event handler
  buttonClicked() {
    this.dialogOpen = true;
  }

  dialogClosed() {
    this.dialogOpen = false;
    this.title = "Nice Job!";
  }
}
