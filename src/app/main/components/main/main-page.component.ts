import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import {AppLesson} from '../../models/lesson';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  lessons: AppLesson[] = [
    new AppLesson(1, 'Lesson 1', 'Getting familiar with Angular 5 and TypeScript', '/assets/pdf/Lecture1.pdf'),
    new AppLesson(2, 'Lesson 2', 'Building first Angular project, basic binding', '/assets/pdf/Lecture2.pdf'),
    new AppLesson(3, 'Lesson 3', 'UI Frameworks and styling with scss', '/assets/pdf/Lecture3.pdf'),
    new AppLesson(4, 'Lesson 4', 'Getting familiar with Angular Router and Routes', '/assets/pdf/Lecture4.pdf')
  ];
  username: string;
  currentPDFSource: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams
      .filter(params => params.user)
      .subscribe(params => {
        this.username = params.user;
      });
  }

  logout() {
    this.router.navigate(['login']);
  }

  setPdfSource(pdfSource: string) {
    this.currentPDFSource = pdfSource;
  }

  initMenu() {


  }
}
