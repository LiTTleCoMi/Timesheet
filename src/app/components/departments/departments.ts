import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { DepartmentInterface } from '../../interfaces/department.interface';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
})
export class Departments {
  private departmentsService: DepartmentsService = inject(DepartmentsService);
  private router: Router = inject(Router);

  departments$ = this.departmentsService.departments$;

  goToDepartment(departmentId: string) {
    this.router.navigate(['./timesheet', { id: departmentId }]);
  }
}
