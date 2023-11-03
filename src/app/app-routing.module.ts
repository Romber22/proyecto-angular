import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'sobre-mi', component: AboutMeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'crear', component: CreateComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proyecto/:id', component: DetailComponent },
  { path: 'editar/:id', component: EditComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
