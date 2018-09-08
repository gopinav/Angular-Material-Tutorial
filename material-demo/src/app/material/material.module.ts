import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
