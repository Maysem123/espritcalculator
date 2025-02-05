import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GradeService, Subject } from '../services/grade.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  subjects: Subject[];
  gradeForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService,
    private router: Router
  ) {
    this.subjects = this.gradeService.subjects;
    this.gradeForm = this.fb.group({});
    this.subjects.forEach(subject => {
      this.gradeForm.addControl(subject.name, this.fb.group({
        cc: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
        exam: ['', [Validators.required, Validators.min(0), Validators.max(20)]]
      }));
    });
  }

  onSubmit() {
    if (this.gradeForm.valid) {
      this.loading = true;
      const average = this.gradeService.calculateAverage(this.gradeForm.value);
      this.router.navigate(['/result'], { state: { average } });
    }
  }
}