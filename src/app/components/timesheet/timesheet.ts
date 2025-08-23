import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-timesheet',
  standalone: false,
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.scss',
})
export class Timesheet implements OnInit {
  private departments: Array<Department> | undefined;
  department: Department | undefined;
  employeeNameFC = new FormControl('', this.nameValidator());
  employees: Array<Employee> = [];
  employeeId = 0;

  private router = inject(ActivatedRoute);
  private departmentsService = inject(DepartmentsService);

  ngOnInit(): void {
    this.departments = this.departmentsService.deparments;
    this.department = this.departments.find(
      (department) => department.id === this.router.snapshot.params['id']
    );
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (!this.employees?.length) return error;

      this.employees.forEach((employee) => {
        if (employee.name.toLowerCase() === control.value.toLowerCase()) {
          error = { duplicate: true };
        }
      });

      return error;
    };
  }

  addEmployee() {
    if (!this.employeeNameFC.value) return;

    this.employeeId++;

    this.employees.push({
      id: this.employeeId.toString(),
      departmentId: this.department?.id,
      name: this.employeeNameFC.value,
      payRate: Math.floor(Math.random() * 51) + 50,
    });

    this.employeeNameFC.setValue('');
  }
}
