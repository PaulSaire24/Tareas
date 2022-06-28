import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/Tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTarea: Tareas[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea (){
    // crear un objet tarea 
    const tarea: Tareas = {
      nombre : this.nombreTarea,
      estado : false
    }
 
    // agregar el objeto tarea al array

    this.listaTarea.push(tarea);

    //reset tareas nombre tarea
    this.nombreTarea = '';
    }

    eliminarTarea(index:number): void{
      this.listaTarea.splice(index,1);
    }

    actualizarTarea(index: number, tarea : Tareas): void {
        this.listaTarea[index].estado = !tarea.estado;
    }

  }


