-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2025 at 03:42 AM
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
(227, 'VITAR', 'KRISTINE', NULL, '9853738608', 'kristine.martinez@fsui.ph', 'Active', 'DIRECT', NULL, 1, 39, 12, 1),
(228, 'AGDON y Adalem', 'MA. REGINE JOYCE', NULL, '9459903175', NULL, 'Active', 'DIRECT', NULL, 2, 18, 13, 2),
(229, 'ESPNO', 'ALMA', NULL, '9778195327', 'alma.espino@allday.ph', NULL, 'DIRECT', NULL, 3, 19, 14, 2),
(230, 'CHICA', 'SHERWIN', NULL, NULL, NULL, 'Resigned', 'DIRECT', NULL, 4, 20, 13, 2),
(231, 'CASTANEDA', 'CHERRY', NULL, '9176521828', NULL, 'Active', 'DIRECT', NULL, 5, 21, 15, 3),
(232, 'MONTENEGRO', 'MARK', NULL, '9756602509', NULL, 'Active', 'DIRECT', NULL, 3, 22, 15, 2),
(233, 'MEDINA', 'RYAN JAY', NULL, '56213528', NULL, 'Active', 'DIRECT', NULL, 6, 23, 16, 4),
(234, 'ONG', 'SHERMAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 20, 16, 5),
(235, 'AGUACITO', 'RACHELLE', NULL, '9458438098', NULL, 'Active', 'DIRECT', NULL, 3, 24, 17, 6),
(236, 'FULE', 'MARC NICHOLAS', NULL, '9064817611', NULL, 'Active', 'DIRECT', NULL, 7, 24, 18, 6),
(237, 'MANALO', 'ANDRE JUACQUIM', NULL, '9398801686', 'andrejuacquim.manalo@tvsi.ph', 'Resigned', 'DIRECT', '2024-05-13 00:00:00', 8, 25, 19, 3),
(238, 'MORELOS', 'JOEFRED', NULL, '9176396331', NULL, 'Active', 'DIRECT', NULL, 8, 25, 19, 3),
(239, 'CASTILLO', 'CHELSEA CAMERON', NULL, '9982344451', NULL, 'Active', 'DIRECT', NULL, 8, 26, 20, 3),
(240, 'PEREZ', 'JENNIFER', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 8, 27, 20, 3),
(241, 'DORADO', 'JOY', NULL, '9858694548', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 7),
(242, 'EUSEBIO', 'MILDRED', NULL, '9998864097', NULL, 'Active', 'DIRECT', NULL, 10, 29, 12, 3),
(243, 'GAGABU-AN', 'JAYMAR', NULL, '9269358255', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 2),
(244, 'LINGAT', 'ANGIE', NULL, '9184767212', NULL, 'Active', 'DIRECT', NULL, 11, 30, 12, 3),
(245, 'LUSTRACION', 'KATRINE JOY', NULL, '9366388235', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 5),
(246, 'PANGANIBAN', 'ROBILYN', NULL, '9918304204', NULL, 'Active', 'DIRECT', NULL, 9, 28, 12, 5),
(247, 'URI', 'JIANNE ANTOINETTE', NULL, '9953161858', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 2),
(248, 'ABELLA', 'EMERIO MONICO', NULL, '9270427872', NULL, 'Active', 'DIRECT', NULL, 11, 32, 12, 1),
(249, 'ADEA', 'MARIE KRISTINE', NULL, '9985848950', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 1),
(250, 'ADORACION', 'MICHAEL', NULL, '9185674975', NULL, 'Active', 'DIRECT', NULL, 13, 34, 12, 7),
(251, 'AGNO', 'AYRIS CRISELDA', NULL, '9624426933', NULL, 'Active', 'DIRECT', NULL, 8, 35, 12, 2),
(252, 'ALLAREY', 'JOHN CHRISTIAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 36, 12, 5),
(253, 'ALONSAGAY', 'KIMBERLY', NULL, '9399128015', NULL, 'Active', 'DIRECT', NULL, 5, 37, 12, 8),
(254, 'AMIHAN', 'ANGEL MARIE GRACE', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(255, 'ANCHETA', 'GENNALYN', NULL, '9663890672', NULL, 'Resigned', 'DIRECT', NULL, 1, 39, 12, 5),
(256, 'ANCHETA', 'MA. FRANS ANN', NULL, '9959209910', NULL, 'Active', 'DIRECT', NULL, 8, 40, 12, 5),
(257, 'TRANSFERRED OUT DE RAMOS', 'ANGELBERT', NULL, '9455242633', NULL, 'Transferred Out', 'DIRECT', '2024-05-14 00:00:00', 12, 31, 12, 8),
(258, 'ANTIVOLA', 'MATTHEW', NULL, '9391951500', NULL, 'Active', 'DIRECT', NULL, 14, 41, 12, 1),
(259, 'ARCE', 'MA. ROSARIO', NULL, '9190811413', NULL, 'Active', 'DIRECT', NULL, 7, 42, 12, 3),
(260, 'ARINQUE', 'AIRA', NULL, '9154829262', NULL, 'Active', 'DIRECT', NULL, 1, 43, 12, 2),
(261, 'ARJONA', 'RACQUEL', NULL, '9985900402', NULL, 'Active', 'DIRECT', NULL, 5, 44, 12, 3),
(262, 'AUSTRIA', 'RUSSEL', NULL, '9985947102', NULL, 'Active', 'DIRECT', NULL, 4, 20, 12, 5),
(263, 'AZUPARDO', 'JHASMINE', NULL, '9175151093', NULL, 'Active', 'DIRECT', NULL, 15, 45, 12, 5),
(264, 'BADAJOS', 'MERYL', NULL, '9956238377', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 2),
(265, 'BALASA', 'DEBBIE ANN', NULL, '9367480516', NULL, 'Active', 'DIRECT', NULL, 9, 46, 12, 5),
(266, 'BALINGIT', 'JAMES', NULL, '9706130000', NULL, 'Active', 'DIRECT', NULL, 3, 47, 12, 7),
(267, 'BANTING', 'JOHN FREDERICK', NULL, '9507783869', NULL, 'Resigned', 'DIRECT', NULL, 16, 48, 12, 2),
(268, 'BARADAS', 'EAZEL', NULL, '9459758883', NULL, 'Active', 'DIRECT', NULL, 3, 49, 12, 3),
(269, 'BARADAS', 'NICOLE BENNET', NULL, '9568991621', NULL, 'Active', 'DIRECT', NULL, 12, 50, 12, 3),
(270, 'BARTOLOME', 'AIRA', NULL, '9190081816', NULL, 'Resigned', 'DIRECT', NULL, 8, 51, 12, 5),
(271, 'BAUTISTA', 'PRECIOUS EUNICE', NULL, '9085499793', NULL, 'Active', 'DIRECT', NULL, 16, 48, 12, 7),
(272, 'BAUZON-CRISOL', 'VANESSA', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 17, 52, 12, 5),
(273, 'BELLEZA', 'WILBERT SAUL', NULL, '9171732378', NULL, 'Active', 'DIRECT', NULL, 1, 53, 12, 1),
(274, 'BELTRAN', 'ALEAH JOY', NULL, NULL, NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 3),
(275, 'BENEMERITO', 'JHOBETH', NULL, '9452043991', NULL, 'Active', 'DIRECT', NULL, 19, 55, 12, 2),
(276, 'BERNARDO', 'IZZZY VRIELLA', NULL, '9682489306', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 9),
(277, 'BERNUS', 'KIMBERLENE', NULL, '9162935187', NULL, 'Active', 'DIRECT', NULL, 10, 57, 12, 3),
(278, 'BIO', 'MARIAN', NULL, '9974537678', NULL, 'Resigned', 'DIRECT', NULL, 8, 26, 12, 5),
(279, 'BODINO', 'ANGELA KAREN', NULL, '9157703204', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 2),
(280, 'BOLAÑOS', 'JONA KRISTINE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 12, 58, 12, 2),
(281, 'BONDOC', 'BERNARD', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 59, 12, 5),
(282, 'BORDEOS', 'ESPERANZA', NULL, '9285693152', NULL, 'Resigned', 'DIRECT', '2024-05-08 00:00:00', 12, 60, 12, 5),
(283, 'BRIONES', 'RACHELLE', NULL, '9985947096', NULL, 'Active', 'DIRECT', NULL, 4, 61, 12, 5),
(284, 'BUENAFLOR', 'LEIZL', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 1, 62, 12, 5),
(285, 'BULA', 'ARNE MARIE', NULL, '9196486745', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 10),
(286, 'CABINTA', 'MICHALLE', NULL, '9954424005', NULL, 'Active', 'DIRECT', NULL, 1, 63, 12, 2),
(287, 'CABRAL', 'ALYSSA MAY', NULL, '9156469773', NULL, 'Active', 'DIRECT', NULL, 10, 64, 12, 3),
(288, 'CANONOY', 'KIM DENISE', NULL, '9563200056', NULL, 'Active', 'DIRECT', NULL, 1, 43, 12, 3),
(289, 'CECE', 'CLARICE', NULL, '9705192084', NULL, 'Active', 'DIRECT', NULL, 16, 65, 12, 3),
(290, 'CEREMONIA', 'MARY GRACE', NULL, '9274153692', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(291, 'COMENDADOR', 'JERLYN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(292, 'COMIA', 'MIKHAEL', NULL, '9063967483', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 3),
(293, 'COOK', 'JAEN MARIE ', NULL, '9812790325', NULL, 'Active', 'DIRECT', NULL, 3, 66, 12, 6),
(294, 'CRUZ', 'MA. ANGELICA', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(295, 'DAEP', 'ERICA MARIE MILLEN', NULL, '9624200442', NULL, 'Active', 'DIRECT', NULL, 18, 67, 12, 2),
(296, 'DANGUPON', 'HARTMANN JOHN', NULL, '9158228020', NULL, 'Active', 'DIRECT', NULL, 16, 48, 12, 7),
(297, 'DE LA PEÑA', 'JOANA REZY', NULL, '9272510481', NULL, 'Active', 'DIRECT', NULL, 17, 68, 12, 5),
(298, 'DE LEON', 'RHODORA', NULL, '9989852874', NULL, 'Active', 'DIRECT', NULL, 18, 69, 12, 5),
(299, 'DE QUIROZ', 'JONALLY', NULL, '9103609931', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 2),
(300, 'DELA CRUZ', 'BRYAN', NULL, '9319283489', NULL, 'Active', 'AGENCY', NULL, 21, 70, 12, 5),
(301, 'DELFIN', 'JULIAN MIGUEL', NULL, '9176823223', NULL, 'Active', 'DIRECT', NULL, 22, 71, 12, 5),
(302, 'DELLO', 'HENRY', NULL, '9669037104', NULL, 'Active', 'DIRECT', NULL, 16, 48, 12, 2),
(303, 'DELLOMAS', 'RAVENE JAMES', NULL, '9184017126', NULL, 'Active', 'DIRECT', NULL, 14, 72, 12, 1),
(304, 'DELOS SANTOS', 'DANIELLE', NULL, '9655474762', NULL, 'Active', 'DIRECT', NULL, 22, 73, 12, 5),
(305, 'DELOS SANTOS', 'HAZEL', NULL, '9068454667', NULL, 'Active', 'DIRECT', NULL, 10, 57, 12, 3),
(306, 'DIAZ', 'LIEZEL MAE', NULL, '9812823486', NULL, 'Active', 'DIRECT', NULL, 18, 74, 12, 5),
(307, 'DICON', 'JOSE SONNY Jr.', NULL, '9473711220', NULL, 'Active', 'DIRECT', NULL, 13, 75, 12, 5),
(308, 'DICON', 'MARY ROSE', NULL, '9158710873', NULL, 'Active', 'DIRECT', NULL, 12, 76, 12, 8),
(309, 'DIMAANO', 'PATRICIA FEY', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(310, 'DIVINAGRACIA', 'KYLA MARIE', NULL, '9227693489', NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(311, 'DOMINGO', 'JOHN HENRIE', NULL, '9669523870', NULL, 'Active', 'DIRECT', NULL, 1, 77, 12, 5),
(312, 'DOMINGO', 'NERILIZA', NULL, '9662835272', NULL, 'Active', 'DIRECT', NULL, 1, 78, 12, 2),
(313, 'DULAY', 'JOCELYN', NULL, '9972179521', NULL, 'Active', 'DIRECT', NULL, 7, 79, 12, 10),
(314, 'ENRIQUEZ', 'JAN ANBER AARON', NULL, '961212115', NULL, 'Active', 'DIRECT', NULL, 17, 80, 12, 5),
(315, 'ESCOTO', 'CLARISSE JAMES PEARL', NULL, '9565291729', NULL, 'Active', 'DIRECT', NULL, 14, 30, 12, 2),
(316, 'ESTANQUE', 'KRISHA', NULL, '9566652669', NULL, 'Active', 'DIRECT', NULL, 16, 81, 12, 1),
(317, 'ESTOESTA', 'JOEL', NULL, '9261545221', NULL, 'Active', 'DIRECT', NULL, 5, 82, 12, 5),
(318, 'FERIA', 'JANE VERDIN', NULL, '9362692060', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 10),
(319, 'FERNANDEZ', 'LOVE', NULL, '9171822983', NULL, 'Active', 'DIRECT', NULL, 8, 83, 12, 3),
(320, 'FERRER', 'JALENE', NULL, '9434131559', NULL, 'Active', 'DIRECT', NULL, 9, 84, 12, 3),
(321, 'FIGUERA', 'JAN ROSE', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(322, 'FLORIANO', 'RUTH GRACE', NULL, '9771633713', NULL, 'Resigned', 'DIRECT', '2024-05-21 00:00:00', 1, 39, 12, 5),
(323, 'FRANCO', 'MARILYN', NULL, '9563971223', NULL, 'Active', 'DIRECT', NULL, 22, 85, 12, 3),
(324, 'FUENTES', 'JEROME', NULL, '961080928', NULL, 'Active', 'DIRECT', NULL, 23, 86, 12, 2),
(325, 'GALLARDO', 'IRENE', NULL, '9454205791', NULL, 'Active', 'DIRECT', NULL, 9, 46, 12, 5),
(326, 'GALVANTE', 'LEO', NULL, '9673465222', NULL, 'Active', 'DIRECT', NULL, 7, 87, 12, 1),
(327, 'GARCELAZO', 'ONIL', NULL, '9561304754', NULL, 'Active', 'DIRECT', NULL, 3, 88, 12, 6),
(328, 'GARDOCE', 'ILONAH JEAN', NULL, '9214662862', NULL, 'Active', 'DIRECT', NULL, 1, 62, 12, 5),
(329, 'GERONIMO', 'NIDA', NULL, '9176520527', NULL, 'Active', 'DIRECT', NULL, 9, 89, 12, 5),
(330, 'GESULGA', 'JAYVIE', NULL, '9060052980', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 8),
(331, 'GIANAN', 'JOSEPH', NULL, '9157305442', NULL, 'Active', 'DIRECT', NULL, 3, 90, 12, 1),
(332, 'GONZAGA', 'DONNA', NULL, '9989123518', NULL, 'Active', 'DIRECT', NULL, 1, 91, 12, 2),
(333, 'GONZAGA', 'REAN', NULL, '9567251693', NULL, 'Active', 'AGENCY', NULL, 1, 92, 12, 5),
(334, 'GONZALES', 'CYRUS', NULL, '9275585272', NULL, 'Active', 'DIRECT', NULL, 11, 93, 12, 8),
(335, 'GONZALES', 'HAIL JADE NICOLE', NULL, '9564725763', 'hailjadenicole.gonzales@allhome.ph', 'Active', 'DIRECT', NULL, 8, 26, 12, 5),
(336, 'GRANADA', 'SHARALYN', NULL, '9351873736', NULL, 'Active', 'DIRECT', NULL, 1, 94, 12, 5),
(337, 'GUBAN ', 'KIMBERLY', NULL, '9072091773', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 10),
(338, 'GUEVARRA', 'LOUISE', NULL, '9777669564', NULL, 'Active', 'DIRECT', NULL, 8, 95, 12, 5),
(339, 'GUINANAO', 'MARY JOY', NULL, '9319553017', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 5),
(340, 'GURDIEL', 'JOHN CARL ', NULL, '9613785875', NULL, 'Active', 'AGENCY', NULL, 12, 96, 12, 3),
(341, 'HELBALIGA', 'JOYLYN', NULL, '9614547833', NULL, 'Resigned', 'DIRECT', NULL, 18, 97, 12, 10),
(342, 'INTAL', 'RENEA FAYE', NULL, '9166544044', NULL, 'Active', 'DIRECT', NULL, 3, 66, 12, 6),
(343, 'JOSE', 'ELAINE JOYCE', NULL, '9451730272', NULL, 'Active', 'DIRECT', NULL, 12, 50, 12, 3),
(344, 'JOSE', 'JHONAS', NULL, '9776413950', NULL, 'Active', 'DIRECT', NULL, 8, 98, 12, 10),
(345, 'JOSE', 'MARIA ELOISA', NULL, '9917093101', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(346, 'LACAP', 'ADRIAN JOHN', NULL, '9364776621', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 5),
(347, 'LACHICA', 'CAMILLE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 12, 99, 12, 10),
(348, 'LANDICHO', 'CHRISTINE', NULL, '9479910868', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(349, 'LAVADOR', 'RHEAMAE CRISTY', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(350, 'LEOSALA', 'SARAH JANE', NULL, '9774267642', NULL, 'Active', 'DIRECT', NULL, 1, 43, 12, 2),
(351, 'MAJADAS', 'MARLON', NULL, '9455219471', NULL, 'Active', 'DIRECT', NULL, 3, 100, 12, 5),
(352, 'MANGABAT', 'JOYCE ANDREA', NULL, '9127946703', NULL, 'Resigned', 'DIRECT', NULL, 12, 31, 12, 8),
(353, 'MANGAY', 'KARMINA LOUDETTE', NULL, '9173170497 / 9771633713', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(354, 'MANGHARES', 'MARY JOY', NULL, '9205453416', NULL, 'Active', 'DIRECT', NULL, 24, 101, 12, 5),
(355, 'MANIKAM', 'MAHENDRAN', NULL, '9189029165', NULL, 'Active', 'DIRECT', NULL, 7, 102, 12, 5),
(356, 'MANUEL', 'JHAEL', NULL, '9338192789', NULL, 'Active', 'DIRECT', NULL, 6, 47, 12, 8),
(357, 'MARAÑON', 'FIONNAH MARIE', NULL, '9361021837', NULL, 'Active', 'DIRECT', NULL, 11, 103, 12, 3),
(358, 'MARCAIDA', 'ARIES', NULL, '9276479369', NULL, 'Active', 'DIRECT', NULL, 5, 37, 12, 5),
(359, 'MARIANO', 'AIRA DENISE', NULL, '9354387683', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 7),
(360, 'MARQUEZ', 'JEAN CARLO', NULL, '9166376393', NULL, 'Active', 'DIRECT', NULL, 8, 104, 12, 5),
(361, 'MELAÑO', 'FRANCIS CARL', NULL, '9171760391', NULL, 'Active', 'DIRECT', NULL, 22, 73, 12, 3),
(362, 'MIRA', 'PHILIP AMOR', NULL, '9453219974', NULL, 'Active', 'DIRECT', NULL, 7, 105, 12, 3),
(363, 'MIRANDA', 'KAYLA MARIE', NULL, '9457987448', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 3),
(364, 'MOLITO', 'EUNICE', NULL, '9273813006', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 2),
(365, 'MONREAL', 'JAZ', NULL, '9317657670', NULL, 'Active', 'DIRECT', NULL, 3, 106, 12, 6),
(366, 'MONTALLANA', 'MILAGROS ROSARIO', NULL, '9150415697', NULL, 'Active', 'DIRECT', NULL, 3, 49, 12, 3),
(367, 'NAGTALON', 'JEROME', NULL, '9399521002', NULL, 'Active', 'DIRECT', NULL, 18, 74, 12, 5),
(368, 'NAVARRO', 'ABIGAIL', NULL, '9459928894', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 10),
(369, 'ONG', 'DIVINE GRACE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 11, 30, 12, 3),
(370, 'ORAYLE', 'CATHERINE', NULL, '9989681600', NULL, 'Active', 'DIRECT', NULL, 12, 107, 12, 2),
(371, 'PADILLA', 'NICOLE AUBREY', NULL, '9193311164', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 2),
(372, 'PAJO', 'JUNELLE MAE', NULL, '9182551972', 'junellemae.pajo@coffeeproject.ph', 'Resigned', 'DIRECT', NULL, 18, 108, 12, 10),
(373, 'PAKINGAN', 'OLIVIA KRISTINE', NULL, '9998871696', NULL, 'Active', 'DIRECT', NULL, 6, 47, 12, 10),
(374, 'PALARA', 'ALLIAH', NULL, '9934740329', NULL, 'Active', 'DIRECT', NULL, 25, 109, 12, 2),
(375, 'PALMERO', 'SHIELA MARIE', NULL, '9954310873', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 2),
(376, 'PANGAN', 'RICHMOND', NULL, '9317657670', NULL, 'Active', 'DIRECT', NULL, 3, 110, 12, 6),
(377, 'PANIS', 'REGINO III', NULL, '963752403', NULL, 'Active', 'AGENCY', NULL, 12, 96, 12, 10),
(378, 'PASUMBAL', 'CLARISSA JANE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 6, 49, 12, 3),
(379, 'PELAYO', 'BRIAN', NULL, '9150084176', NULL, 'Active', 'DIRECT', NULL, 3, 111, 12, 3),
(380, 'PEÑAFUERTE', 'LEE-ANN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 5, 64, 12, 1),
(381, 'PENASO', 'JERMAINE', NULL, '9935371680', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 10),
(382, 'PEREZ', 'ANJO JAN', NULL, '9614815904', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(383, 'PEREZ', 'SHEENA MAE', NULL, '9195433424', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(384, 'PERNITO', 'GLAIZA', NULL, '9985378874', NULL, 'Active', 'DIRECT', NULL, 9, 112, 12, 1),
(385, 'PERONA', 'SARAH', NULL, '9617427277', NULL, 'Active', 'DIRECT', NULL, 7, 113, 12, 4),
(386, 'POPIOCO', 'RODELIZA', NULL, '9476218699', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 3),
(387, 'PORMENTO', 'MARILOU', NULL, '9750192575', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 2),
(388, 'PORRAS', 'KIM', NULL, '9985889693', NULL, 'Active', 'DIRECT', NULL, 23, 114, 12, 3),
(389, 'PROVIDO', 'IVY', NULL, '9998864104', NULL, 'Active', 'DIRECT', NULL, 3, 47, 12, 2),
(390, 'PUÑO', 'VINABIE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 12, 99, 12, 10),
(391, 'QUEYQUEP', 'MA. JHAME LYN', NULL, '9054979044', NULL, 'Active', 'DIRECT', NULL, 8, 115, 12, 3),
(392, 'QUIMSON', 'JOSEPHINE', NULL, '9912053955', NULL, 'Active', 'AGENCY', NULL, 12, 116, 12, 10),
(393, 'QUINTERO', 'LOVELLE CARLA', NULL, '9989902571', NULL, 'Active', 'DIRECT', NULL, 1, 39, 12, 5),
(394, 'RADAN', 'MARY ROSE', NULL, '9703184502', NULL, 'Active', 'AGENCY', NULL, 5, 109, 12, 8),
(395, 'RAFAELA JANNA', 'BABARAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 3),
(396, 'RAMOS', 'KEVIN', NULL, '9056293675', NULL, 'Active', 'DIRECT', NULL, 4, 117, 12, 3),
(397, 'RESSURRECCION', 'GISSELLE', NULL, '9753562635', NULL, 'Active', 'DIRECT', NULL, 26, 118, 12, 5),
(398, 'RETURNEDPEÑAFUERTE', 'LEE-ANN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 5, 64, 12, 1),
(399, 'REYES', 'MICHAEL', NULL, '9176740909', NULL, 'Active', 'DIRECT', NULL, 3, 47, 12, 2),
(400, 'RIVERA', 'MA. ISABEL', NULL, '9553100283', NULL, 'Active', 'DIRECT', NULL, 11, 72, 12, 3),
(401, 'ROJAS', 'JOYME', NULL, '9494281900', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 5),
(402, 'ROMA', 'BEVERLY', NULL, '9611719778', NULL, 'Active', 'DIRECT', NULL, 18, 71, 12, 7),
(403, 'ROXAS', 'GENELEEN', NULL, '9276947105', NULL, 'Resigned', 'DIRECT', NULL, 1, 39, 12, 8),
(404, 'RUALES', 'NOELLYN', NULL, '9516988373', NULL, 'Active', 'DIRECT', NULL, 10, 119, 12, 10),
(405, 'SABANDO', 'EDENEL', NULL, '9474916483', NULL, 'Active', 'DIRECT', NULL, 8, 120, 12, 5),
(406, 'SABAS', 'CHRISTIAN DAVE', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 121, 12, 1),
(407, 'SALEN', 'AIRA', NULL, '9197734333', NULL, 'Active', 'DIRECT', NULL, 3, 122, 12, 6),
(408, 'SAMOT', 'SHIELA MARIE ANN', NULL, NULL, NULL, 'Resigned', 'DIRECT', NULL, 12, 31, 12, 5),
(409, 'SAMSON', 'EIZZEL MARIE', NULL, '9764037366', NULL, 'Active', 'DIRECT', NULL, 12, 58, 12, 3),
(410, 'SAN JUAN', 'JUSTIN CARLO', NULL, '9675876423', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 3),
(411, 'SANTIAGO', 'MARIA CLARISS', NULL, '9171607584', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 1),
(412, 'SANTOS', 'MARK JOSEPH', NULL, '9054303537', NULL, 'Active', 'DIRECT', NULL, 21, 123, 12, 2),
(413, 'SARET', 'SHARA MAE', NULL, '9267756220', NULL, 'Active', 'DIRECT', NULL, 1, 124, 12, 8),
(414, 'SIBONGA', 'KYLA MARIZ', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(415, 'SILANGAN', 'PRINCESS', NULL, '9611247759', NULL, 'Active', 'DIRECT', NULL, 27, 125, 12, 3),
(416, 'SIMPLINA', 'MICHELLE', NULL, '9050726619', NULL, 'Active', 'DIRECT', NULL, 13, 38, 12, 5),
(417, 'SOLAYO', 'MELBA', NULL, '9062743464', NULL, 'Active', 'AGENCY', NULL, 1, 92, 12, 5),
(418, 'SOLIS', 'FATIMA JOYCE', NULL, '9061261275', NULL, 'Active', 'DIRECT', NULL, 14, 126, 12, 5),
(419, 'STA. TERESA', 'JOANNA IRIS', NULL, '9177260225', NULL, 'Active', 'DIRECT', NULL, 7, 127, 12, 3),
(420, 'TALADUA', 'JOSHUA', NULL, '9771562122', NULL, 'Active', 'DIRECT', NULL, 1, 128, 12, 5),
(421, 'TAMBONGCO', 'ARLENE', NULL, '9985992984', NULL, 'Active', 'DIRECT', NULL, 1, 94, 12, 5),
(422, 'TAN', 'ADRIANNE', NULL, '9668460398', NULL, 'Resigned', 'DIRECT', NULL, 4, 129, 12, 2),
(423, 'TAPANG', 'MUAMMAR', NULL, '9073495933', NULL, 'Active', 'DIRECT', NULL, 28, 130, 12, 3),
(424, 'TENA', 'RENATO JR.', NULL, '9086284825', NULL, 'Active', 'DIRECT', NULL, 12, 31, 12, 3),
(425, 'TERRADO', 'JONALYN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 9, 131, 12, 5),
(426, 'TIANGCO', 'ELISA JANE', NULL, '9276401498', NULL, 'Resigned', 'DIRECT', NULL, 3, 132, 12, 7),
(427, 'TINA', 'ROQUESSA MARIE', NULL, '9190846328', NULL, 'Active', 'DIRECT', NULL, 9, 46, 12, 7),
(428, 'TINANMBACAN', 'JONAMHEL ROSE', NULL, '9189799936', NULL, 'Active', 'DIRECT', NULL, 18, 108, 12, 3),
(429, 'TINDOGAN', 'JEAHAN', NULL, '9774481373', NULL, 'Active', 'DIRECT', NULL, 1, 133, 12, 2),
(430, 'TRIA', 'CHRIS JOHN', NULL, '9199133328', NULL, 'Active', 'DIRECT', NULL, 9, 112, 12, 7),
(431, 'TRINIDAD', 'LAURENZ', NULL, '9158869731', NULL, 'Active', 'DIRECT', NULL, 4, 134, 12, 1),
(432, 'TUNAY', 'ALFREDO', NULL, '9687923356', NULL, 'Active', 'DIRECT', NULL, 8, 25, 12, 2),
(433, 'VALENTINO', 'HANNAH', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 26, 118, 12, 5),
(434, 'VASQUEZ', 'RAMON ANDREI', NULL, '9053373682', NULL, 'Active', 'DIRECT', NULL, NULL, 135, 12, 7),
(435, 'VIAÑA', 'JAGSY', NULL, '9952310059', NULL, 'Active', 'DIRECT', NULL, 8, 136, 12, 1),
(436, 'VILLANUEVA JR. ', 'MARK LESTER', NULL, '9056633489', NULL, 'Resigned', 'DIRECT', NULL, 8, 25, 12, 1),
(437, 'VILLANUEVA', 'JOANA', NULL, '9664597653', NULL, 'Active', 'AGENCY', NULL, 18, 54, 12, 10),
(438, 'VILLANUEVA', 'RONA FAITH', NULL, '9076479827', NULL, 'Active', 'DIRECT', NULL, 18, 54, 12, 2),
(439, 'VILLAR', 'ANGELICA', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 3, 137, 12, 10),
(440, 'WILMOT', 'ELTON', NULL, '9668457602', NULL, 'Active', 'DIRECT', NULL, NULL, 138, 12, 2),
(441, 'YNOT', 'RENALYN', NULL, '9954310993', NULL, 'Active', 'DIRECT', NULL, 5, 139, 12, 2),
(442, 'YU', 'ROBINA', NULL, '9175583872', NULL, 'Active', 'DIRECT', NULL, 1, 33, 12, 1),
(443, 'ARGOTE', 'CHRISTIAN', NULL, NULL, NULL, 'Active', 'DIRECT', NULL, 4, 134, 21, 1),
(444, 'DE LEON', 'ANGELIE', NULL, '9083492162', NULL, 'Active', 'DIRECT', NULL, 12, 140, 21, 6),
(445, 'NOGUET', 'RAM', NULL, '9209848061', 'ram.noguet@allday.ph', 'Active', 'DIRECT', NULL, 3, 47, 22, 7),
(446, 'BUENAFE', 'ANNELOU MARIE', NULL, '9096050594', NULL, 'Active', 'AGENCY - PEOPLESERVE', NULL, 21, 141, 12, 5),
(447, 'BAUTRO', 'LYCA', NULL, '9190820567', NULL, 'Active', 'DIRECT', NULL, 4, 142, 12, 1),
(448, 'DE RAMOS', 'ANGELBERT', NULL, '9455242633', NULL, 'Transferred In', 'DIRECT', NULL, 25, 143, 12, 2),
(449, 'CABRERA', 'KARREN ELOISA MAE', NULL, '9263739155', 'karren.cabrerra@fsui.ph', NULL, 'DIRECT', NULL, 26, 118, 20, 1),
(450, 'NAVARRO', 'SHASHEIL MAUREEN', NULL, '9770233863', NULL, 'Active', 'DIRECT', NULL, 29, 144, 20, 3),
(451, 'MAURICIO', 'DANILO JR', NULL, '09556571337 / 09478498376', NULL, 'Active', 'AGENCY - PEOPLESERVE', NULL, 16, 145, 23, 5);

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
  MODIFY `bu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2538;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `designation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `device_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `device_account`
--
ALTER TABLE `device_account`
  MODIFY `device_account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=454;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
