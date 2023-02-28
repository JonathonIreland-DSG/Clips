import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'
import { ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';

// import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent
  ],
  providers: [
    ModalService
  ]
})
export class SharedModule { }
