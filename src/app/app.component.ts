import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormsInAngular';

  onSubmit(data: any) {
    console.warn(data);
  }
}
