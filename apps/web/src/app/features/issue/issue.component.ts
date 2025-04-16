import { Component, inject, OnInit } from '@angular/core';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MatDialog } from '@angular/material/dialog';
import { IssueInputComponent } from './issue-input/issue-input.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IssueStatusGroup } from '@tue/api-spec/src/issue.types';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss',
  imports: [
    IssueListComponent,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
})
export class IssueComponent implements OnInit {
  private dialog = inject(MatDialog);
  private issueService = inject(IssueService);
  
  selectedStatusGroup = new FormControl<IssueStatusGroup[]>([]);
  
  ngOnInit(){
    this.selectedStatusGroup.valueChanges.subscribe(value => {
      if (value && value.length > 0) {
        this.issueService.filterIssuesByStatusGroup(value).subscribe();
      } else {
        this.issueService.getIssues().subscribe();
      }
    });
  }

  openCreateIssueDialog() {
    const dialogRef = this.dialog.open(IssueInputComponent, {
      width: '400px'
    });
  }
}
