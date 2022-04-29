import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //the name for calling this.
  templateUrl: './app.component.html', //the target html file
  styleUrls: ['./app.component.scss'] //the target styling file
})
export class AppComponent {
  title = 'TestApp1';

  public defaultComponent : string = "Ana Sayfa";

  public getResult(completeResult: any) {
    this.defaultComponent = completeResult.name;
  }
}
