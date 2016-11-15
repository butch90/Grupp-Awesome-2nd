-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.16-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5127
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table bilverkstadsql.customers: ~2 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`firstname`, `lastname`, `address`, `phone`, `email`, `birthdate`, `id`) VALUES
	('Per', 'Persson', 'Persgatan 1', '332211', 'per@persson.se', '2016-11-15', 1),
	('Nils', 'Nilsson', 'Nilsgatan 1', '443322', 'nils@nilsson.se', '2016-11-14', 2);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping data for table bilverkstadsql.employees: ~2 rows (approximately)
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` (`firstname`, `lastname`, `address`, `phone`, `email`, `birthdate`, `vacationstart`, `vacationend`, `title`, `id`) VALUES
	('Sven', 'Svensson', 'Svensgatan 1', '112233', 'sven@svensson.se', '2016-11-15', NULL, NULL, 'mechanic', 1),
	('Jöns', 'Jönsson', 'Jönsgatan 1', '554433', 'jons@jonsson.se', '2016-11-13', NULL, NULL, 'painter', 2);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;

-- Dumping data for table bilverkstadsql.orderrow: ~2 rows (approximately)
/*!40000 ALTER TABLE `orderrow` DISABLE KEYS */;
INSERT INTO `orderrow` (`service`, `partId`, `employees`, `parts`, `price`, `hours`, `id`) VALUES
	('repair', '3', 2, 2, '300', '1', 1),
	('paint', '4', 1, 1, '600', '2', 2);
/*!40000 ALTER TABLE `orderrow` ENABLE KEYS */;

-- Dumping data for table bilverkstadsql.orders: ~2 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`reg`, `model`, `date`, `id`, `customer`, `orderrows`, `status`) VALUES
	('abc123', 'volvo', '2016-11-15', 1, 1, 1, 'ongoing'),
	('cba321', 'saab', '2016-11-14', 2, 2, 2, 'ongoing');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping data for table bilverkstadsql.parts: ~2 rows (approximately)
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` (`name`, `partId`, `models`, `price`, `stock`, `id`) VALUES
	('part1', '1', 'volvo', '100', '10', 1),
	('part2', '2', 'saab', '200', '20', 2);
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
