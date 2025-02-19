-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2025 at 10:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `device_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `assignment_id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `device_id` int(11) DEFAULT NULL,
  `last_device_user` varchar(100) DEFAULT NULL,
  `date_return` date DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `release_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_unit`
--

CREATE TABLE `business_unit` (
  `bu_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `business_unit`
--

INSERT INTO `business_unit` (`bu_id`, `name`) VALUES
(2, 'ALLDAY MARTS INC.'),
(7, 'ALLDAY RETAIL CONCEPTS INC.'),
(4, 'ALLEASY, INC.'),
(8, 'ALLGREEN RETAIL, INC.'),
(5, 'ALLHOME CORP.'),
(10, 'CMSTAR MANAGEMENT, INC.'),
(1, 'FAMILY SHOPPERS UNLIMITED, INC.'),
(6, 'PARALLAX, INC.'),
(3, 'THE VILLAGE SERVER, INC.'),
(9, 'TREM FRANCH CO.');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `name`) VALUES
(12, 'ACCOUNTING'),
(13, 'ACCOUNTING - INVENTORY'),
(14, 'AUDIT'),
(4, 'BUSINESS SYSTEM'),
(7, 'CENTRAL - OPERATIONS'),
(6, 'CENTRAL OPERATIONS'),
(21, 'E- COMMERCE'),
(29, 'ENGINEERING'),
(16, 'FACILITIES MANAGEMENT'),
(9, 'FINANCE'),
(24, 'FINANCE - CREDIT & COLLECTION'),
(17, 'FINANCE - OPERATIONS'),
(18, 'HUMAN RESOURCES'),
(23, 'INFORMATION TECHNOLOGY'),
(27, 'INTERIOR DESIGN'),
(2, 'LEGAL'),
(11, 'LOST AND PREVENTION DEPARTMENT'),
(8, 'MARKETING'),
(1, 'MERCHANDISING'),
(28, 'MIS'),
(19, 'PLANNING'),
(10, 'PURCHASING'),
(25, 'REPLENISHMENT'),
(3, 'STORE - OPERATIONS'),
(20, 'STORE - OPERATIONS / PLANNING'),
(5, 'SUPPLY CHAIN'),
(22, 'TRAINING'),
(26, 'VISUALS'),
(15, 'WAREHOUSE - DC');

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

CREATE TABLE `designation` (
  `designation_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `designation`
--

INSERT INTO `designation` (`designation_id`, `name`) VALUES
(79, '64 SOMBRERO OPERATION'),
(76, 'A CCOUNTING SUPERVISOR'),
(140, 'ACCOUNTING'),
(31, 'ACCOUNTING ASSISTANT'),
(116, 'ACCOUNTING LPD'),
(107, 'ACCOUNTING OFFICER'),
(58, 'ACCOUNTING SUPERVISOR'),
(19, 'AREA HEAD'),
(47, 'AREA MANAGER'),
(99, 'ASSISTANT'),
(92, 'ASSISTANT MERCHANDISING'),
(72, 'AUDIT STAFF'),
(30, 'AUDITOR'),
(103, 'AUDITOR ASSISTANT'),
(137, 'BAKEMYDAY HEAD '),
(101, 'BILLING'),
(131, 'BILLING/ CREDIT AND COLLECTION SPECIALIST'),
(24, 'BRANCH HEAD'),
(66, 'BRANCH HEAD -CINEMA MALOLOS'),
(88, 'BRANCH HEAD -CINEMA SJDM'),
(110, 'BRANCH HEAD -KC FLORIAD'),
(106, 'BRANCH HEAD -KC ILOILO'),
(122, 'BRANCH HEAD -KC NAGA'),
(124, 'BUYER'),
(94, 'BUYER MERCHANDISING'),
(39, 'CATEGORY BUYER'),
(43, 'CATEGORY MANAGER'),
(141, 'CHAT SUPPORT'),
(100, 'CLUSTER HEAD OPERATIOMINTAL'),
(87, 'CLUSTER HEAD OPERATION'),
(126, 'COMPLIANCE AUDIT LEAD'),
(41, 'COMPLIANCE AUDIT STAFF'),
(138, 'CONSULTANT'),
(113, 'CONTROL TOWER LEAD'),
(105, 'CORP. CHEF BRITANNY DAANGHARI'),
(102, 'CREDIT SALES'),
(96, 'DATA ENCODER'),
(133, 'DIVISION HEAD MERCHANDISING'),
(77, 'DIY'),
(70, 'ECOM'),
(135, 'ECOMM - CSR'),
(123, 'ECOMM LEAD'),
(60, 'EXECUTIVE ASSISTANT'),
(48, 'FACILITIES ENGINEER'),
(81, 'FACILITIES ENGINEER (M2)'),
(46, 'FINANCE'),
(112, 'FINANCE CHECKOUT HEAD '),
(28, 'FINANCE STAFF'),
(145, 'FM HELPDESK'),
(25, 'GRAPHIC ARTIST'),
(136, 'GRAPHIC ARTIST - WCC'),
(65, 'HELPDESK - ADMIN'),
(74, 'HR'),
(108, 'HR ADMIN ASSISTANT'),
(69, 'HR HEAD'),
(54, 'HR RECRUITMENT'),
(97, 'HR RECRUITMENT ASSISTANT'),
(85, 'HRD - TRAINING'),
(67, 'HUMAN RESOURCE'),
(38, 'INVENTORY CONTROL  '),
(59, 'INVENTORY CONTROL ANALYST'),
(34, 'INVENTORY CONTROL SUPERVISOR'),
(45, 'INVENTORY SUPERVISOR'),
(75, 'INVENTORYCONTROLLER'),
(134, 'IT'),
(20, 'IT - OSS'),
(36, 'IT - OSS GENTRI'),
(121, 'IT - OSS KAWIT'),
(142, 'IT - SUPPORT'),
(61, 'IT SPECIALIST TELCO COORDINATOR'),
(132, 'JR SUPERVISOR QUEZON CITY'),
(104, 'JR. MULTIMEDIA ARTIST'),
(50, 'JUNIOR COST ACCOUNTANT'),
(125, 'JUNIOR DESIGNER'),
(90, 'KAL / NN CLUSTER HEAD'),
(18, 'LITIGATION LAWYER'),
(21, 'LOGISTICS AND WAREHOUSE MANAGER'),
(32, 'LOSS AND PREVENTION AUDIT '),
(93, 'LOSS AND PREVENTION AUDIT SUPERVISOR'),
(117, 'LS FUNCTIONAL'),
(78, 'MANAGER'),
(98, 'MAPI - GRAPHIC ARTIST'),
(26, 'MARKETING ASSISTANT'),
(27, 'MARKETING ASSISTANT HQ'),
(83, 'MARKETING HEAD'),
(95, 'MARKETING LEAD'),
(35, 'MARKETING OFFICER'),
(51, 'MARKETING SUPERVISOR - DIGITAL LEAD'),
(86, 'MDC'),
(128, 'MERCH BUYER'),
(53, 'MERCHANDISING'),
(62, 'MERCHANDISING HEAD'),
(33, 'MERCHANDISING MANAGER'),
(52, 'OPERATION / FINANCE HEAD'),
(49, 'OPERATION ASSISTANT'),
(80, 'OPERATION FINANCE SUPERVISOR'),
(42, 'OPERATION HEAD'),
(127, 'OPERATION HEAD FOOD GROUP'),
(111, 'OPS ASSISTANT'),
(55, 'PLANNING LEAD'),
(91, 'PRIVATE LABEL MANAGER'),
(68, 'PROJECT TEAM SSA'),
(57, 'PURCHASING'),
(29, 'PURCHASING HEAD'),
(144, 'QS ENGINEERING'),
(84, 'REGIONAL STORE SUPERVISOR ADMIN'),
(109, 'REPLENISHMENT ANALYST'),
(143, 'REPLENISHMENT DEPT'),
(139, 'REPLENISHMENT SUPERVISOR'),
(23, 'RIDER DISBURSEMENT & ADMIN'),
(129, 'SAP FUNCTIONAL'),
(115, 'SENIOR BRAND MARKETING MANAGER HQ'),
(130, 'SENIOR COST ACCOUNTANT'),
(40, 'SENIOR MARKETING LOCAL STORE'),
(120, 'SENIOR MARKETING WCC'),
(89, 'SSA'),
(56, 'STORE PLANNING LEAD'),
(82, 'SUPPLY CHAIN PLANNER'),
(64, 'SUPPLY CHAIN PLANNING'),
(44, 'SUPPLY CHAIN PLANNING HEAD'),
(37, 'SUPPLY CHAIN SUPERVISOR'),
(114, 'SYSTEM ADMINISTRATOR'),
(119, 'TEAM LEADER'),
(71, 'TRAINING ASSISTANT'),
(73, 'TRAINING OFFICER'),
(63, 'TRAINING SPECIALIST'),
(118, 'VISUAL DESIGNER'),
(22, 'WAREHOUSE SUPERVISOR');

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `device_id` int(11) NOT NULL,
  `device_name` varchar(255) NOT NULL,
  `serial_number` varchar(100) DEFAULT NULL,
  `device_type` varchar(50) NOT NULL,
  `brand_name` varchar(50) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `specifications` text DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`device_id`, `device_name`, `serial_number`, `device_type`, `brand_name`, `model`, `specifications`, `status`, `remarks`) VALUES
