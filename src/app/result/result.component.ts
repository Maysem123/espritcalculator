import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="result-container">
      <div class="result-card">
        <h1>Your Results</h1>
        <div class="score-container">
          <div class="score" [class.good-score]="average >= 10">
            {{ average.toFixed(2) }}
          </div>
          
       
        
      </div>
    </div>
  `,
  styles: [`
    .result-container {
      min-height: 100vh;
      background-color: #1c1c1c;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .result-card {
      background: #282828;
      border-radius: 16px;
      padding: 3rem;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      border: 1px solid #3c3c3c;
      max-width: 500px;
      width: 100%;
    }

    h1 {
      color: #c8c7c8;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .score-container {
      margin-bottom: 2rem;
    }

    .score {
      font-size: 4rem;
      font-weight: bold;
      color: #ea3637;
      margin-bottom: 1rem;
    }

    .score.good-score {
      color: #4CAF50;
    }

    .status {
      font-size: 1.5rem;
      color: #ea3637;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .status.passed {
      color: #4CAF50;
    }

    .message {
      color: #747474;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .back-button {
      background: #3c3c3c;
      color: #c8c7c8;
      border: none;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1.1rem;
      cursor: pointer;
    }

    .back-button:hover {
      background: #484848;
    }
  `]
})
export class ResultComponent {
  average: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.average = navigation.extras.state['average'];
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}