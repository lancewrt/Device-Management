-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2025 at 10:21 AM
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

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assignment_id`, `employee_id`, `device_id`, `last_device_user`, `date_return`, `notes`, `release_date`) VALUES
(1, 2, 1, 'MARCAIDA, ARIES', '2023-11-09', NULL, NULL),
(3, 1, 2, NULL, '2023-05-23', NULL, NULL),
(6, 7, 9, 'try', NULL, '', '2025-02-18');

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
(2, 'Accounting'),
(4, 'Business System'),
(8, 'Engineering'),
(7, 'Facilities Management'),
(10, 'Finance'),
(3, 'Human Resources'),
(6, 'Marketing'),
(5, 'Merchandising'),
(1, 'Operations'),
(9, 'Purchasing'),
(11, 'Security'),
(12, 'Training');

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
(5, 'Accounting'),
(3, 'Finance'),
(2, 'Operations'),
(1, 'Planning and Inventory'),
(6, 'SAP'),
(4, 'Training');

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

--
-- Dumping data for table `device_account`
--

INSERT INTO `device_account` (`device_account_id`, `dusername`, `dpassword`, `employee_id`, `device_id`) VALUES
(3, 'try', 'try121212', 7, 9);

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
  `business_unit` varchar(255) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `emp_status` varchar(255) DEFAULT NULL,
  `date_resigned` text DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `designation_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `last_name`, `first_name`, `middle_name`, `mobile_no`, `email`, `business_unit`, `status`, `emp_status`, `date_resigned`, `department_id`, `designation_id`, `location_id`) VALUES
(1, 'MARCAIDA', 'ARIES', 'E.', NULL, NULL, '', 'active', 'direct', NULL, 1, 1, NULL),
(2, 'ERALDO', 'MARIA GABCRELE', 'A.', NULL, NULL, '', 'active', 'direct', NULL, 1, 2, NULL),
(7, 'try1', 'try1', 't', NULL, NULL, 'ALLHOME CORP', 'active', 'direct', NULL, 6, 4, 11);

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
(11, 'HO BPO LAS PIÑAS'),
(1, 'HQ SHAW');

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
  ADD KEY `fk_employee_location` (`location_id`);

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
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `designation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
  ADD CONSTRAINT `fk_employee_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
