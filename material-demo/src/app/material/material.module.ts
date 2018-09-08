import { NgModule } from '@angular/core';
import { MatButtonModule, MatBadgeModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

const Material = [MatButtonModule, MatBadgeModule, MatIconModule, MatProgressSpinnerModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
