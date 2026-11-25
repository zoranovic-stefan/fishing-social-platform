CREATE TABLE `catches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`species` varchar(100) NOT NULL,
	`length_cm` decimal(6,2) NOT NULL,
	`weight_kg` decimal(7,3) NOT NULL,
	`caught_at` datetime NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `catches_id` PRIMARY KEY(`id`)
);
