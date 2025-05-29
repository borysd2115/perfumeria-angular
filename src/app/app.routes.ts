import { Routes } from '@angular/router';
import { GlownaComponent } from './glowna/glowna.component';
import { PerfumyMeskieComponent } from './perfumy-meskie/perfumy-meskie.component';
import { PerfumyDamskieComponent } from './perfumy-damskie/perfumy-damskie.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { SzczegolyPComponent } from './szczegoly-p/szczegoly-p.component';
import { SzczegolyDamskieComponent } from './szczegoly-damskie/szczegoly-damskie.component';

export const routes: Routes = [
    {path: '',component: GlownaComponent, title: "Strona główna"},
    {path: 'perfumy-meskie',component: PerfumyMeskieComponent, title: "Perfumy męskie"},
    {path: 'perfumy-damskie',component: PerfumyDamskieComponent, title: "Perfumy damskie"},
    {path: 'koszyk',component: KoszykComponent, title: "Koszyk"},
    {path: 'perfumy/:id', component: SzczegolyPComponent},
    {path: 'perfumy-damskie/:id', component: SzczegolyDamskieComponent},
    { path: 'koszyk', component: KoszykComponent, title: 'Koszyk' },
    {path: '**', redirectTo: ''}
];
