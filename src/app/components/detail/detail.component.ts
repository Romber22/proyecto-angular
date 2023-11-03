import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: String;
  public project: any | Project;
  public confirm: Boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router, 
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.project = {};
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.project = this.getProject(id);
    });
  }

  getProject(id: String) {
    this._projectService.getProject(id).subscribe(
      response => {
        // console.log(response);
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteProject(id: String) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project) {
          this._router.navigate(['/proyectos']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm: Boolean) {
    this.confirm = confirm;
  }
}
