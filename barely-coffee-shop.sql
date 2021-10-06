-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Okt 2021 pada 11.53
-- Versi server: 10.1.35-MariaDB
-- Versi PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `barely-coffee-shop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name_category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name_category`) VALUES
(1, 'Favorite Product'),
(2, 'Coffee'),
(3, 'Non Coffee'),
(4, 'Foods');

-- --------------------------------------------------------

--
-- Struktur dari tabel `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `id_receiver` int(11) NOT NULL,
  `latest` enum('0','1') NOT NULL DEFAULT '1',
  `chat` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `deleted` enum('0','1','','') NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `chats`
--

INSERT INTO `chats` (`id`, `id_sender`, `id_receiver`, `latest`, `chat`, `image`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 20, 1, '1', 'Test', NULL, '1', '2021-09-24 06:42:07', '2021-09-24 06:42:32'),
(2, 20, 11, '1', ' Apa kabar? ', NULL, '1', '2021-09-24 06:44:13', '2021-09-24 06:44:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `detail` varchar(500) NOT NULL,
  `price` int(11) NOT NULL,
  `delivery` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `items`
--

INSERT INTO `items` (`id`, `name`, `image`, `detail`, `price`, `delivery`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 'Espresso', 'image-1623773464904.jpg', 'Espreso adalah minuman yang dihasilkan dengan mengekstraksi biji kopi yang sudah digiling dengan menyemburkan air panas di bawah tekanan tinggi. Espresso berasal dari Bahasa Italia yang berarti express atau \"cepat\" karena dibuat untuk disajikan dengan segera kepada pelanggan.', 15000, 'Everyday', 50, '2021-06-15 16:11:04', '2021-06-15 16:11:59'),
(2, 'Cappuccino', 'image-1623773699548.jpg', 'Cappuccino adalah minuman khas Italia yang dibuat dari espresso dan susu, tetapi referensi lain juga ada yang menyebutkan bahwa kapucino berawal dari biji biji kopi tentara Turki yang tertinggal setelah peperangan yang di pimpin oleh Kara Mustapha Pasha di Wina, Austria melawan tentara gabungan Polandia-Germania.', 20000, 'Everyday', 100, '2021-06-15 16:14:59', NULL),
(3, 'Caffè latte', 'image-1623773858569.jpg', 'Caffè latte adalah espresso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte adalah 2:1.', 22000, 'Everyday', 75, '2021-06-15 16:17:38', NULL),
(4, 'V60', 'image-1623773994161.jpg', 'V60 merupakan metode untuk meyeduh kopi manual yang sering digunakan di kafe. Menyeduh kopi dengan metode V60 caranya cukup sederhana. Caranya dengan menuangkan air panas secara perlahan dengan gerakan melingkar di sekitar bubuk kopi.', 25000, 'Everyday', 75, '2021-06-15 16:19:54', NULL),
(5, 'AeroPress ', 'image-1623774124188.jpg', 'AeroPress adalah pembuat kopi manual yang ditemukan oleh Alan Adler, pendiri AeroPress, Inc. Ini terdiri dari ruang silinder, dan pendorong dengan segel silikon kedap udara, mirip dengan jarum suntik. Biji kopi bubuk dan air direndam di dalamnya, kemudian dipaksa melalui filter dengan menekan plunger melalui chamber.', 25000, 'Everyday', 75, '2021-06-15 16:22:04', NULL),
(6, 'Mocktail', 'image-1623774548724.jpg', 'Mocktail adalah Minuman campuran non-alkohol adalah minuman bergaya koktail yang dibuat tanpa bahan-bahan alkohol. Koktail naik popularitas selama 1980-an, dan menjadi semakin populer di tahun 2000-an. Penggunaan koktail telah berkembang biak jauh ke dalam budaya minum.', 23000, 'Everyday', 75, '2021-06-15 16:23:35', '2021-06-15 16:29:08'),
(7, 'Es Kopi Susu Kekinian', 'image-1623774619044.jpg', 'Es kopi susu kekinian adalah istilah untuk mencakup jenis racikan kopi yang mengandung susu dan gula aren. Racikan ini umumnya disajikan dingin dengan es dalam kemasan gelas plastik bertutup. Perbedaan mendasar antara kopi susu kekinian dan kopi susu tradisional ada pada penggunaan susunya.', 23000, 'Everyday', 150, '2021-06-15 16:26:27', '2021-06-15 16:30:19'),
(8, 'Taro Latte', 'image-1623774704386.jpg', 'Taro Latte merupakan minuman ekstrak buah talas yang dihias susu yang di-froth. Tak hanya aroma yang menggugah selera, rasa yang disajikan oleh Taro Latte pun tak mengecewakan.', 21000, 'Everyday', 150, '2021-06-15 16:31:44', NULL),
(9, 'Matcha Latte', 'image-1623774842484.jpg', 'Matcha Latte terbuat dari bubuk matcha yang berasal dari daun teh hijau yang proses pengeringannya dengan cara pendinginan.\nSedangkan untuk Latte sendiri aslinya merupakan kopi yang dicampur dengan susu dan memiliki lapisan busa tipis di atasnya. Namun, karena ini adalah Matcha Latte, maka tidak menggunakan kopi. Di sini, Matcha dicampur dengan susu dan diberi lapisan busa tipis.\n\n', 21000, 'Everyday', 150, '2021-06-15 16:34:02', NULL),
(10, 'Coffe Mocktail', 'image-1623775057771.jpg', 'Coffee Mocktail adalah Minuman campuran non-alkohol menggunakan kopi bergaya koktail yang dibuat tanpa bahan-bahan alkohol.', 25000, 'Everyday', 150, '2021-06-15 16:37:37', NULL),
(11, 'Americano', 'image-1623775154432.jpg', 'Caffè Americano atau Amerikano adalah minuman kopi yang dibuat dengan mencampurkan satu seloki espresso dengan air panas. Air panas yang digunakan dalam minuman ini adalah sebanyak 6 hingga 8 ons.', 20000, 'Everyday', 150, '2021-06-15 16:39:14', NULL),
(12, 'Long Black', 'image-1623775219500.jpg', 'Long Black adalah salah satu jenis kopi yang umumnya tersedia di Australia dan Selandia Baru. Long Black mirip dengan Americano, tetapi memiliki aroma dan cita rasa yang lebih kuat. Secangkir long black dibuat dengan menuangkan dua seloki espreso atau ristreto ke atas air panas.', 20000, 'Everyday', 150, '2021-06-15 16:40:19', NULL),
(13, 'Caffè Macchiato', 'image-1623775347318.jpg', 'Caffè macchiato adalah minuman kopi yang dibuat dengan mencampurkan espresso dengan susu. Ada dua jenis macchiato yang biasanya disajikan, yaitu espresso macchiato dan latte macchiato. Espresso macchiato dibuat dengan menambahkan sedikit susu ke dalam segelas espresso.', 28000, 'Everyday', 150, '2021-06-15 16:42:27', NULL),
(14, 'Flat White', 'image-1623775502608.jpg', 'Flat White adalah minuman kopi yang terdiri dari espresso dengan microfoam (susu dikukus dengan kecil, gelembung halus dan konsistensi mengkilap atau beludru). Ini sebanding dengan latte , tetapi volumenya lebih kecil dan dengan lebih sedikit microfoam, oleh karena itu memiliki proporsi kopi yang lebih tinggi terhadap susu, dan susu yang lebih lembut dalam konsistensi – memungkinkan espresso mendominasi rasa, sambil didukung oleh susu.', 25000, 'Everyday', 150, '2021-06-15 16:45:02', NULL),
(15, 'Red Velvet Latte', 'image-1623775630394.jpg', 'Red Velvet Latte merupakan minuman ekstrak red velvet yang dihias susu yang di-froth. Tak hanya aroma yang menggugah selera, rasa yang disajikan oleh Red Velvet Latte pun tak mengecewakan.', 25000, 'Everyday', 150, '2021-06-15 16:47:10', NULL),
(16, 'Potato wedges', 'image-1623814756769.jpg', 'Kentang goreng adalah hidangan yang dibuat dari potongan-potongan kentang yang digoreng dalam minyak goreng panas. Di dalam menu rumah-rumah makan, kentang goreng yang dipotong panjang-panjang dan digoreng dalam keadaan terendam di dalam minyak goreng panas disebut French fries.', 18000, 'Everyday', 150, '2021-06-15 16:48:32', '2021-06-16 03:39:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `items_categories`
--

CREATE TABLE `items_categories` (
  `id` int(11) NOT NULL,
  `id_items` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `items_categories`
--

INSERT INTO `items_categories` (`id`, `id_items`, `id_category`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2021-06-15 16:11:05', NULL),
(2, 1, 5, '2021-06-15 16:11:05', NULL),
(3, 2, 2, '2021-06-15 16:14:59', NULL),
(4, 2, 1, '2021-06-15 16:15:00', NULL),
(5, 3, 2, '2021-06-15 16:17:38', NULL),
(6, 3, 1, '2021-06-15 16:17:38', NULL),
(7, 4, 2, '2021-06-15 16:19:54', NULL),
(8, 4, 1, '2021-06-15 16:19:55', NULL),
(9, 5, 2, '2021-06-15 16:22:04', NULL),
(10, 5, 1, '2021-06-15 16:22:04', NULL),
(11, 6, 3, '2021-06-15 16:23:36', NULL),
(12, 7, 2, '2021-06-15 16:26:27', NULL),
(13, 7, 1, '2021-06-15 16:26:27', NULL),
(14, 8, 3, '2021-06-15 16:31:45', NULL),
(15, 8, 1, '2021-06-15 16:31:45', NULL),
(16, 9, 3, '2021-06-15 16:34:02', NULL),
(17, 9, 1, '2021-06-15 16:34:03', NULL),
(18, 10, 2, '2021-06-15 16:37:38', NULL),
(19, 10, 1, '2021-06-15 16:37:38', NULL),
(20, 11, 2, '2021-06-15 16:39:14', NULL),
(21, 11, 1, '2021-06-15 16:39:15', NULL),
(22, 12, 2, '2021-06-15 16:40:20', NULL),
(23, 12, 1, '2021-06-15 16:40:20', NULL),
(24, 13, 2, '2021-06-15 16:42:27', NULL),
(25, 13, 1, '2021-06-15 16:42:27', NULL),
(26, 14, 2, '2021-06-15 16:45:02', NULL),
(27, 14, 1, '2021-06-15 16:45:03', NULL),
(28, 15, 3, '2021-06-15 16:47:10', NULL),
(29, 16, 4, '2021-06-15 16:48:32', NULL),
(30, 16, 1, '2021-06-15 16:48:32', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `items_variants`
--

CREATE TABLE `items_variants` (
  `id` int(11) NOT NULL,
  `id_items` int(11) NOT NULL,
  `id_variants` int(11) NOT NULL,
  `additional_price` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `items_variants`
--

INSERT INTO `items_variants` (`id`, `id_items`, `id_variants`, `additional_price`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, '2021-06-20 08:38:26', NULL),
(2, 1, 2, 2000, '2021-06-20 08:38:26', NULL),
(3, 2, 1, 0, '2021-06-20 08:38:59', NULL),
(4, 2, 2, 2000, '2021-06-20 08:38:59', NULL),
(5, 3, 1, 0, '2021-06-20 08:39:43', NULL),
(6, 3, 3, 4000, '2021-06-20 08:39:43', NULL),
(7, 4, 1, 0, '2021-06-20 08:39:54', NULL),
(8, 5, 1, 0, '2021-06-20 08:40:11', NULL),
(9, 5, 2, 2000, '2021-06-20 08:40:11', NULL),
(10, 6, 1, 0, '2021-06-20 08:40:26', NULL),
(11, 6, 2, 2000, '2021-06-20 08:40:26', NULL),
(12, 7, 1, 0, '2021-06-20 08:40:42', NULL),
(13, 8, 1, 0, '2021-06-20 08:41:02', NULL),
(14, 9, 1, 0, '2021-06-20 08:41:10', NULL),
(15, 10, 1, 0, '2021-06-20 08:41:18', NULL),
(16, 11, 1, 0, '2021-06-20 08:41:40', NULL),
(17, 11, 2, 2000, '2021-06-20 08:41:40', NULL),
(18, 12, 1, 0, '2021-06-20 08:41:49', NULL),
(19, 13, 1, 0, '2021-06-20 08:42:01', NULL),
(20, 13, 2, 2000, '2021-06-20 08:42:01', NULL),
(21, 14, 1, 0, '2021-06-20 08:42:10', NULL),
(22, 15, 1, 0, '2021-06-20 08:42:24', NULL),
(23, 15, 3, 4000, '2021-06-20 08:42:24', NULL),
(24, 16, 1, 0, '2021-06-20 08:42:46', NULL),
(25, 16, 3, 4000, '2021-06-20 08:42:46', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `item_transactions`
--

CREATE TABLE `item_transactions` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `variants` varchar(11) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `id_transaction` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `code` varchar(100) NOT NULL,
  `total` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `shipping_cost` int(11) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `delivery_method` varchar(50) NOT NULL DEFAULT 'Dine in',
  `payment_method` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `position` int(1) NOT NULL DEFAULT '0',
  `gender` enum('male','female') NOT NULL,
  `date_birth` date NOT NULL DEFAULT '0000-00-00',
  `password` varchar(255) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `display_name` varchar(100) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `phone_number`, `position`, `gender`, `date_birth`, `password`, `image`, `address`, `display_name`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 'example@admin.com', '087898789878', 1, 'male', '0000-00-00', '$2b$10$5txtT4eu7FmOi54FLUjHluqEE7kbjrLuE2fMiT.DZszTw6DdNxH1.', 'image-1624527210528.png', 'Rumah Jauh', 'Admin', NULL, NULL, '2021-06-14 12:54:41', '2021-08-18 08:16:58'),
(11, 'zidan.muh88@gmail.co.id', '0895358663696', 0, 'male', '2001-12-21', '$2b$10$jYcrfbCkSXabbwrnyNRWNOnA9T3/b/FtCAtNaV9R64EqgSD5yoXPS', 'image-1627445347355.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Zidan Rizky', 'Zidan', 'Muhammad', '2021-06-18 10:42:07', '2021-08-18 08:17:35'),
(20, 'zidan.muh69@gmail.com', '0895358663671', 1, 'male', '2001-12-13', '$2b$10$PFNPe.QqoLDRPqzLXf8tie2oJMZSSjHLaVkqCB83aycdLpj3Dl6jO', 'image-1632304676141.jpg', 'Jl Gn Sahari Ruko Marina Mangga Dua Bl F/1,Gunung Sahari Utara', 'Muhammad Rizky Ramadhan', 'Muhammad', 'Zidan', '2021-07-08 14:11:40', '2021-09-22 09:57:56'),
(21, 'zidan.muh40@gmail.com', '087898789878', 0, 'male', '2001-12-13', '$2b$10$FNkjw2hiBnMBGG8X2c6syuLzEV84sRvPoFPohcVSXu2mtExc6x4aG', 'image-1631675499755.jpg', 'null', 'Zidan Muhammad', NULL, NULL, '2021-08-15 12:09:13', '2021-09-15 03:11:39'),
(40, 'indihome@mail.com', '089890009809', 0, 'male', '0000-00-00', '$2b$10$OyW4wymKHYM1JrtRq0GYtOt221bayZiGDkzYjZ.ajfiKA4ciM9j7S', NULL, NULL, 'User', NULL, NULL, '2021-09-22 07:42:38', '2021-09-22 07:43:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `variants`
--

CREATE TABLE `variants` (
  `id` int(11) NOT NULL,
  `name_variant` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `variants`
--

INSERT INTO `variants` (`id`, `name_variant`) VALUES
(1, 'R'),
(2, 'L'),
(3, 'XL');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `items_categories`
--
ALTER TABLE `items_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `items_variants`
--
ALTER TABLE `items_variants`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `item_transactions`
--
ALTER TABLE `item_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `items_categories`
--
ALTER TABLE `items_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `items_variants`
--
ALTER TABLE `items_variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `item_transactions`
--
ALTER TABLE `item_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT untuk tabel `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