(1, 'APL-FSU-OPSL012', 'LANRKD004356426', 'Laptop', 'Asus', 'ROG Strix G512LU', 'i7; 1TB SSD; WIN 10 PRO; 16GB RAM; 64 BIT; GeForce', NULL, NULL),
(2, 'APL-AHC-OPSL006', 'LANRKD00436542E', 'Laptop', 'Asus', 'ROG Strix G512LU', 'i7; 1TB SSD; WIN 10 PRO; 16GB RAM; 64 BIT; GeForce', NULL, NULL),
(9, 'try', 'try', 'LAPTOP', 'DELL', 'try', 'try', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `device_account`
--

CREATE TABLE `device_account` (
  `device_account_id` int(11) NOT NULL,
  `dusername` varchar(255) DEFAULT NULL,
  `dpassword` varchar(255) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `device_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `mobile_no` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `emp_status` varchar(255) DEFAULT NULL,
  `date_resigned` text DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `designation_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `bu_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `last_name`, `first_name`, `middle_name`, `mobile_no`, `email`, `status`, `emp_status`, `date_resigned`, `department_id`, `designation_id`, `location_id`, `bu_id`) VALUES
(1, 'VITAR', 'KRISTINE', NULL, '9853738608', 'kristine.martinez@fsui.ph', 'Active', 'DIRECT', NULL, 1, 39, 12, 1),
(2, 'AGDON y ADALEM', 'MA. REGINE JOYCE', NULL, '9459903175', NULL, 'Active', 'DIRECT', NULL, 2, 18, 13, 2),
(3, 'ESPNO', 'ALMA', NULL, '9778195327', 'alma.espino@allday.ph', NULL, 'DIRECT', NULL, 3, 19, 14, 2),
(4, 'CHICA', 'SHERWIN', NULL, NULL, NULL, 'Resigned', 'DIRECT', NULL, 4, 20, 13, 2),
(5, 'CASTANEDA', 'CHERRY', NULL, '9176521828', NULL, 'Active', 'DIRECT', NULL, 5, 21, 15, 3),
(6, 'MONTENEGRO', 'MARK', NULL, '9756602509', NULL, 'Active', 'DIRECT', NULL, 3, 22, 15, 2),
(7, 'MEDINA', 'RYAN JAY', NULL, '56213528', NULL, 'Active', 'DIRECT', NULL, 6, 23, 16, 4),
(8, 'ONG', 'SHERMAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 20, 16, 5),
(9, 'AGUACITO', 'RACHELLE', NULL, '9458438098', NULL, 'Active', 'DIRECT', NULL, 3, 24, 17, 6),
(10, 'FULE', 'MARC NICHOLAS', NULL, '9064817611', NULL, 'Active', 'DIRECT', NULL, 7, 24, 18, 6),
(11, 'MANALO', 'ANDRE JUACQUIM', NULL, '9398801686', 'andrejuacquim.manalo@tvsi.ph', 'Resigned', 'DIRECT', '2024-05-13 00:00:00', 8, 25, 19, 3),
(12, 'MORELOS', 'JOEFRED', NULL, '9176396331', NULL, 'Active', 'DIRECT', NULL, 8, 25, 19, 3),
(13, 'CASTILLO', 'CHELSEA CAMERON', NULL, '9982344451', NULL, 'Active', 'DIRECT', NULL, 8, 26, 20, 3),
(14, 'PEREZ', 'JENNIFER', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 8, 27, 20, 3),
(15, 'DORADO', 'JOY', NULL, '9858694548', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 7),
(16, 'EUSEBIO', 'MILDRED', NULL, '9998864097', NULL, 'Active', 'DIRECT', NULL, 10, 29, 12, 3),
(17, 'GAGABU-AN', 'JAYMAR', NULL, '9269358255', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 2),
(18, 'LINGAT', 'ANGIE', NULL, '9184767212', NULL, 'Active', 'DIRECT', NULL, 11, 30, 12, 3),
(19, 'LUSTRACION', 'KATRINE JOY', NULL, '9366388235', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 5),
(20, 'PANGANIBAN', 'ROBILYN', NULL, '9918304204', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 5),
(21, 'URI', 'JIANNE ANTOINETTE', NULL, '9953161858', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 2),
(22, 'ABELLA', 'EMERIO MONICO', NULL, '9270427872', NULL, 'Active', 'DIRECT', NULL, 11, 32, 12, 1),
(23, 'ADEA', 'MARIE KRISTINE', NULL, '9985848950', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 1),
(24, 'ADORACION', 'MICHAEL', NULL, '9185674975', NULL, 'Active', 'DIRECT', NULL, 13, 34, 12, 7),
(25, 'AGNO', 'AYRIS CRISELDA', NULL, '9624426933', NULL, 'Active', 'DIRECT', NULL, 8, 35, 12, 2),
(26, 'ALLAREY', 'JOHN CHRISTIAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 36, 12, 5),
(27, 'ALONSAGAY', 'KIMBERLY', NULL, '9399128015', NULL, 'Active', 'DIRECT', NULL, 5, 37, 12, 8),
(28, 'AMIHAN', 'ANGEL MARIE GRACE', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(29, 'ANCHETA', 'GENNALYN', NULL, '9663890672', NULL, 'Resigned', 'DIRECT', NULL, 1, 39, 12, 5),
(30, 'ANCHETA', 'MA. FRANS ANN', NULL, '9959209910', NULL, 'Active', 'DIRECT', NULL, 8, 40, 12, 5),
(31, 'TRANSFERRED OUT DE RAMOS', 'ANGELBERT', NULL, '9455242633', NULL, 'Transferred Out', 'DIRECT', '2024-05-14 00:00:00', 12, 31, 12, 8),
(32, 'ANTIVOLA', 'MATTHEW', NULL, '9391951500', NULL, 'Active', 'DIRECT', NULL, 14, 41, 12, 1),
(33, 'ARCE', 'MA. ROSARIO', NULL, '9190811413', NULL, 'Active', 'DIRECT', NULL, 7, 42, 12, 3),
(34, 'ARINQUE', 'AIRA', NULL, '9154829262', NULL, 'Active', 'DIRECT', NULL, 1, 43, 12, 2),
(35, 'ARJONA', 'RACQUEL', NULL, '9985900402', NULL, 'Active', 'DIRECT', NULL, 5, 44, 12, 3),
(36, 'AUSTRIA', 'RUSSEL', NULL, '9985947102', NULL, 'Active', 'DIRECT', NULL, 4, 20, 12, 5),
(37, 'AZUPARDO', 'JHASMINE', NULL, '9175151093', NULL, 'Active', 'DIRECT', NULL, 15, 45, 12, 5),
(38, 'BADAJOS', 'MERYL', NULL, '9956238377', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 2),
(39, 'BALASA', 'DEBBIE ANN', NULL, '9367480516', NULL, 'Active', 'DIRECT', NULL, 9, 46, 12, 5),
(40, 'BALINGIT', 'JAMES', NULL, '9706130000', NULL, 'Active', 'DIRECT', NULL, 3, 47, 12, 7),
(41, 'BANTING', 'JOHN FREDERICK', NULL, '9507783869', NULL, 'Resigned', 'DIRECT', NULL, 16, 48, 12, 2),
(42, 'BARADAS', 'EAZEL', NULL, '9459758883', NULL, 'Active', 'DIRECT', NULL, 3, 49, 12, 3),
(43, 'BARADAS', 'NICOLE BENNET', NULL, '9568991621', NULL, 'Active', 'DIRECT', NULL, 12, 50, 12, 3),
(44, 'BARTOLOME', 'AIRA', NULL, '9190081816', NULL, 'Resigned', 'DIRECT', NULL, 8, 51, 12, 5),
(45, 'BAUTISTA', 'PRECIOUS EUNICE', NULL, '9085499793', NULL, 'Active', 'DIRECT', NULL, 16, 48, 12, 7),
(46, 'BAUZON-CRISOL', 'VANESSA', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 17, 52, 12, 5),
(47, 'BELLEZA', 'WILBERT SAUL', NULL, '9171732378', NULL, 'Active', 'DIRECT', NULL, 1, 53, 12, 1),
(48, 'BELTRAN', 'ALEAH JOY', NULL, NULL, NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 3),
(49, 'BENEMERITO', 'JHOBETH', NULL, '9452043991', NULL, 'Active', 'DIRECT', NULL, 19, 55, 12, 2),
(50, 'BERNARDO', 'IZZZY VRIELLA', NULL, '9682489306', NULL, 'Active', 'DIRECT', NULL, 20, 56, 12, 2),
(51, 'BERNUS', 'KIMBERLENE', NULL, '9162935187', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 9),
(52, 'BIO', 'MARIAN', NULL, '9974537678', NULL, 'Resigned', 'DIRECT', NULL, 10, 57, 12, 3),
(53, 'BODINO', 'ANGELA KAREN', NULL, '9157703204', NULL, 'Active', 'DIRECT', NULL, 8, 26, 12, 5),
(54, 'BOLAÑOS', 'JONA KRISTINE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 2),
(55, 'BONDOC', 'BERNARD', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 12, 58, 12, 2),
(56, 'BORDEOS', 'ESPERANZA', NULL, '9285693152', NULL, 'Resigned', 'DIRECT', '2024-05-08 00:00:00', 13, 59, 12, 5),
(57, 'BRIONES', 'RACHELLE', NULL, '9985947096', NULL, 'Active', 'DIRECT', NULL, 12, 60, 12, 5),
(58, 'BUENAFLOR', 'LEIZL', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 61, 12, 5),
(59, 'BULA', 'ARNE MARIE', NULL, '9196486745', NULL, 'Active', 'DIRECT', NULL, 1, 62, 12, 5),
(60, 'CABINTA', 'MICHALLE', NULL, '9954424005', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 10),
(61, 'CABRAL', 'ALYSSA MAY', NULL, '9156469773', NULL, 'Active', 'DIRECT', NULL, 1, 63, 12, 2),
(62, 'CANONOY', 'KIM DENISE', NULL, '9563200056', NULL, 'Active', 'DIRECT', NULL, 10, 64, 12, 3),
(63, 'CECE', 'CLARICE', NULL, '9705192084', NULL, 'Active', 'DIRECT', NULL, 1, 43, 12, 3),
(64, 'CEREMONIA', 'MARY GRACE', NULL, '9274153692', NULL, 'Active', 'DIRECT', NULL, 16, 65, 12, 3),
(65, 'COMENDADOR', 'JERLYN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(66, 'COMIA', 'MIKHAEL', NULL, '9063967483', NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(67, 'COOK', 'JAEN MARIE ', NULL, '9812790325', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 3),
(68, 'CRUZ', 'MA. ANGELICA', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 3, 66, 12, 6),
(69, 'DAEP', 'ERICA MARIE MILLEN', NULL, '9624200442', NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(70, 'DANGUPON', 'HARTMANN JOHN', NULL, '9158228020', NULL, 'Active', 'DIRECT', NULL, 18, 67, 12, 2),
(71, 'DE LA PEÑA', 'JOANA REZY', NULL, '9272510481', NULL, 'Active', 'DIRECT', NULL, 16, 48, 12, 7),
(72, 'DE LEON', 'RHODORA', NULL, '9989852874', NULL, 'Active', 'DIRECT', NULL, 17, 68, 12, 5),
(73, 'DE QUIROZ', 'JONALLY', NULL, '9103609931', NULL, 'Active', 'DIRECT', NULL, 18, 69, 12, 5),
(74, 'DELA CRUZ', 'BRYAN', NULL, '9319283489', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 2),
(75, 'DELFIN', 'JULIAN MIGUEL', NULL, '9176823223', NULL, 'Active', 'DIRECT', NULL, 21, 70, 12, 5),
(76, 'DELLO', 'HENRY', NULL, '9669037104', NULL, 'Active', 'DIRECT', NULL, 22, 71, 12, 5),
(77, 'DELLOMAS', 'RAVENE JAMES', NULL, '9184017126', NULL, 'Active', 'DIRECT', NULL, 16, 48, 12, 2),
(78, 'DELOS SANTOS', 'DANIELLE', NULL, '9655474762', NULL, 'Active', 'DIRECT', NULL, 14, 72, 12, 1),
(79, 'DELOS SANTOS', 'HAZEL', NULL, '9068454667', NULL, 'Active', 'DIRECT', NULL, 22, 73, 12, 5),
(80, 'DIAZ', 'LIEZEL MAE', NULL, '9812823486', NULL, 'Active', 'DIRECT', NULL, 10, 57, 12, 3),
(81, 'DICON', 'JOSE SONNY Jr.', NULL, '9473711220', NULL, 'Active', 'DIRECT', NULL, 18, 74, 12, 5),
(82, 'DICON', 'MARY ROSE', NULL, '9158710873', NULL, 'Active', 'DIRECT', NULL, 13, 75, 12, 5),
(83, 'DIMAANO', 'PATRICIA FEY', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 12, 76, 12, 8),
(84, 'DIVINAGRACIA', 'KYLA MARIE', NULL, '9227693489', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(85, 'DOMINGO', 'JOHN HENRIE', NULL, '9669523870', NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(86, 'DOMINGO', 'NERILIZA', NULL, '9662835272', NULL, 'Active', 'DIRECT', NULL, 1, 77, 12, 5),
(87, 'DULAY', 'JOCELYN', NULL, '9972179521', NULL, 'Active', 'DIRECT', NULL, 1, 78, 12, 2),
(88, 'ENRIQUEZ', 'JAN ANBER AARON', NULL, '961212115', NULL, 'Active', 'DIRECT', NULL, 7, 79, 12, 10),
(89, 'ESCOTO', 'CLARISSE JAMES PEARL', NULL, '9565291729', NULL, 'Active', 'DIRECT', NULL, 17, 80, 12, 5),
(90, 'ESTANQUE', 'KRISHA', NULL, '9566652669', NULL, 'Active', 'DIRECT', NULL, 14, 30, 12, 2),
(91, 'ESTOESTA', 'JOEL', NULL, '9261545221', NULL, 'Active', 'DIRECT', NULL, 16, 81, 12, 1),
(92, 'FERIA', 'JANE VERDIN', NULL, '9362692060', NULL, 'Active', 'DIRECT', NULL, 5, 82, 12, 5),
(93, 'FERNANDEZ', 'LOVE', NULL, '9171822983', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 10),
(94, 'FERRER', 'JALENE', NULL, '9434131559', NULL, 'Active', 'DIRECT', NULL, 8, 83, 12, 3),
(95, 'FIGUERA', 'JAN ROSE', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 9, 84, 12, 3),
(96, 'FLORIANO', 'RUTH GRACE', NULL, '9771633713', NULL, 'Resigned', 'DIRECT', '2024-05-21 00:00:00', 13, 38, 12, 5),
(97, 'FRANCO', 'MARILYN', NULL, '9563971223', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(98, 'FUENTES', 'JEROME', NULL, '961080928', NULL, 'Active', 'DIRECT', NULL, 22, 85, 12, 3),
(99, 'GALLARDO', 'IRENE', NULL, '9454205791', NULL, 'Active', 'DIRECT', NULL, 23, 86, 12, 2),
(100, 'GALVANTE', 'LEO', NULL, '9673465222', NULL, 'Active', 'DIRECT', NULL, 9, 46, 12, 5),
(101, 'GARCELAZO', 'ONIL', NULL, '9561304754', NULL, 'Active', 'DIRECT', NULL, 7, 87, 12, 1),
(102, 'GARDOCE', 'ILONAH JEAN', NULL, '9214662862', NULL, 'Active', 'DIRECT', NULL, 3, 88, 12, 6),
(103, 'GERONIMO', 'NIDA', NULL, '9176520527', NULL, 'Active', 'DIRECT', NULL, 1, 62, 12, 5),
(104, 'GESULGA', 'JAYVIE', NULL, '9060052980', NULL, 'Active', 'DIRECT', NULL, 9, 89, 12, 5),
(105, 'GIANAN', 'JOSEPH', NULL, '9157305442', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 8),
(106, 'GONZAGA', 'DONNA', NULL, '9989123518', NULL, 'Active', 'DIRECT', NULL, 3, 90, 12, 1),
(107, 'GONZAGA', 'REAN', NULL, '9567251693', NULL, 'Active', 'AGENCY', NULL, 1, 91, 12, 2),
(108, 'GONZALES', 'CYRUS', NULL, '9275585272', NULL, 'Active', 'DIRECT', NULL, 1, 92, 12, 5),
(109, 'GONZALES', 'HAIL JADE NICOLE', NULL, '9564725763', 'hailjadenicole.gonzales@allhome.ph', 'Active', 'DIRECT', NULL, 11, 93, 12, 8),
(110, 'GRANADA', 'SHARALYN', NULL, '9351873736', NULL, 'Active', 'DIRECT', NULL, 8, 26, 12, 5),
(111, 'GUBAN ', 'KIMBERLY', NULL, '9072091773', NULL, 'Active', 'AGENCY', NULL, 1, 94, 12, 5),
(112, 'GUEVARRA', 'LOUISE', NULL, '9777669564', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 10),
(113, 'GUINANAO', 'MARY JOY', NULL, '9319553017', NULL, 'Active', 'DIRECT', NULL, 8, 95, 12, 5),
(114, 'GURDIEL', 'JOHN CARL ', NULL, '9613785875', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 5),
(115, 'HELBALIGA', 'JOYLYN', NULL, '9614547833', NULL, 'Resigned', 'DIRECT', NULL, 12, 96, 12, 3),
(116, 'INTAL', 'RENEA FAYE', NULL, '9166544044', NULL, 'Active', 'DIRECT', NULL, 18, 97, 12, 10),
(117, 'JOSE', 'ELAINE JOYCE', NULL, '9451730272', NULL, 'Active', 'DIRECT', NULL, 3, 66, 12, 6),
(118, 'JOSE', 'JHONAS', NULL, '9776413950', NULL, 'Active', 'DIRECT', NULL, 12, 50, 12, 3),
(119, 'JOSE', 'MARIA ELOISA', NULL, '9917093101', NULL, 'Active', 'DIRECT', NULL, 8, 98, 12, 10),
(120, 'LACAP', 'ADRIAN JOHN', NULL, '9364776621', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(121, 'LACHICA', 'CAMILLE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 5),
(122, 'LANDICHO', 'CHRISTINE', NULL, '9479910868', NULL, 'Active', 'DIRECT', NULL, 12, 99, 12, 10),
(123, 'LAVADOR', 'RHEAMAE CRISTY', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(124, 'LEOSALA', 'SARAH JANE', NULL, '9774267642', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(125, 'MAJADAS', 'MARLON', NULL, '9455219471', NULL, 'Active', 'DIRECT', NULL, 1, 43, 12, 2),
(126, 'MANGABAT', 'JOYCE ANDREA', NULL, '9127946703', NULL, 'Resigned', 'DIRECT', NULL, 3, 100, 12, 5),
(127, 'MANGAY', 'KARMINA LOUDETTE', NULL, '9173170497 / 9771633713', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 8),
(128, 'MANGHARES', 'MARY JOY', NULL, '9205453416', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(129, 'MANIKAM', 'MAHENDRAN', NULL, '9189029165', NULL, 'Active', 'DIRECT', NULL, 24, 101, 12, 5),
(130, 'MANUEL', 'JHAEL', NULL, '9338192789', NULL, 'Active', 'DIRECT', NULL, 7, 102, 12, 5),
(131, 'MARAÑON', 'FIONNAH MARIE', NULL, '9361021837', NULL, 'Active', 'DIRECT', NULL, 6, 47, 12, 8),
(132, 'MARCAIDA', 'ARIES', NULL, '9276479369', NULL, 'Active', 'DIRECT', NULL, 11, 103, 12, 3),
(133, 'MARIANO', 'AIRA DENISE', NULL, '9354387683', NULL, 'Active', 'DIRECT', NULL, 5, 37, 12, 5),
(134, 'MARQUEZ', 'JEAN CARLO', NULL, '9166376393', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 7),
(135, 'MELAÑO', 'FRANCIS CARL', NULL, '9171760391', NULL, 'Active', 'DIRECT', NULL, 8, 104, 12, 5),
(136, 'MIRA', 'PHILIP AMOR', NULL, '9453219974', NULL, 'Active', 'DIRECT', NULL, 22, 73, 12, 3),
(137, 'MIRANDA', 'KAYLA MARIE', NULL, '9457987448', NULL, 'Active', 'DIRECT', NULL, 7, 105, 12, 3),
(138, 'MOLITO', 'EUNICE', NULL, '9273813006', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 3),
(139, 'MONREAL', 'JAZ', NULL, '9317657670', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 2),
(140, 'MONTALLANA', 'MILAGROS ROSARIO', NULL, '9150415697', NULL, 'Active', 'DIRECT', NULL, 3, 106, 12, 6),
(141, 'NAGTALON', 'JEROME', NULL, '9399521002', NULL, 'Active', 'DIRECT', NULL, 3, 49, 12, 3),
(142, 'NAVARRO', 'ABIGAIL', NULL, '9459928894', NULL, 'Active', 'AGENCY', NULL, 18, 74, 12, 5),
(143, 'ONG', 'DIVINE GRACE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 10),
(144, 'ORAYLE', 'CATHERINE', NULL, '9989681600', NULL, 'Active', 'DIRECT', NULL, 11, 30, 12, 3),
(145, 'PADILLA', 'NICOLE AUBREY', NULL, '9193311164', NULL, 'Active', 'AGENCY', NULL, 12, 107, 12, 2),
(146, 'PAJO', 'JUNELLE MAE', NULL, '9182551972', 'junellemae.pajo@coffeeproject.ph', 'Resigned', 'DIRECT', NULL, 18, 54, 12, 2),
(147, 'PAKINGAN', 'OLIVIA KRISTINE', NULL, '9998871696', NULL, 'Active', 'DIRECT', NULL, 18, 108, 12, 10),
(148, 'PALARA', 'ALLIAH', NULL, '9934740329', NULL, 'Active', 'DIRECT', NULL, 6, 47, 12, 10),
(149, 'PALMERO', 'SHIELA MARIE', NULL, '9954310873', NULL, 'Active', 'DIRECT', NULL, 25, 109, 12, 2),
(150, 'PANGAN', 'RICHMOND', NULL, '9317657670', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 2),
(151, 'PANIS', 'REGINO III', NULL, '963752403', NULL, 'Active', 'AGENCY', NULL, 3, 110, 12, 6),
(152, 'PASUMBAL', 'CLARISSA JANE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 12, 96, 12, 10),
(153, 'PELAYO', 'BRIAN', NULL, '9150084176', NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(154, 'PEÑAFUERTE', 'LEE-ANN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 3, 111, 12, 3),
(155, 'PENASO', 'JERMAINE', NULL, '9935371680', NULL, 'Active', 'AGENCY', NULL, 5, 64, 12, 1),
(156, 'PEREZ', 'ANJO JAN', NULL, '9614815904', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 10),
(157, 'PEREZ', 'SHEENA MAE', NULL, '9195433424', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(158, 'PERNITO', 'GLAIZA', NULL, '9985378874', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(159, 'PERONA', 'SARAH', NULL, '9617427277', NULL, 'Active', 'DIRECT', NULL, 9, 112, 12, 1),
(160, 'POPIOCO', 'RODELIZA', NULL, '9476218699', NULL, 'Active', 'DIRECT', NULL, 7, 113, 12, 4),
(161, 'PORMENTO', 'MARILOU', NULL, '9750192575', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 3),
(162, 'PORRAS', 'KIM', NULL, '9985889693', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 2),
(163, 'PROVIDO', 'IVY', NULL, '9998864104', NULL, 'Active', 'DIRECT', NULL, 23, 114, 12, 3),
(164, 'PUÑO', 'VINABIE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 3, 47, 12, 2),
(165, 'QUEYQUEP', 'MA. JHAME LYN', NULL, '9054979044', NULL, 'Active', 'DIRECT', NULL, 12, 99, 12, 10),
(166, 'QUIMSON', 'JOSEPHINE', NULL, '9912053955', NULL, 'Active', 'AGENCY', NULL, 8, 115, 12, 3),
(167, 'QUINTERO', 'LOVELLE CARLA', NULL, '9989902571', NULL, 'Active', 'DIRECT', NULL, 12, 116, 12, 10),
(168, 'RADAN', 'MARY ROSE', NULL, '9703184502', NULL, 'Active', 'AGENCY', NULL, 1, 39, 12, 5),
(169, 'RAFAELA JANNA', 'BABARAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 5, 109, 12, 8),
(170, 'RAMOS', 'KEVIN', NULL, '9056293675', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 3),
(171, 'RESSURRECCION', 'GISSELLE', NULL, '9753562635', NULL, 'Active', 'DIRECT', NULL, 4, 117, 12, 3),
(172, 'RETURNEDPEÑAFUERTE', 'LEE-ANN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 26, 118, 12, 5),
(173, 'REYES', 'MICHAEL', NULL, '9176740909', NULL, 'Active', 'DIRECT', NULL, 5, 64, 12, 1),
(174, 'RIVERA', 'MA. ISABEL', NULL, '9553100283', NULL, 'Active', 'DIRECT', NULL, 3, 47, 12, 2),
(175, 'ROJAS', 'JOYME', NULL, '9494281900', NULL, 'Active', 'DIRECT', NULL, 11, 72, 12, 3),
(176, 'ROMA', 'BEVERLY', NULL, '9611719778', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 5),
(177, 'ROXAS', 'GENELEEN', NULL, '9276947105', NULL, 'Resigned', 'DIRECT', NULL, 18, 71, 12, 7),
(178, 'RUALES', 'NOELLYN', NULL, '9516988373', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 8),
(179, 'SABANDO', 'EDENEL', NULL, '9474916483', NULL, 'Active', 'DIRECT', NULL, 10, 119, 12, 10),
(180, 'SABAS', 'CHRISTIAN DAVE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 8, 120, 12, 5),
(181, 'SALEN', 'AIRA', NULL, '9197734333', NULL, 'Active', 'DIRECT', NULL, 4, 121, 12, 1),
(182, 'SAMOT', 'SHIELA MARIE ANN', NULL, NULL, NULL, 'Resigned', 'DIRECT', NULL, 3, 122, 12, 6),
(183, 'SAMSON', 'EIZZEL MARIE', NULL, '9764037366', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 5),
(184, 'SAN JUAN', 'JUSTIN CARLO', NULL, '9675876423', NULL, 'Active', 'DIRECT', NULL, 12, 58, 12, 3),
(185, 'SANTIAGO', 'MARIA CLARISS', NULL, '9171607584', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 3),
(186, 'SANTOS', 'MARK JOSEPH', NULL, '9054303537', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 1),
(187, 'SARET', 'SHARA MAE', NULL, '9267756220', NULL, 'Active', 'DIRECT', NULL, 21, 123, 12, 2),
(188, 'SIBONGA', 'KYLA MARIZ', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 1, 124, 12, 8),
(189, 'SILANGAN', 'PRINCESS', NULL, '9611247759', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(190, 'SIMPLINA', 'MICHELLE', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 27, 125, 12, 3),
(191, 'SOLAYO', 'MELBA', NULL, '9062743464', NULL, 'Active', 'AGENCY', NULL, 13, 38, 12, 5),
(192, 'SOLIS', 'FATIMA JOYCE', NULL, '9061261275', NULL, 'Active', 'DIRECT', NULL, 1, 92, 12, 5),
(193, 'STA. TERESA', 'JOANNA IRIS', NULL, '9177260225', NULL, 'Active', 'DIRECT', NULL, 14, 126, 12, 5),
(194, 'TALADUA', 'JOSHUA', NULL, '9771562122', NULL, 'Active', 'DIRECT', NULL, 7, 127, 12, 3),
(195, 'TAMBONGCO', 'ARLENE', NULL, '9985992984', NULL, 'Active', 'DIRECT', NULL, 1, 128, 12, 5),
(196, 'TAN', 'ADRIANNE', NULL, '9668460398', NULL, 'Resigned', 'DIRECT', NULL, 1, 94, 12, 5),
(197, 'TAPANG', 'MUAMMAR', NULL, '9073495933', NULL, 'Active', 'DIRECT', NULL, 4, 129, 12, 2),
(198, 'TENA', 'RENATO JR.', NULL, '9086284825', NULL, 'Active', 'DIRECT', NULL, 28, 130, 12, 3),
(199, 'TERRADO', 'JONALYN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 3),
(200, 'TIANGCO', 'ELISA JANE', NULL, '9276401498', NULL, 'Resigned', 'DIRECT', NULL, 9, 131, 12, 5),
(201, 'TINA', 'ROQUESSA MARIE', NULL, '9190846328', NULL, 'Active', 'DIRECT', NULL, 3, 132, 12, 7),
(202, 'TINANMBACAN', 'JONAMHEL ROSE', NULL, '9189799936', NULL, 'Active', 'DIRECT', NULL, 9, 46, 12, 7),
(203, 'TINDOGAN', 'JEAHAN', NULL, '9774481373', NULL, 'Active', 'DIRECT', NULL, 18, 108, 12, 3),
(204, 'TRIA', 'CHRIS JOHN', NULL, '9199133328', NULL, 'Active', 'DIRECT', NULL, 1, 133, 12, 2),
(205, 'TRINIDAD', 'LAURENZ', NULL, '9158869731', NULL, 'Active', 'DIRECT', NULL, 9, 112, 12, 7),
(206, 'TUNAY', 'ALFREDO', NULL, '9687923356', NULL, 'Active', 'DIRECT', NULL, 4, 134, 12, 1),
(207, 'VALENTINO', 'HANNAH', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 2),
(208, 'VASQUEZ', 'RAMON ANDREI', NULL, '9053373682', NULL, 'Active', 'DIRECT', NULL, 26, 118, 12, 5),
(209, 'VIAÑA', 'JAGSY', NULL, '9952310059', NULL, 'Active', 'DIRECT', NULL, NULL, 135, 12, 7),
(210, 'VILLANUEVA JR. ', 'MARK LESTER', NULL, '9056633489', NULL, 'Resigned', 'DIRECT', NULL, 8, 136, 12, 1),
(211, 'VILLANUEVA', 'JOANA', NULL, '9664597653', NULL, 'Active', 'AGENCY', NULL, 8, 25, 12, 1),
(212, 'VILLANUEVA', 'RONA FAITH', NULL, '9076479827', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 10),
(213, 'VILLAR', 'ANGELICA', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 2),
(214, 'WILMOT', 'ELTON', NULL, '9668457602', NULL, 'Active', 'DIRECT', NULL, 3, 137, 12, 10),
(215, 'YNOT', 'RENALYN', NULL, '9954310993', NULL, 'Active', 'DIRECT', NULL, NULL, 138, 12, 2),
(216, 'YU', 'ROBINA', NULL, '9175583872', NULL, 'Active', 'DIRECT', NULL, 5, 139, 12, 2),
(217, 'ARGOTE', 'CHRISTIAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 1),
(218, 'DE LEON', 'ANGELIE', NULL, '9083492162', NULL, 'Active', 'DIRECT', NULL, 4, 134, 21, 1),
(219, 'NOGUET', 'RAM', NULL, '9209848061', 'ram.noguet@allday.ph', 'Active', 'DIRECT', NULL, 12, 140, 21, 6),
(220, 'BUENAFE', 'ANNELOU MARIE', NULL, '9096050594', NULL, 'Active', 'AGENCY - PEOPLESERVE', NULL, 3, 47, 22, 7),
(221, 'BAUTRO', 'LYCA', NULL, '9190820567', NULL, 'Active', 'DIRECT', NULL, 21, 141, 12, 5),
(222, 'DE RAMOS', 'ANGELBERT', NULL, '9455242633', NULL, 'Transferred In', 'DIRECT', NULL, 4, 142, 12, 1),
(223, 'CABRERA', 'KARREN ELOISA MAE', NULL, '9263739155', 'karren.cabrerra@fsui.ph', NULL, 'DIRECT', NULL, 25, 143, 12, 2),
(224, 'NAVARRO', 'SHASHEIL MAUREEN', NULL, '9770233863', NULL, 'Active', 'DIRECT', NULL, 26, 118, 20, 1),
(225, 'MAURICIO', 'DANILO JR', NULL, '09556571337 / 09478498376', NULL, 'Active', 'AGENCY - PEOPLESERVE', NULL, 29, 144, 20, 3),
(226, '', '', NULL, NULL, NULL, NULL, NULL, NULL, 16, 145, 23, 5);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `name`) VALUES
(23, 'AH LIBIS'),
(21, 'EVIA'),
(12, 'HO LAS PINAS'),
(20, 'HQ MOLINO'),
(19, 'HQ SOMO'),
(18, 'KC EVIA'),
(17, 'KINDER CITY SOMO'),
(22, 'NORTH AREA'),
(16, 'SOMO'),
(14, 'SOUTH AREA'),
(15, 'WAREHOUSE'),
(13, 'WCC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`assignment_id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `device_id` (`device_id`);

--
-- Indexes for table `business_unit`
--
ALTER TABLE `business_unit`
  ADD PRIMARY KEY (`bu_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `designation`
--
ALTER TABLE `designation`
  ADD PRIMARY KEY (`designation_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`device_id`);

--
-- Indexes for table `device_account`
--
ALTER TABLE `device_account`
  ADD PRIMARY KEY (`device_account_id`),
  ADD KEY `fk_employee` (`employee_id`),
  ADD KEY `fk_device_id` (`device_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `department_id` (`department_id`),
  ADD KEY `fk_designation_id` (`designation_id`),
  ADD KEY `fk_employee_location` (`location_id`),
  ADD KEY `fk_employee_bu` (`bu_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `assignment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `business_unit`
--
ALTER TABLE `business_unit`
  MODIFY `bu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=227;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2534;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `designation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=244;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `device_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `device_account`
--
ALTER TABLE `device_account`
  MODIFY `device_account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=227;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=239;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  ADD CONSTRAINT `assignment_ibfk_2` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`);

--
-- Constraints for table `device_account`
--
ALTER TABLE `device_account`
  ADD CONSTRAINT `fk_device_id` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`),
  ADD CONSTRAINT `fk_designation_id` FOREIGN KEY (`designation_id`) REFERENCES `designation` (`designation_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_employee_bu` FOREIGN KEY (`bu_id`) REFERENCES `business_unit` (`bu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_employee_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
