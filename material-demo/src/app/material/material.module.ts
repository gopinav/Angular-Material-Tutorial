import { NgModule } from '@angular/core';
import { MatButtonModule, MatBadgeModule } from '@angular/material';

const Material = [MatButtonModule, MatBadgeModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
