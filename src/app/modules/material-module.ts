import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatInput, MatLabel } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInput,
    MatFormField,
    ReactiveFormsModule,
    MatError,
    MatLabel,
    MatTabsModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInput,
    MatFormField,
    ReactiveFormsModule,
    MatError,
    MatLabel,
    MatTabsModule,
  ],
})
export class MaterialModule {}
