import { Component, computed, signal } from "@angular/core";
import { FicheProduitComponent } from "./components/fiche-produit/fiche-produit.component";
import { Product } from "./models/product.model";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FicheProduitComponent, SearchBarComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  products: Product[] = [];
  search = signal("");

  filteredProducts = computed(() => {
    return this.products.filter((product) =>
      product.title.toLowerCase().includes(this.search().toLowerCase())
    );
  });

  constructor() {
    const product1 = new Product();
    product1.title = "Pilea";
    product1.price = 20.99;
    product1.desc =
      "Le Pilea peperomioides est une plante d'intérieur populaire originaire de Chine. Il se distingue par la forme ronde de ses feuilles.";
    product1.src = "img/pilea.jpg";

    const product2 = new Product();
    product2.title = "Aloes";
    product2.price = 22.99;
    product2.desc =
      "L'Aloe vera est une plante succulente idéale pour purifier l'air et embellir votre intérieur.";
    product2.src = "img/aloes.jpg";

    const product3 = new Product();
    product3.title = "Palmier papillon";
    product3.price = 28.99;
    product3.desc =
      "Le palmier papillon est une plante d'intérieur exotique qui apportera une touche tropicale à votre espace.";
    product3.src = "img/butterfly-palm.jpg";

    const product4 = new Product();
    product4.title = "Cactus";
    product4.price = 15.99;
    product4.desc =
      "Le cactus est une plante facile d'entretien, parfaite pour ceux qui aiment les plantes résistantes.";
    product4.src = "img/cactus.jpg";

    this.products = [product1, product2, product3, product4];
  }
}
