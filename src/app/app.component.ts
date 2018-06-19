import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentComponentDisplayed = 'recipe';

  onDisplaySelection(selectedView: {displayType: string}) {
      this.currentComponentDisplayed = selectedView.displayType;
  }
}
