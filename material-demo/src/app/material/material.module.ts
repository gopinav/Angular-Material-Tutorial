import { NgModule } from '@angular/core';
import { MatButtonModule, MatBadgeModule, MatIconModule } from '@angular/material';

const Material = [MatButtonModule, MatBadgeModule, MatIconModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
