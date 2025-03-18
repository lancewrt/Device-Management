-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2025 at 08:40 AM
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
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `acc_id` int(11) NOT NULL,
  `acc_username` varchar(50) NOT NULL,
  `acc_password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `ass_id` int(11) NOT NULL,
  `release_date` varchar(50) DEFAULT NULL,
  `return_date` varchar(50) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `last_user` varchar(100) DEFAULT NULL,
  `emp_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `acc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_unit`
--

CREATE TABLE `business_unit` (
  `bu_id` int(11) NOT NULL,
  `bu_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `business_unit`
--

INSERT INTO `business_unit` (`bu_id`, `bu_name`) VALUES
(2, 'ALLDAY MARTS, INC.'),
(1, 'ALLDAY RETAIL CONCEPTS, INC.'),
(15, 'Allday Rx'),
(10, 'ALLEASY'),
(14, 'AllGreen'),
(3, 'ALLHOME CORP.'),
(17, 'ALLVALUE'),
(5, 'CAFÉ VOILA, INC.'),
(6, 'CMSTAR MANAGEMENT'),
(18, 'COFFEE PROJECT'),
(7, 'FAMILY SHOPPERS UNLIMITED, INC.'),
(13, 'Get All'),
(8, 'GLENORCHY'),
(9, 'MAPI'),
(16, 'MARKS FITNESS PLACE INC.'),
(4, 'MEX'),
(11, 'PARALLAX, INC.'),
(12, 'THE VILLAGE SERVER INC.');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`) VALUES
(15, 'accounting'),
(16, 'business system'),
(28, 'corporate sales'),
(18, 'design'),
(19, 'engineering'),
(20, 'facilities management'),
(21, 'human resources'),
(22, 'marketing'),
(27, 'merchandising'),
(17, 'operations'),
(23, 'planning'),
(24, 'purchasing'),
(25, 'research'),
(26, 'visuals');

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

CREATE TABLE `designation` (
  `des_id` int(11) NOT NULL,
  `des_name` varchar(255) NOT NULL,
  `dept_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `designation`
--

INSERT INTO `designation` (`des_id`, `des_name`, `dept_id`) VALUES
(1, 'accounting', 15),
(2, 'audit', 15),
(3, 'finance', 15),
(4, 'IT - analytics', 16),
(5, 'IT - development', 16),
(6, 'IT - e-commerce', 16),
(7, 'IT - LS NAV', 16),
(8, 'master data controller (MDC)', 16),
(9, 'network team', 16),
(10, 'IT - on-site support (OSS)', 16),
(11, 'procurement and HO support', 16),
(12, 'SAP', 16),
(13, 'IT - head', 16),
(14, 'inventory control staff (ICS)', 17),
(15, 'operations', 17),
(16, 'pharmacy', 17),
(17, 'planning analyst', 17),
(18, 'planning and inventory analyst', 17),
(19, 'sales', 17),
(20, 'security', 17),
(21, 'visual merchandising', 17),
(22, 'warehouse DC', 17),
(23, 'warehouse replenishment', 17),
(24, 'interior design', 18),
(25, 'graphic design', 18),
(26, 'engineering', 19),
(27, 'facilities management', 20),
(28, 'human resources', 21),
(29, 'compensation and benefits', 21),
(30, 'employee relations', 21),
(31, 'recruitment', 21),
(32, 'training', 21),
(33, 'marketing', 22),
(34, 'marketing assistant', 22),
(35, 'graphic artist', 22),
(36, 'planning', 23),
(37, 'purchasing', 24),
(38, 'research', 25),
(39, 'content writer', 25),
(40, 'data analytics', 25),
(41, 'SEO', 25),
(42, 'visuals', 26),
(43, 'merchandising', 27),
(44, 'project team', 27),
(45, 'order management', 27),
(46, 'ECOM', 27);

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `device_id` int(11) NOT NULL,
  `computer_name` varchar(255) NOT NULL,
  `serial_number` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `device_type` varchar(50) DEFAULT NULL,
  `brand` varchar(100) NOT NULL,
  `specs` text DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `mname` varchar(50) DEFAULT NULL,
  `phone_no` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `emp_status` varchar(50) NOT NULL,
  `date_resigned` varchar(50) DEFAULT NULL,
  `dept_id` int(11) NOT NULL,
  `des_id` int(11) NOT NULL,
  `loc_id` int(11) NOT NULL,
  `bu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `loc_id` int(11) NOT NULL,
  `loc_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`loc_id`, `loc_name`) VALUES
(6, 'EVIA OFFICE'),
(5, 'HO ALABANG'),
(1, 'HO BPO LAS PINAS'),
(2, 'HO SHAW'),
(3, 'HQ BPO MOLINO'),
(4, 'STORES'),
(8, 'WAREHOUSE BICUTAN'),
(7, 'WAREHOUSE MAMPLASAN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`acc_id`);

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`ass_id`),
  ADD KEY `FKassignment924059` (`emp_id`),
  ADD KEY `FKassignment475159` (`device_id`),
  ADD KEY `FKassignment978236` (`acc_id`);

--
-- Indexes for table `business_unit`
--
ALTER TABLE `business_unit`
  ADD PRIMARY KEY (`bu_id`),
  ADD UNIQUE KEY `bu_name` (`bu_name`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`),
  ADD UNIQUE KEY `dept_name` (`dept_name`);

--
-- Indexes for table `designation`
--
ALTER TABLE `designation`
  ADD PRIMARY KEY (`des_id`),
  ADD UNIQUE KEY `des_name` (`des_name`),
  ADD KEY `FKdesignatio548195` (`dept_id`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`device_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `FKemployee585754` (`loc_id`),
  ADD KEY `FKemployee748922` (`bu_id`),
  ADD KEY `FKemployee995313` (`des_id`),
  ADD KEY `FKemployee855105` (`dept_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`loc_id`),
  ADD UNIQUE KEY `loc_name` (`loc_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `acc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `ass_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_unit`
--
ALTER TABLE `business_unit`
  MODIFY `bu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `des_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `device_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `loc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `FKassignment475159` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  ADD CONSTRAINT `FKassignment924059` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`),
  ADD CONSTRAINT `FKassignment978236` FOREIGN KEY (`acc_id`) REFERENCES `account` (`acc_id`);

--
-- Constraints for table `designation`
--
ALTER TABLE `designation`
  ADD CONSTRAINT `FKdesignatio548195` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FKemployee585754` FOREIGN KEY (`loc_id`) REFERENCES `location` (`loc_id`),
  ADD CONSTRAINT `FKemployee748922` FOREIGN KEY (`bu_id`) REFERENCES `business_unit` (`bu_id`),
  ADD CONSTRAINT `FKemployee855105` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`),
  ADD CONSTRAINT `FKemployee995313` FOREIGN KEY (`des_id`) REFERENCES `designation` (`des_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
