import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
})
export class Departments implements OnInit {
	constructor(private departmentsService: DepartmentsService) { }
	departments!: Array<Department>;

	ngOnInit(): void {
		this.departments = this.departmentsService.deparments;
	}
}
