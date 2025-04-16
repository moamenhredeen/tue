import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { IssueResponse } from '@tue/api-spec/src/issue.types';
import { Subject, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.scss',
  imports: [
    AsyncPipe,
    MatTableModule,
    MatProgressSpinnerModule
  ],
})
export class IssueListComponent implements OnInit, OnDestroy {

  private destroySubject = new Subject<void>();

  issueService = inject(IssueService);
  dataSource$ = this.issueService.issues$;
  displayedColumns: string[] = ['id', 'title', 'description', 'status'];

  ngOnInit() {
    this.issueService.getIssues()
    .pipe(takeUntil(this.destroySubject))
    .subscribe(issues => {
      console.log(issues);
    });
  }
  
  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
