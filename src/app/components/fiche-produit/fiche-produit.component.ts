import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-fiche-produit',
  standalone: true,
  imports: [],
  templateUrl: './fiche-produit.component.html',
  styleUrl: './fiche-produit.component.css'
})

export class FicheProduitComponent {
  @Input() product: Product = new Product();
}
