import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.scss']
})
export class DistanciaComponent implements OnInit {

  center: any;
  zoom: any;
  display?: google.maps.LatLngLiteral;
  miDireccion: any;
  suDireccion: any;
  distanceinMetro: any;
  markers: { icon: string, position: google.maps.LatLngLiteral, options: google.maps.MarkerOptions }[] = [];


  constructor() {
    this.center = { lat: 16.9725144, lng: -87.1523536 };
    this.zoom = 3.5;
    this.miDireccion = new google.maps.LatLng(6.2344669, -75.5981709);
    this.suDireccion = new google.maps.LatLng(20.72439085893023, -101.35670346843939);
    this.CalcularDireccion();
    this.addMarker();

  }
  ngOnInit() {


  }

  CalcularDireccion() {
    this.distanceinMetro = Math.ceil(google.maps.geometry.spherical.computeDistanceBetween(this.miDireccion, this.suDireccion) / 1000);
  }

  addMarker() {

    const icons: Record<string, { icon: string }> = {
      ella: {
        icon: "assets/imgs/ella.png",
      },
      yo: {
        icon: "assets/imgs/yo.png",
      }
    };


    this.markers.push({ icon: icons["yo"].icon, position: this.miDireccion, options: { draggable: false } })
    this.markers.push({ icon: icons["ella"].icon, position: this.suDireccion, options: { draggable: false } })
  }


}
