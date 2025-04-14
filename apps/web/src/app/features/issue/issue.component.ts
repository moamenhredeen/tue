import { Component, inject } from '@angular/core';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MatDialog } from '@angular/material/dialog';
import { IssueInputComponent } from './issue-input/issue-input.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss',
  imports: [
    IssueListComponent,
    MatButtonModule
  ],
})
export class IssueComponent {
  private dialog = inject(MatDialog);

  openCreateIssueDialog() {
    const dialogRef = this.dialog.open(IssueInputComponent, {
      width: '400px'
    });
  }
}
