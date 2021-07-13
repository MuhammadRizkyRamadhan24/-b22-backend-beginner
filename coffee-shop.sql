-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Jul 2021 pada 08.30
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
-- Database: `coffee-shop`
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
(4, 'Foods'),
(5, 'Add-on');

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

--
-- Dumping data untuk tabel `item_transactions`
--

INSERT INTO `item_transactions` (`id`, `name`, `price`, `variants`, `amount`, `id_item`, `id_transaction`, `created_at`, `updated_at`) VALUES
(1, 'Espresso', 17000, 'L', 1, 1, 1, '2021-06-20 08:25:45', NULL),
(2, 'V60', 27000, 'L', 1, 4, 1, '2021-06-20 08:25:45', NULL),
(3, 'Espresso', 17000, 'L', 1, 1, 2, '2021-06-20 08:25:59', NULL),
(4, 'V60', 27000, 'L', 1, 4, 2, '2021-06-20 08:25:59', NULL),
(45, 'Taro Latte', 21000, 'R', 2, 8, 34, '2021-06-24 12:42:15', NULL),
(46, 'Americano', 22000, 'L', 1, 11, 34, '2021-06-24 12:42:15', NULL),
(47, 'AeroPress ', 27000, 'L', 3, 5, 35, '2021-06-25 02:23:48', NULL),
(48, 'Coffe Mocktail', 25000, 'R', 2, 10, 35, '2021-06-25 02:23:48', NULL),
(49, 'AeroPress ', 27000, 'L', 2, 5, 36, '2021-06-25 11:57:08', NULL),
(70, 'Caffè latte', 26000, 'XL', 1, 3, 50, '2021-07-10 15:02:18', NULL),
(71, 'Caffè latte', 26000, 'XL', 2, 3, 51, '2021-07-10 15:03:34', NULL),
(72, 'Mocktail', 25000, 'L', 1, 6, 52, '2021-07-10 15:07:49', NULL),
(73, 'Mocktail', 25000, 'L', 5, 6, 53, '2021-07-10 15:14:12', NULL),
(75, 'Potato wedges', 22000, 'XL', 3, 16, 55, '2021-07-10 15:21:37', NULL),
(76, 'Caffè latte', 26000, 'XL', 1, 3, 56, '2021-07-10 15:28:10', NULL),
(79, 'Cappuccino', 22000, 'L', 3, 2, 59, '2021-07-12 03:23:12', NULL),
(84, 'Cappuccino', 22000, 'L', 2, 2, 61, '2021-07-12 04:36:40', NULL),
(87, 'Americano', 20000, 'R', 1, 11, 64, '2021-07-12 16:48:18', NULL),
(88, 'Cappuccino', 20000, 'R', 3, 2, 65, '2021-07-13 03:07:44', NULL),
(89, 'Cappuccino', 20000, 'R', 1, 2, 66, '2021-07-13 04:55:18', NULL);

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
  `delivery_method` varchar(50) NOT NULL,
  `payment_method` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `code`, `total`, `tax`, `shipping_cost`, `shipping_address`, `delivery_method`, `payment_method`, `id_user`, `created_at`, `updated_at`) VALUES
