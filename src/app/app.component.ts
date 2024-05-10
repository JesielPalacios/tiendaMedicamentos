import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Medicamentos', url: '/medicamentos', icon: 'mail' },
    { title: 'Sobre nosotros', url: '/nosotros', icon: 'warning' },
  ];
  public labels = ['Iniciar sesión'];
  constructor() {}
}
