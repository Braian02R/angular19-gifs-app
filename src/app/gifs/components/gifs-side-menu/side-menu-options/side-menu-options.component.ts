import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gif.service';

interface MenuOptions {
    icon: string;
    label: string;
    route: string;
    subLabel: string;
}

@Component({
    selector: 'gifs-side-menu-options',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent { 

    gifsService = inject(GifService);

    menuOptions: MenuOptions[] = [
        {
            icon: 'fa-solid fa-chart-line',
            label: 'Trending',
            subLabel: 'Gifs Populares',
            route: '/dashboard/trending'
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            label: 'Buscador',
            subLabel: 'Buscar Gifs',
            route: '/dashboard/search'
        },

    ];
}
