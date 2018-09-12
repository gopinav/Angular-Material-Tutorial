import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