(1, 'CS/2062021/7571/1', 44000, 4400, 10000, 'Rumah Jauh', '', 'Bank', 1, '2021-06-20 08:25:45', NULL),
(2, 'CS/2062021/7231/1', 44000, 4400, 10000, 'Rumah Jauh', '', 'Bank', 1, '2021-06-20 08:25:59', NULL),
(34, 'CS/2462021/6691/12', 80400, 6400, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', '', 'Bank', 12, '2021-06-24 12:42:15', NULL),
(35, 'CS/2562021/1449/13', 154100, 13100, 10000, 'Ngendi Bae', '', 'Credit Card', 13, '2021-06-25 02:23:47', NULL),
(36, 'CS/2562021/3674/12', 69400, 5400, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', '', 'Credit Card', 12, '2021-06-25 11:57:07', NULL),
(50, 'CS/1072021/7092/11', 38600, 2600, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Pick up at store', 'Card', 11, '2021-07-10 15:02:18', NULL),
(51, 'CS/1072021/5403/11', 67200, 5200, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Pick up at store', 'Bank', 11, '2021-07-10 15:03:34', NULL),
(52, 'CS/1072021/7019/11', 37500, 2500, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Dine in', 'Bank', 11, '2021-07-10 15:07:49', NULL),
(53, 'CS/1072021/3795/11', 147500, 12500, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Pick up at store', 'Card', 11, '2021-07-10 15:14:12', NULL),
(55, 'CS/1072021/8675/11', 82600, 6600, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Door delivery', 'Bank', 11, '2021-07-10 15:21:37', NULL),
(56, 'CS/1072021/5080/11', 38600, 2600, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Pick up at store', 'Bank', 11, '2021-07-10 15:28:10', NULL),
(59, 'CS/1272021/5907/11', 82600, 6600, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Dine in', 'Bank', 11, '2021-07-12 03:23:12', NULL),
(61, 'CS/1272021/8942/11', 58400, 4400, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Pick up at store', 'COD', 11, '2021-07-12 04:36:40', NULL),
(64, 'CS/1272021/1393/11', 32000, 2000, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Door delivery', 'COD', 11, '2021-07-12 16:48:18', NULL),
(65, 'CS/1372021/7556/11', 76000, 6000, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Pick up at store', 'Bank', 11, '2021-07-13 03:07:44', NULL),
(66, 'CS/1372021/4935/11', 32000, 2000, 10000, 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Dine in', 'Card', 11, '2021-07-13 04:55:17', NULL);

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
  `date_birth` date NOT NULL,
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
(1, 'example@admin.com', '087898789878', 1, 'male', '0000-00-00', '$2b$10$5txtT4eu7FmOi54FLUjHluqEE7kbjrLuE2fMiT.DZszTw6DdNxH1.', 'image-1624527210528.png', 'Rumah Jauh', NULL, NULL, NULL, '2021-06-14 12:54:41', '2021-06-24 09:34:05'),
(2, 'zidan@zidan.id', '081234567890', 1, 'male', '0000-00-00', '$2b$10$JKBXY/d1v2V.Lr3.p8kyseW9YF9nVgSJL7bm4OkQofCa125M3uWna', 'image-1623823786254.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', NULL, NULL, NULL, '2021-06-15 09:57:47', '2021-06-16 06:09:46'),
(8, 'example@user.com', '088888888888', 0, 'male', '0000-00-00', '$2b$10$WwGt2ifo30ojq/5ewDvwCusILItTygtsy5dCC6KEwK6vqp6iroYAi', 'image-1623824133145.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', NULL, NULL, NULL, '2021-06-16 06:08:15', '2021-06-16 06:29:30'),
(9, 'user@user.co.id', '08989000980', 0, 'male', '0000-00-00', '$2b$10$2.BpkmRgMZg6iX6yGtHyLO7ukKAkM/iO5hlMkIdS9Kpz7bN33spnO', NULL, NULL, NULL, NULL, NULL, '2021-06-16 08:19:35', NULL),
(10, 'user@user.co.idn', '089890009809', 0, 'male', '0000-00-00', '$2b$10$r74rJpK1SdbOVQTxw8YsHuqnA9dOg33PAbRth6v6LXvcJ.zQm0.n6', NULL, NULL, NULL, NULL, NULL, '2021-06-18 08:48:42', NULL),
(11, 'zidan.muh88@gmail.com', '0895358663696', 0, 'male', '2001-12-13', '$2b$10$H72B0Ac2xahNGdDiDiwtn.CIxKq/4FxH.YtgIUSBd9nrTNl2JOUv.', 'image-1626151319150.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Zidan', 'Zidan', 'Muhammad', '2021-06-18 10:42:07', '2021-07-13 04:41:59'),
(12, 'test1@gmail.com', '089987765543', 0, 'male', '0000-00-00', '$2b$10$gkIsxy2.QSlbhqGDd3l9/eY3Jz5JXMFqrus3xjygvqC6Mbf5bU6QK', 'image-1624621771036.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Hello hehe', 'Test1', 'One', '2021-06-24 11:54:00', '2021-06-25 11:51:11'),
(13, 'exp@gmail.com', '123456789100', 0, 'male', '0000-00-00', '$2b$10$UaBP4Tl36Qbq0f/vCWlqseT5MnNRlpxI8VmASZY.bxpMZY.FzxqF2', 'image-1624587765458.jpg', 'Ngendi Bae', 'EXP', 'exp', 'yeye', '2021-06-25 02:21:58', '2021-06-25 02:22:45'),
(14, 'contoh@aja.com', '098098098098', 0, 'male', '0000-00-00', '$2b$10$XmSTjCT.sKtIqJD9WbqUyeN9eCDYM1yWy0EpjnaN5Up0kWZHTENYm', 'image-1624850836622.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Contoh', 'satu', 'dua', '2021-06-28 03:24:47', '2021-06-28 03:27:16'),
(17, 'exp@exp.exp', '089089876876', 0, 'male', '0000-00-00', '$2b$10$ZJvcsccuSmn7SuCT8OmgpOUy6eawWYrJ9PZiuSPp9wI7IoF6cmOiy', 'image-1624861573015.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'Example12', 'example', '12', '2021-06-28 06:25:17', '2021-06-28 06:26:13'),
(18, 'example@yahoo.com', '098098098089', 0, 'male', '0000-00-00', '$2b$10$vy8Yo/NNLDrLXWhSSvQnQe3GQKLYu87EKdvnld96M32UakesGSCp2', NULL, NULL, NULL, NULL, NULL, '2021-06-28 06:53:55', NULL),
(19, 'example@yahooo.com', '098098098098', 0, 'male', '0000-00-00', '$2b$10$oY/Lwc16/qI4wV8jmy2hTOa7Q0sAjMGOj.QtM7xjIbRgijC1Tmvy6', 'image-1624863447907.jpg', 'Komplek Rukan Graha Cempaka Mas C 2 / 14, Jl. Letjend. Suprapto (Cempaka Mas Timur), Jakarta Pusat', 'contoh', '1', '2', '2021-06-28 06:55:33', '2021-06-28 06:57:27'),
(20, 'zidan.muh69@gmail.com', '0895358663671', 0, 'male', '2021-07-18', '$2b$10$zx2OfyQGyaULTRXh1anpee7MjH1UlPIEx6cmiCC8zFaTTCe8NeT9q', 'image-1626152914509.jpg', 'Jl Gn Sahari Ruko Marina Mangga Dua Bl F/1,Gunung Sahari Utara', 'Muhammad', NULL, NULL, '2021-07-08 14:11:40', '2021-07-13 05:08:34'),
(21, 'gudang@garam.com', '089765432109', 0, 'male', '0000-00-00', '$2b$10$VClv7pUsZCY15E0TmDnnzOFlt1Tn5PZhV8v1TQB5HIt0Bd0KG4682', NULL, NULL, NULL, NULL, NULL, '2021-07-12 16:52:46', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
