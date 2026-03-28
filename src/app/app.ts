import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  headerTitle = signal("FirstProject")
  protected readonly title = signal('new_project');
}
