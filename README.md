## 🚀 1. Project Setup & Installation

### Install Node.js

* Download and install Node.js

```bash
node -v
npm -v
```

---

### Install Angular CLI

```bash
npm install -g @angular/cli
```

Verify:

```bash
ng version
```

---

### Create New Angular Project

```bash
ng new my-angular-app
cd my-angular-app
```

Options:

* Routing: Yes
* Styles: CSS / SCSS

---

### Run the Application

```bash
ng serve
```

Open: [http://localhost:4200](http://localhost:4200)

---

## 📦 2. Project Structure

```
src/
 ├── app/
 │   ├── components/
 │   ├── services/
 │   ├── directives/
 │   ├── pipes/
 │   ├── app-routing.module.ts
 │   ├── app.component.ts
 │   └── app.module.ts
 └── main.ts
```

---

# 🧩 3. Components

### Generate Component

```bash
ng generate component components/header
# OR
ng g c components/header
```

### Component Structure

* `.ts` → Logic
* `.html` → Template
* `.css/scss` → Styling

### Example Component

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>{{ title }}</h1>`,
})
export class HeaderComponent {
  title = 'My Angular App';
}
```

---

# 🔗 4. Data Binding

### 1. Interpolation

```html
<h1>{{ title }}</h1>
```

### 2. Property Binding

```html
<img [src]="imageUrl">
```

### 3. Event Binding

```html
<button (click)="onClick()">Click</button>
```

### 4. Two-way Binding

```html
<input [(ngModel)]="name">
```

Import:

```ts
import { FormsModule } from '@angular/forms';
```

---

# 🧭 5. Routing

### Generate Routing Module

```bash
ng generate module app-routing --flat --module=app
```

### Define Routes

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### Use in HTML

```html
<a routerLink="/">Home</a>
<a routerLink="/todos">Todos</a>

<router-outlet></router-outlet>
```

---

# 🔌 6. Services & API Calls

### Generate Service

```bash
ng generate service services/todos
# OR
ng g s services/todos
```

### Example Service

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
```

### Import HttpClientModule

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class AppModule {}
```

### Use Service in Component

```ts
constructor(private api: ApiService) {}

ngOnInit() {
  this.api.loadTodos().subscribe(data => {
    console.log(data);
  });
}
```

---

# 🔄 7. Pipes

### Generate Pipe

```bash
ng generate pipe pipes/custom
# OR
ng g p pipes/custom
```

### Example Pipe

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseCustom'
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
```

### Usage

```html
<p>{{ name | uppercaseCustom }}</p>
```

---

# 🧠 8. Directives

### Generate Directive

```bash
ng generate directive directives/highlight
# OR
ng g d directives/highlight
```

### Example Directive

```ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
```

### Usage

```html
<p appHighlight>Hover over me</p>
```

---

# 🛠️ 9. Common Angular CLI Commands

```bash
ng g c component-name
ng g s service-name
ng g p pipe-name
ng g d directive-name
ng g m module-name
```

### Build Project

```bash
ng build
```

Production build:

```bash
ng build --configuration production
```

### Run Tests

```bash
ng test
```

### Lint

```bash
ng lint
```

### Fix Lint Issues

```bash
ng lint --fix
```

### Update Angular

```bash
ng update @angular/core @angular/cli
```

---
