import { DistanciaComponent } from "./components/distancia/distancia.component";
import { HomeComponent } from "./components/home/home.component";
import { MalPoemaComponent } from "./components/mal-poema/mal-poema.component";
import { RecuerdoComponent } from "./components/recuerdo/recuerdo.component";
import { SiempreComponent } from "./components/siempre/siempre.component";

export const routeList = [
    {
        path: 'distancia',
        component: DistanciaComponent
    },
    {
        path: 'recuerdo',
        component: RecuerdoComponent
    },    {
        path: 'siempre',
        component: SiempreComponent
    },
    {
        path: 'malo',
        component: MalPoemaComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
]