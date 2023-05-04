import { Component, OnInit } from '@angular/core';
import { Course } from '../models/courses';
import { allCourses } from '../data/data';
import { DatastorageService } from '../datastorage.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'holes', 'button'];

  pageTitle: string = "Courses";

  courses: Course[] = allCourses;


  constructor(
    private _datastore: DatastorageService,
    private _dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }

  public createScorecard(course: Course): void {
    let dialogRef = this._dialog.open(CreateDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this._datastore.addScorecard(course, result);
    });
  }

}
