import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as mapboxgl from 'mapbox-gl';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public map: mapboxgl.Map;

  constructor(public navCtrl: NavController) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2hhbXRiYiIsImEiOiJjazFqZjcxZzAwMHdtM2xwbmJ6eDl5bXlyIn0.bxlA9W7-WsE9fcDc9Fo39Q';
  }

  ionViewDidLoad() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [10, 10],
      zoom: 10
    });
  }

}
