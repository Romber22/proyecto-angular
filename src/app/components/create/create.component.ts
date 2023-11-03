import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent {
  public title: String;
  public project: Project;
  public status: String;
  public filesToUpload: any;
  public save_project: any;
  public url: String;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project('', '', '', '', 2023, '', '');
    this.status = "";
    this.filesToUpload = null;
    this.url = Global.url;
  }

  onSubmit(form: any) {
    // console.log(this.project);

    // Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        // console.log(response);
        if (response.project) {
          if (this.filesToUpload) {

            // Subir la imagen
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

                form.reset();
              });
          } else {
            this.save_project = response.project;

            this.status = "success";

            form.reset();
          }
        } else {
          this.status = "failed";
        }
      },
      error => {
        console.log(error);
      });
  }

  fileChangeEvent(fileInput: any) {
    // console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
