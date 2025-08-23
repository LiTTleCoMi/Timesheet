import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments';

@Component({
  selector: 'app-timesheet',
  standalone: false,
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.scss',
})
export class Timesheet implements OnInit {
  private departments: Array<Department> | undefined;
  department: Department | undefined;

  private router: ActivatedRoute = inject(ActivatedRoute);
  private departmentsService: DepartmentsService = inject(DepartmentsService);

  ngOnInit(): void {
    this.departments = this.departmentsService.deparments;
    this.department = this.departments.find(
      (department) => department.id === this.router.snapshot.params['id']
    );
  }
}
