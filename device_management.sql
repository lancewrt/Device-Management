-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2025 at 02:30 AM
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
  `location_id` int(11) DEFAULT NULL,
  `business_unit` varchar(100) DEFAULT NULL,
  `computer_name` varchar(100) DEFAULT NULL,
  `last_laptop_user` varchar(100) DEFAULT NULL,
  `date_return` date DEFAULT NULL,
  `notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assignment_id`, `employee_id`, `device_id`, `location_id`, `business_unit`, `computer_name`, `last_laptop_user`, `date_return`, `notes`) VALUES
(1, 2, 1, 1, 'Family Shoppers', 'APL-FSU-OPSL012', 'MARCAIDA, ARIES', '2023-11-09', NULL),
(3, 1, 2, 1, 'ALLHOME CORP', 'APL-AHC-OPSL006', NULL, '2023-05-23', NULL);

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
(1, 'Operations'),
(2, 'Accounting'),
(3, 'Human Resources'),
(4, 'Business System'),
(5, 'Merchandising'),
(6, 'Marketing'),
(7, 'Facilities Management'),
(8, 'Engineering'),
(9, 'Purchasing'),
(10, 'Finance'),
(11, 'Security'),
(12, 'Training'),
(13, 'Business System');

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
(1, 'Planning and Inventory'),
(2, 'Operations'),
(3, 'Finance'),
(4, 'Training'),
(5, 'Accounting'),
(6, 'SAP');

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `device_id` int(11) NOT NULL,
  `serial_number` varchar(100) DEFAULT NULL,
  `device_type` varchar(50) NOT NULL,
  `brand_name` varchar(50) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `specifications` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`device_id`, `serial_number`, `device_type`, `brand_name`, `model`, `specifications`) VALUES
(1, 'LANRKD004356426', 'Laptop', 'Asus', 'ROG Strix G512LU', 'i7; 1TB SSD; WIN 10 PRO; 16GB RAM; 64 BIT; GeForce'),
(2, 'LANRKD00436542E', 'Laptop', 'Asus', 'ROG Strix G512LU', 'i7; 1TB SSD; WIN 10 PRO; 16GB RAM; 64 BIT; GeForce');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `designation_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `last_name`, `first_name`, `middle_name`, `department_id`, `designation_id`) VALUES
(1, 'MARCAIDA', 'ARIES', 'E.', 1, 1),
(2, 'ERALDO', 'MARIA GABCRELE', 'A.', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `name`) VALUES
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
  ADD KEY `device_id` (`device_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `designation`
--
ALTER TABLE `designation`
  ADD PRIMARY KEY (`designation_id`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`device_id`),
  ADD UNIQUE KEY `serial_number` (`serial_number`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `department_id` (`department_id`),
  ADD KEY `fk_designation_id` (`designation_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `assignment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `designation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `device_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  ADD CONSTRAINT `assignment_ibfk_2` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  ADD CONSTRAINT `assignment_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`),
  ADD CONSTRAINT `fk_designation_id` FOREIGN KEY (`designation_id`) REFERENCES `designation` (`designation_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
