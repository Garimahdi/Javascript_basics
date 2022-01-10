let gantiDiv = document.getElementById('testDiv')
console.log(gantiDiv);
// Ini ngubah isian tag berdasarkan aturan HTML
gantiDiv.innerHTML = '<strong>'+'Tes <br> sederhana pake <br> JS'+'</strong>';

// Ini ngubah isian tag yg kgk ngikutin aturan HTML
/*
gantiDiv.innerText = '<strong>'+'Tes <br> sederhana pake <br> JS'+'</strong>';
*/

// Ini ngubah styling teks
gantiDiv.style['color'] = 'olivedrab';
gantiDiv.style['font-weight'] = 'bold';
gantiDiv.style['background-color'] = 'salmon';

// Menambahkan kelas ke dalam tag div yang blom pny kelas
/*
gantiDiv.classList.add('hide');

// Ngapus efek kelas 'hide' beserta kelasnya dalam wkt 5 sec
setTimeout(() => {
    gantiDiv.classList.remove('hide')
}, 5000 //ms);*/

// Belajar manipulasi event dalam HTML
let elemenHTML = document.getElementById('testDiv2');
// Saat mouse di div tujuan, akan keluar alert
elemenHTML.onmouseover = function(){
    window.alert('Anda di tempat yang tepat!');
    elemenHTML.style['cursor'] = 'pointer';
}
// Saat diklik, konten berubah
elemenHTML.onclick = function(){
    elemenHTML.innerHTML = 'Halo';
    elemenHTML.style['background-color'] = 'darkgray';
    elemenHTML.style['color'] = 'white';
    elemenHTML.style['cursor'] = 'pointer';
}

// Event pada form
let tabelNama = document.getElementById('tesInput')
// Kalo ada perubahan dlm form, akan diambil value dari isian form itu
tabelNama.onchange = function(event){
    console.log(event.target.value);
    document.getElementById('hasilInput').innerHTML = 'Hi, '+event.target.value;
}