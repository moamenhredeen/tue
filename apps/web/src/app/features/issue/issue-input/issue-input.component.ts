import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IssueService } from '../issue.service';
import { MatSelectModule } from '@angular/material/select';
import { AsyncPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateIssueRequest } from 'api-spec/src/issue.types';
@Component({
  selector: 'app-issue-input',
  templateUrl: './issue-input.component.html',
  styleUrl: './issue-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    AsyncPipe,
  ],
})
export class IssueInputComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private issueService = inject(IssueService);
  private destroySubject = new Subject<void>();
  private dialogRef = inject(MatDialogRef<IssueInputComponent>);

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status_id: [1, Validators.required],
  });

  issueStatuses$ = this.issueService.issueStatuses$;
  
  ngOnInit(): void {
    this.issueService.getIssueStatuses().pipe(
      takeUntil(this.destroySubject)
    ).subscribe(
      (issueStatuses) => {
        console.log(issueStatuses);
      }
    );
  }

  createIssue() {
    if (this.form.valid) {
      this.issueService.createIssue(this.form.value as CreateIssueRequest).subscribe(
        () => {
          this.issueService.getIssues().subscribe()
          this.dialogRef.close();
        }
      );
    }
  }
  
  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
