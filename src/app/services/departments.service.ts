import { Injectable, inject } from '@angular/core';
import { DepartmentInterface } from '../interfaces/department.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  private http = inject(HttpClient);

  // This is the correct pattern
  departments$: Observable<DepartmentInterface[]> = this.http
    .get<DepartmentInterface[]>(`https://hr-timesheet-test.firebaseio.com/departments.json`)
    .pipe(
      shareReplay(1) // 1. Cache the result and share it with all subscribers
    );
}
