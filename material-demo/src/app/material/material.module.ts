import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const Material = [MatButtonModule];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
