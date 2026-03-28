import { Component } from '@angular/core';
import { GreetingComponent } from "../greeting/greeting.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [GreetingComponent]
})
export class HomeComponent {
  greeting = "This is my greeting"
}
