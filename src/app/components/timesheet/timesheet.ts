import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentInterface } from '../../interfaces/department.interface';
import { DepartmentsService } from '../../services/departments.service';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { EmployeeInterface } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-timesheet',
  standalone: false,
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.scss',
})
export class Timesheet implements OnInit {
  private departments: Array<DepartmentInterface> | undefined;
  department: DepartmentInterface | undefined;
  employeeNameFC = new FormControl('', this.nameValidator());
  employees: Array<EmployeeInterface> = [];
  employeeId = 0;
  weekdays: Array<string> = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

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

  addEmployee(): void {
    if (this.employeeNameFC.value) {
      this.employeeId++;

      this.employees.push({
        id: this.employeeId.toString(),
        departmentId: this.department?.id,
        name: this.employeeNameFC.value,
        payRate: Math.floor(Math.random() * 50) + 50,
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
      });

      this.employeeNameFC.setValue('');
    }
  }

  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }

  getTotalHours(employee: EmployeeInterface): number {
    console.log(employee);
    return (
      employee.monday +
      employee.tuesday +
      employee.wednesday +
      employee.thursday +
      employee.friday +
      employee.saturday +
      employee.sunday
    );
  }
}
