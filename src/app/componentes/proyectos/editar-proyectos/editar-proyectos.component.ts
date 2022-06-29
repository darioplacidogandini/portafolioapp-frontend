import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  constructor(private datosProyectos:ProyectosService,
    private router:ActivatedRoute,private editDialog:MatDialog) {}

  id: number = 0;
  proyecto: Proyectos = new Proyectos();

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.proyecto = new Proyectos();
    this.datosProyectos.buscar(this.id).subscribe(data => {
      this.proyecto = data;
    },error => console.log(error));
  }

  public guardarCambios() {
    this.datosProyectos.editar(this.id,this.proyecto).subscribe(data => {
      console.log(data);
      this.editDialog.closeAll();
    },error => console.log(error));
  }

}
