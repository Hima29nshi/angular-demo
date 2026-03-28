import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  constructor() {}
  el = inject(ElementRef)
  stylesEffect = effect(()=>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration='line-through';
      this.el.nativeElement.style.backgroundColor='red';
      this.el.nativeElement.style.color='#eee';
    }else{
      this.el.nativeElement.style.textDecoration='none';
      this.el.nativeElement.style.backgroundColor='#333';
      this.el.nativeElement.style.color='#eee';
    }
  }); 
}
