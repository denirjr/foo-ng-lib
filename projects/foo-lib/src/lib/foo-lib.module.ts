import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    FooLibComponent,
    AccordionComponent
  ],
  imports: [
  ],
  exports: [
    FooLibComponent,
    AccordionComponent
  ]
})
export class FooLibModule { }
