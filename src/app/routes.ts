import { DistanciaComponent } from "./components/distancia/distancia.component";
import { HomeComponent } from "./components/home/home.component";

export const routeList = [
    {
        path: 'distancia',
        component: DistanciaComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
]