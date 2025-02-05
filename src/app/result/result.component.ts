import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  average: number = history.state.average;

  constructor(private router: Router) {}

  get formattedAverage(): string {
    return this.average?.toFixed(2);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}