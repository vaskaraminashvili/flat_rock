/*
 Navicat Premium Data Transfer

 Source Server         : wamp
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : localhost:3306
 Source Schema         : flat_rock

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 24/05/2022 23:37:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for answers
-- ----------------------------
DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) NOT NULL,
  `correct` tinyint(1) NOT NULL,
  `answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of answers
-- ----------------------------
INSERT INTO `answers` VALUES (4, 14, 1, 0, 'The PHP configuration file, php.ini, is the final and most immediate way to affect PHP\'s functionality.', '2022-05-23 14:12:11', '2022-05-23 14:12:11');
INSERT INTO `answers` VALUES (5, 14, 1, 0, 'The php.ini file is read each time PHP is initialized.', '2022-05-23 14:15:44', '2022-05-23 14:15:44');
INSERT INTO `answers` VALUES (6, 14, 1, 1, 'Both of the above.', '2022-05-23 14:21:01', '2022-05-23 14:21:01');
INSERT INTO `answers` VALUES (7, 14, 1, 0, 'None of the above.', '2022-05-23 14:21:47', '2022-05-23 14:21:47');
INSERT INTO `answers` VALUES (8, 15, 1, 0, 'Strings', '2022-05-23 14:24:46', '2022-05-23 14:24:46');
INSERT INTO `answers` VALUES (9, 15, 1, 0, 'Arrays', '2022-05-23 14:24:52', '2022-05-23 14:24:52');
INSERT INTO `answers` VALUES (10, 15, 1, 0, 'Objects', '2022-05-23 14:24:57', '2022-05-23 14:24:57');
INSERT INTO `answers` VALUES (11, 15, 1, 1, 'Resources', '2022-05-23 14:25:01', '2022-05-23 14:25:01');
INSERT INTO `answers` VALUES (12, 19, 1, 0, 'To define a constant you have to use define() function.', '2022-05-23 14:25:14', '2022-05-23 14:25:14');
INSERT INTO `answers` VALUES (13, 19, 1, 0, 'To retrieve the value of a constant, you have to simply specify its name.', '2022-05-23 14:25:20', '2022-05-23 14:25:20');
INSERT INTO `answers` VALUES (14, 19, 1, 1, 'Both of the above.', '2022-05-23 14:25:27', '2022-05-23 14:25:27');
INSERT INTO `answers` VALUES (15, 19, 1, 0, 'None of the above.', '2022-05-23 14:25:32', '2022-05-23 14:25:32');
INSERT INTO `answers` VALUES (16, 20, 1, 1, '_METHOD_', '2022-05-23 14:25:46', '2022-05-23 14:25:46');
INSERT INTO `answers` VALUES (17, 20, 1, 0, ' _FILE_', '2022-05-23 14:25:46', '2022-05-23 14:25:46');
INSERT INTO `answers` VALUES (18, 20, 1, 0, ' _FUNCTION_', '2022-05-23 14:25:46', '2022-05-23 14:25:46');
INSERT INTO `answers` VALUES (19, 20, 1, 0, ' _CLASS_', '2022-05-23 14:25:46', '2022-05-23 14:25:46');
INSERT INTO `answers` VALUES (22, 21, 1, 0, 'srand()', '2022-05-23 14:29:32', '2022-05-23 14:29:32');
INSERT INTO `answers` VALUES (23, 21, 1, 1, 'rand()', '2022-05-23 14:29:37', '2022-05-23 14:29:37');
INSERT INTO `answers` VALUES (24, 21, 1, 0, 'random()', '2022-05-23 14:29:42', '2022-05-23 14:29:42');
INSERT INTO `answers` VALUES (25, 21, 1, 0, 'None of the above.', '2022-05-23 14:29:45', '2022-05-23 14:29:45');

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (4, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (5, '2022_05_21_133832_create_quizzes_table', 1);
INSERT INTO `migrations` VALUES (6, '2022_05_23_092421_create_questions_table', 1);
INSERT INTO `migrations` VALUES (7, '2022_05_23_092939_create_answers_table', 1);
INSERT INTO `migrations` VALUES (8, '2022_05_23_093416_create_results_table', 1);
INSERT INTO `migrations` VALUES (9, '2022_05_24_090416_create_site_users_table', 2);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `last_used_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `personal_access_tokens_token_unique`(`token`) USING BTREE,
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type`, `tokenable_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quiz_id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('Binary','Multiple choice') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `score` int(11) NOT NULL,
  `question` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES (15, 3, 'Multiple choice', 1, 1, 'Which of the following type of variables are special variables that hold references to resources external to PHP (such as database connections)?', '2022-05-23 13:58:42', '2022-05-23 13:58:42');
INSERT INTO `questions` VALUES (14, 3, 'Multiple choice', 1, 1, 'Which of the following is true about php.ini file?', '2022-05-23 13:57:50', '2022-05-23 13:57:50');
INSERT INTO `questions` VALUES (19, 3, 'Multiple choice', 1, 1, 'Which of the following is correct about constants?', '2022-05-23 14:07:00', '2022-05-23 14:07:00');
INSERT INTO `questions` VALUES (20, 3, 'Multiple choice', 1, 1, 'Which of the following magic constant of PHP returns class method name?', '2022-05-23 14:07:15', '2022-05-23 14:07:15');
INSERT INTO `questions` VALUES (21, 3, 'Multiple choice', 1, 1, 'Which of the following variable is used to generate random numbers using PHP?', '2022-05-23 14:07:22', '2022-05-23 14:07:22');
INSERT INTO `questions` VALUES (27, 4, 'Binary', 1, 60, 'asdas', '2022-05-24 19:34:26', '2022-05-24 19:34:26');

-- ----------------------------
-- Table structure for quizzes
-- ----------------------------
DROP TABLE IF EXISTS `quizzes`;
CREATE TABLE `quizzes`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `time` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of quizzes
-- ----------------------------
INSERT INTO `quizzes` VALUES (1, 'title', 'deas da', 20, 10, 1, NULL, '2022-05-23 13:55:09', '2022-05-23 13:55:09');
INSERT INTO `quizzes` VALUES (2, 'Php quiz', 'Following quiz provides Multiple Choice Questions (MCQs) related to PHP. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz.', 30, 100, 1, '2022-05-23 13:52:15', '2022-05-23 13:55:06', '2022-05-23 13:55:06');
INSERT INTO `quizzes` VALUES (3, 'Php quiz ?', 'Following quiz provides Multiple Choice Questions (MCQs) related to PHP. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz.', 1, 100, 1, '2022-05-23 13:52:41', '2022-05-23 14:52:20', NULL);
INSERT INTO `quizzes` VALUES (4, 'quiz 234 32', 'asdfsfsdfs d', 4, 30, 1, '2022-05-24 19:33:51', '2022-05-24 19:33:51', NULL);

-- ----------------------------
-- Table structure for results
-- ----------------------------
DROP TABLE IF EXISTS `results`;
CREATE TABLE `results`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `site_user_id` bigint(20) UNSIGNED NOT NULL,
  `quiz_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` double(8, 2) NOT NULL,
  `answered_questions` double(8, 2) NOT NULL,
  `started_at` datetime(0) NULL DEFAULT NULL,
  `finished_at` datetime(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of results
-- ----------------------------
INSERT INTO `results` VALUES (1, 1, 3, '1', 0.00, 5.00, '2022-05-24 18:12:38', '2022-05-24 18:18:38', '2022-05-24 17:28:15', '2022-05-24 17:28:15');
INSERT INTO `results` VALUES (2, 2, 3, '1', 3.00, 5.00, '2022-05-24 18:13:38', '2022-05-24 18:12:38', '2022-05-24 17:28:31', '2022-05-24 17:28:31');
INSERT INTO `results` VALUES (3, 1, 3, '1', 3.00, 5.00, '2022-05-24 18:12:38', '2022-05-24 18:12:38', '2022-05-24 18:12:56', '2022-05-24 18:12:56');
INSERT INTO `results` VALUES (4, 1, 3, '1', 1.00, 5.00, '2022-05-24 19:08:50', '2022-05-24 19:10:02', '2022-05-24 19:10:06', '2022-05-24 19:10:06');

-- ----------------------------
-- Table structure for site_users
-- ----------------------------
DROP TABLE IF EXISTS `site_users`;
CREATE TABLE `site_users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site_users
-- ----------------------------
INSERT INTO `site_users` VALUES (1, 'Vasil', 'Raminashvili', 'admin@admin.com', '2022-05-24 17:27:18', '2022-05-24 17:27:18');
INSERT INTO `site_users` VALUES (2, 'Vasil', 'Raminashvili', '123123@email.com', '2022-05-24 17:28:31', '2022-05-24 17:28:31');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Admin', 'admin@example.com', '2022-05-23 11:23:57', '$2y$10$F3B1noszjvKItutwEXvcTubUJB90kQ5HpNPpE7C2cgVVNUs8SGjOm', 'UwqZ7rh0FH', '2022-05-23 11:23:57', '2022-05-23 11:23:57');

SET FOREIGN_KEY_CHECKS = 1;
