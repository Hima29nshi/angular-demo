import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  imports: []
})
export class GreetingComponent  {

  @Input('greeting')
  greeting: string = "Default greeting"

  
  counter:WritableSignal<number>=signal(0);

  increment(){
    this.counter.update(val => val+1)
  }

  decrement(){
    this.counter.update(val => val-1)
  }

  reset(){
    this.counter.set(0)
  }
}
