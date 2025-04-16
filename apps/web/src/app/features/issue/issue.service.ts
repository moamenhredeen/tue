import { HttpClient } from "@angular/common/http";
import { inject, Injectable, OnInit } from "@angular/core";
import { CreateIssueRequest, IssueResponse, IssueStatusGroup, IssueStatusResponse } from "@tue/api-spec/src/issue.types";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IssueService implements OnInit {
    private static readonly issueRoute = `${environment.apiUrl}/issue`;
    private http = inject(HttpClient);
    private issueSubject = new BehaviorSubject<IssueResponse[]>([]);
    private issueStatusSubject = new BehaviorSubject<IssueStatusResponse[]>([]);
    

    get issues$() {
        return this.issueSubject.asObservable();
    }

    get issueStatuses$() {
        return this.issueStatusSubject.asObservable();
    }
    
    getIssueStatuses(): Observable<IssueStatusResponse[]> {
        return this.http.get<IssueStatusResponse[]>(`${IssueService.issueRoute}/status`)
        .pipe(
            tap((issueStatuses) => this.issueStatusSubject.next(issueStatuses))
        );
    }
    
    
    ngOnInit(): void {
        this.getIssues().subscribe();
    }

    getIssues(): Observable<IssueResponse[]> {
        return this.http.get<IssueResponse[]>(`${IssueService.issueRoute}`)
        .pipe(
            tap((issues) => this.issueSubject.next(issues))
        );
    }
    
    filterIssuesByStatusGroup(statusGroups: IssueStatusGroup[]): Observable<IssueResponse[]> {
        return this.http.get<IssueResponse[]>(`${IssueService.issueRoute}?${statusGroups.map(statusGroup => `statusGroup=${statusGroup}`).join('&')}`)
        .pipe(
            tap((issues) => this.issueSubject.next(issues))
        );
    }

    createIssue(issue: CreateIssueRequest): Observable<IssueResponse> {
        return this.http.post<IssueResponse>(`${IssueService.issueRoute}`, issue);
    }
}