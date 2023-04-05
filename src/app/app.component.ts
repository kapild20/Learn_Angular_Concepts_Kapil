import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  public simpleSettimeout() {
    this.funcA();
  }

  private funcA() {
    setTimeout(() => {
      this.funcB();
    }, 0);
  }

  private funcB() {
    this.funcC();
  }

  private funcC() {
    throw new Error('error in func c ')
  }
}
