import { Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    { path: '', component: InputFormComponent },
    { path: 'result', component: ResultComponent }
];
