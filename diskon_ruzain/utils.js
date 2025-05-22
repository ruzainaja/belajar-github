export const daftarDiskon = {
    "sepatu": { harga: 200000, diskon: 20 },
    "tas": { harga: 150000, diskon: 20 },
    "jaket": { harga: 300000, diskon: 20 },
  };
  
  export function barang(nama) {
      if (typeof nama !== "string" || isFinite(nama)) {
        throw new Error("Nama barang tidak boleh mengandung angka.");
      }
    }
  export function cariBarangDiskon(namaBarang) {
    const barang = daftarDiskon[namaBarang.toLowerCase()];
    if (!barang) {
      throw new Error("Barang tidak mendapatkan diskon.");
    }
  
    const jumlahDiskon = (barang.harga * barang.diskon) / 100;
    const totalBayar = barang.harga - jumlahDiskon;
  
    return {
      nama: namaBarang,
      hargaAwal: barang.harga,
      diskonPersen: barang.diskon,
      jumlahDiskon,
      totalBayar,
    };
  }