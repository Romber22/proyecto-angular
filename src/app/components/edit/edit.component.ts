import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: String;
  public project: any | Project;
  public status: String;
  public filesToUpload: any;
  public save_project: any;
  public url: String;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = "Editar proyecto";
    this.status = "";
    this.project = null;
    this.url = Global.url;
    this.filesToUpload = null;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.project = this.getProject(id);
    })
  }

  getProject(id: String) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {

          // Actualizar imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(
              Global.url + 'upload-image/' + response.project._id,
              [],
              this.filesToUpload,
              'image',
              response.project._id)
              .then((result: any) => {
                // console.log(result);
                this.save_project = result.project;

                this.status = "success";
              });
          } else {
            this.save_project = response.project;
            this.status = "success";
          }

        } else {
          this.status = "failed";
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput && fileInput.target && fileInput.target.files) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
    } else {
      console.error("No se pudieron obtener los archivos desde fileInput.");
    }
  }

}
