import { Component, inject, OnInit, input } from '@angular/core';
import { EmployeeInterface } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-analytics-table',
  standalone: false,
  templateUrl: './analytics-table.html',
  styleUrl: './analytics-table.scss',
})
export class AnalyticsTable implements OnInit {
  allEmployees!: EmployeeInterface[];
  departmentEmployees: EmployeeInterface[] = [];
  employeeService = inject(EmployeeService);
  departmentId = input.required<string>();
  weekdays: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  ngOnInit() {
    this.allEmployees = this.employeeService.getEmployeeData();
    this.departmentEmployees = this.allEmployees.filter(
      (employee) => employee.departmentId === this.departmentId()
    );
  }
  getTotalHours(employee: EmployeeInterface): number {
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
