# WAI-ARIA yang harus ada dalam situs web-mu

Oleh isatrio - [CC-by-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/#)


## Semantik

Dengan semakin kompleksnya kebutuhan untuk membuat situs web. Maka penggunaan tag HTML tidak lagi bisa sesederhana dahulu yang hanya menggunakan `<div>` untuk segala jenis urusan. Waktu itu, kami perlu menambahkan `id` atau `class`, contoh: `<div id="landmark" class="landmark">`.

Untungnya, saat ini untuk menulis kode yang berkaitan dengan tengaran (__landmark__) lebih dimudahkan sejak HTML5. Kita bisa menulisnya seperti contoh berikut `<header>` atau `<main>`.

Teknologi A11s (Aksesibilitas) dalam situs web sangat bergantung pada penggunaan tag HTML yang benar atau disarankan. Teknologi semacam pembaca layar akan membaca sesuai dengan urutan struktur HTML. Menstruktur tag HTML dengan baik akan sangat membantu teknologi ini.

Beberapa contoh kode tag HTML yang semantik yang seharusnya kita terapkan.

```html
<header>…</header>

<nav>…</nav>

<main>…</main>

<article>…</article>

<aside>…</aside>

<footer>…</footer>

<button>…</button>

<!-- dan banyak lagi -->
```


## ARIA adalah Polifil

Kita tidak boleh berhenti dengan semantik karena semantik tidak mencakup semua hal. Untuk beberapa hal kita harus menerapkan ARIA.

Polifil adalah kode untuk mengimplementasikan fitur dalam peramban yang belum mendukung fitur tersebut. Tapi dalam konteks A11s, maka polifil adalah teknologi tambahan untuk mendukung teknologi A11s. Salah satu contohnya adalah pembaca layar.

Sebagai contoh awal bentuk-bentuk ARIA bisa dilihat berikut di bawah

```html
<!-- role -->
<nav role="navigation"></nav>

<!-- properties -->
<button aria-label="tutup">x</button>

<!-- states -->
<button aria-disabled="true">Tutup</button>
```

## Tengaran (Landmark)

Tengaran adalah bagian-bagian tertentu dalam sebuah situs web. Seperti benda fisik yang kita lihat, tengaran dalam situs web dapat berupa `<header>`, `<nav>`, `<footer>`, dan lain sebagainya. Beberapa contoh tengaran yang umum digunakan adalah sebagai berikut contoh di bawah.

```html
<header role="banner"></header>

<main role="main"></main>

<aside role="complementary"></aside>

<footer role="contentinfo"></footer>
```

Tengaran ini untuk memudahkan pembaca layar untuk menavigasikan fokus elemen berdasarkan tengaran. Sehingga dengan mudah pembaca layar untuk menyebutkan ada dimana saya sekarang ini.


## Judul adalah tengaran bawaan

Membuat tengaran dalam setiap tag HTML kita itu penting. Tetapi dengan meletakan judul yang terstruktur itu akan membuat pengalaman navigasi yang lebih baik. Karena dalam navigasi pembaca layar ada opsi untuk langsung lompat ke bagian tengaran tertentu langsung menuju bagian yang ingin ditelusuri. Biasanya di awal sebuah situs web, ada bagian "lanjut ke konten" atau "__skip to main content__".


## aria-label

ARIA yang paling umum digunakan adalah `aria-label`. Karena dalam penerapannya, developer hanya perlu menempatkannya sebagai atribut tambahan dalam elemen. Sebagai contohnya bisa dilihat sebagai berikut

```
<button arial-label="tutup">X</button>

<input id="name" name="name" aria-label="nama" required>
```

Dalam kasus di atas jika kita tidak menempatkan `aria-label` maka element tersebut tidak akan dikenali sebagai label-nya. Hal itu akan sangat membingungkan jika kita berada dalam sebuah input tanpa instruksi.


## aria-live

`aria-live` digunakan untuk tag HTML yang membutuhkan pembaruan konten. Sembulan (Pop up) adalah salah satu contoh untuk penggunaan `aria-live`.  Ada 3 jenis `aria-live` yang bisa digunakan

```html
<div aria-live="off"></div>

<div aria-live="polite"></div>

<div aria-live="assertive"></div>
```

Sedikit tambahan, `aria-atomic` juga perlu untuk ditambahkan ke dalam tag HTML jika konten dalam `aria-live` membutuhkan untuk diketahui oleh __Assistive Tecnology__

Penambahan atribut `role="alert"` bisa juga ditambahkan untuk menandakan bahwa __popup__ adalah juga sebagai tengaran.

## `aria-required`

Untuk memberi tahu pembaca layar bahwa input harus diisi, maka bisa menggunakan atribut `aria-required="true"` atau cukup dengan atribut "required"

```html
<input aria-required="true" required>
```

## `aria-hidden`

Terkadang ada bagian tag HTML yang tidak perlu kita sebutkan atau tidak perlu di deteksi oleh pembaca layar. Tetapi dalam antar-muka masih dibutuhkan untuk ditampilkan. Biasanya hanya untuk hiasan atau tambahan informasi. Kita bisa menggunakan atribut `aria-hidden` untuk keperluan ini.

```html
<div aria-hidden="true"></div>
```

##

## `tabindex`

Agar tag HTML dapat terfokus dengan `tab`, maka kita juga perlu untuk menambahka `tabindex` dalam atributnya.

```html
<div tabindex="0"></div>
<div tabindex="-1"></div>
```
Nilai 0 untuk navigasi tab secara bawaan. Nilai -1 untuk navigasi tab secara programatik menggunakan JS.


## Atribut `lang`

Salah satu atribut yang mungkin tidak banyak developer peduli adalah atribut tag HTML `lang`. `lang` adalah kependekan dari __language__, berfungsi sebagai pemberitahu kepada pembaca layar bahwa konten yang berada dalam tag HTML tersebut harus diucapakan dalam bahasa tertentu. Akan dijabarkan di contoh di bawah

```html
<html lang="id">
<head>
  <title>Contoh penggunaan lang</title>
</head>

  <button>Tutup</button>
  <button lang="en">Close</button>

</html>

```


## Kata-kata terakhir

"Tanpa ARIA itu lebih baik dari pada menggunakan ARIA sembarangan" - oleh RahmaUt

## Referensi

1. [https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
2. [https://www.powermapper.com/tests/screen-readers/aria/](https://www.powermapper.com/tests/screen-readers/aria/)
3. [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
4. [https://www.powermapper.com/tests/screen-readers/aria/](https://www.powermapper.com/tests/screen-readers/aria/)