import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{
  [x: string]: any;
  
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activateRouter : ActivatedRoute,
    private router: Router
  ){ }
  
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al Modificar ngOnInit");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
      this.educacionS.update(id, this.educacion).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar la Educación");
           this.router.navigate(['']);
        }
      )
    }

}
