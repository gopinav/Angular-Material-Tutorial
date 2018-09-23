import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
