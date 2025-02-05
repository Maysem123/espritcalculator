import { Injectable } from '@angular/core';

export interface Subject {
  name: string;
  coefficient: number;
}

export interface GradeEntry {
  cc: number;
  exam: number;
}

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  subjects: Subject[] = [
    { name: 'Administration et Securite des SE (Unix)', coefficient: 4 },
    { name: 'Base de donnees', coefficient: 2 },
    { name: 'Francais', coefficient: 3 },
    { name: 'Conception par Objet et Prog JAVA', coefficient: 3 },
    { name: 'Entreprise structure et fonctionnement', coefficient: 1 },
    { name: 'IP Essentials', coefficient: 2 },
    { name: 'Langage de Modelisation (UML)', coefficient: 4 },
    { name: 'Programmation procedurale', coefficient: 3 },
    { name: 'Technologie web', coefficient: 3},
    { name: 'Switched network', coefficient: 2},
    { name: 'Algorithme', coefficient: 2 }
  ];

  calculateAverage(grades: { [key: string]: GradeEntry }): number {
    let totalPoints = 0;
    let totalCoefficients = 0;

    this.subjects.forEach(subject => {
      const grade = grades[subject.name];
      if (grade) {
        const subjectAverage = (grade.cc * 0.4) + (grade.exam * 0.6);
        totalPoints += subjectAverage * subject.coefficient;
        totalCoefficients += subject.coefficient;
      }
    });

    return totalPoints / totalCoefficients;
  }
}