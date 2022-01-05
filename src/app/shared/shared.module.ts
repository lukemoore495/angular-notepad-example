import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateButtonComponent } from './create-button/create-button.component';
import { SearchComponent } from './search/search.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    CreateButtonComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    CreateButtonComponent,
    SearchComponent,
    FilterPipe,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class SharedModule { }
