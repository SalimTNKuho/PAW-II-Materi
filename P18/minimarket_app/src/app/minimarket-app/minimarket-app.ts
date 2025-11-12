import { Component } from '@angular/core';

@Component({
  // selector: 'app-minimarket-app',
  // imports: [],
  // templateUrl: './minimarket-app.html',
  // styleUrl: './minimarket-app.css',

  selector: 'app-root',
  templateUrl: './minimarket-app.html',
})

export class MinimarketApp {
  produkList = [
    {
      nama: 'Laptop ASUS',
      deskripsi: 'Laptop dengan performa tinggi untuk kerja dan gaming.',
      harga: 12000000,
      gambar: 'https://via.placeholder.com/300x200?text=Laptop+ASUS'
    },
    {
      nama: 'Smartphone Samsung',
      deskripsi: 'Smartphone dengan kamera jernih dan baterai tahan lama.',
      harga: 5500000,
      gambar: 'https://via.placeholder.com/300x200?text=Samsung+Phone'
    },
    {
      nama: 'Headset Bluetooth',
      deskripsi: 'Headset nirkabel dengan kualitas suara premium.',
      harga: 450000,
      gambar: 'https://via.placeholder.com/300x200?text=Headset'
    }
  ];
}