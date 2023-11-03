import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: any | Project[];
  public url: String;

  constructor(
    private _projectService: ProjectService
  ) {
    this.projects = null;
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        // console.log(response);
        if(response.projects) {
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
