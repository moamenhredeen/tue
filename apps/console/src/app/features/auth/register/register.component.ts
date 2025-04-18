import { Component, inject, signal } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  hide = signal(true);

  addressForm = this.fb.group({
    firstName: [null],
    lastName: [null],
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
  });


  onSubmit(): void {
    alert('Thanks!');
  }
}
