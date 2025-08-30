import { Injectable } from '@angular/core';
import { DepartmentInterface } from '../interfaces/department.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  deparments: Array<DepartmentInterface> = [
    { id: '1', name: 'Customer Success' },
    { id: '2', name: 'Sales' },
    { id: '3', name: 'Finance' },
  ];
}
