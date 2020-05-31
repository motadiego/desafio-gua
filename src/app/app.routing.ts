import { Routes ,  RouterModule} from '@angular/router';

import { FilmesComponent } from './componentes/filmes/filmes.component';
import { PessoasComponent } from './componentes/pessoas/pessoas.component';

export const appRoutes: Routes = [
    {
        path: 'pessoas',
        component: PessoasComponent
    },
    {
        path: 'filmes',
        component: FilmesComponent
    }
];

export const Routing = RouterModule.forChild(appRoutes);
