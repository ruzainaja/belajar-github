import { cariBarangDiskon, barang } from "./utils.js";

const namaBarangInput = 'tas';
try {
  barang(namaBarangInput);
  const hasil = cariBarangDiskon(namaBarangInput);

  console.log(`Nama Barang    : ${hasil.nama}`);
  console.log(`Harga Awal      : Rp${hasil.hargaAwal}`);
  console.log(`Diskon ${hasil.diskonPersen}%   : Rp${hasil.jumlahDiskon}`);
  console.log(`Total Bayar     : Rp${hasil.totalBayar}`);
} catch (error) {
  console.error("Error :", error.message);
}