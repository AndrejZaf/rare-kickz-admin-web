import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakerCardComponent } from './components/sneaker-card/sneaker-card.component';
import { ButtonCellRendererComponent } from './components/button-cell-renderer/button-cell-renderer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    SneakerCardComponent,
    ButtonCellRendererComponent,
    ConfirmModalComponent,
  ],
  exports: [SneakerCardComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedModule {}
