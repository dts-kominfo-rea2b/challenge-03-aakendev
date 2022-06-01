// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (daftarBarang) => {
  let namaBarang = [];
  let hargaBarang = [];
  let kuantitasBarang = [];
  let listBelanja = [];

  for (let i = 0; i < daftarBarang.length; i++) {
    namaBarang.push(daftarBarang[i].nama);
    hargaBarang.push(daftarBarang[i].harga);
    kuantitasBarang.push(daftarBarang[i].kuantitas);
    listBelanja.push(
      "- " + daftarBarang[i].nama + " x " + daftarBarang[i].kuantitas
    );
  }

  return listBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (daftarBarangTotal) => {
  let totalBelanja = 0;
  let namaBarang = [];
  let hargaBarang = [];
  let kuantitasBarang = [];
  let subTotalBelanja = [];

  for (let i = 0; i < daftarBarangTotal.length; i++) {
    hargaBarang.push(daftarBarangTotal[i].harga);
    kuantitasBarang.push(daftarBarangTotal[i].kuantitas);
    subTotalBelanja.push(
      daftarBarangTotal[i].harga * daftarBarangTotal[i].kuantitas
    );

    totalBelanja += subTotalBelanja[i];
  }

  return totalBelanja;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer\n");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
