import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  filter = '';
  sort = 'name,asc';
  onlyValid = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;

    this.productService
      .getProducts(this.filter || undefined, this.sort || undefined, this.onlyValid)
      .subscribe({
        next: (products) => {
          this.products = products;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'Failed to load products';
          this.loading = false;
        },
      });
  }

  onFilterChange(): void {
    this.load();
  }

  onSortChange(): void {
    this.load();
  }

  onOnlyValidChange(): void {
    this.load();
  }
}
