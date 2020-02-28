import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "resultado/:desc",
    loadChildren: "./pages/resultado/resultado.module#ResultadoPageModule"
  },
  {
    path: "resultado",
    loadChildren: "./pages/resultado/resultado.module#ResultadoPageModule"
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutPageModule)
  },
  {
    path: "contenido/:indice/:tema",
    loadChildren: "./pages/contenido/contenido.module#ContenidoPageModule"
  },
  {
    path: "temas",
    loadChildren: () =>
      import("./pages/temas/temas.module").then(m => m.TemasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
