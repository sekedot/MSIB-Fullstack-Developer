const nama = prompt("masukkan nama pegawai")
const jabatan = prompt("masukkan jabatan")
const status = prompt("masukkan status")

let gajiPokok;
if (jabatan === "Manager" || jabatan === "manager") {
  gajiPokok = 10_000_000;
} else if (jabatan === "Asisten manager" || jabatan === "asisten manager") {
  gajiPokok = 8_000_000;
} else if (jabatan === "Staff" || jabatan === "staff") {
  gajiPokok = 5_000_000;
} else {
  console.log("Jabatan tidak valid");
}


const tunjanganJabatan = gajiPokok * 0.1;


const bpjs = gajiPokok * 0.1;


let tunjanganKeluarga = 0;
if (status === "Menikah" || status === "menikah") {
  tunjanganKeluarga = gajiPokok * 0.1;
}

const totalPendapatan = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

console.log("Pegawai: " + nama);
console.log("Jabatan: " + jabatan);
console.log("Gaji Pokok: " + gajiPokok.toLocaleString("id-ID"));
console.log("Tunjangan Jabatan: " + tunjanganJabatan.toLocaleString("id-ID"));
console.log("BPJS: " + bpjs.toLocaleString("id-ID"));
console.log("Tunjangan Keluarga: " + tunjanganKeluarga.toLocaleString("id-ID"));
console.log("Total Pendapatan: " + totalPendapatan.toLocaleString("id-ID"));

