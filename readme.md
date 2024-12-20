# Ajishri un E-Commerce WordPress Site

## Description
Ce projet est un site de commerce électronique développé avec WordPress. Il permet aux utilisateurs de parcourir des produits, de les ajouter à un panier et de passer des commandes. Le site utilise le plugin WooCommerce pour la gestion des produits et des paiements.

---

## Prérequis
Avant de commencer, assurez-vous que votre environnement répond aux exigences suivantes :

- **Serveur Web** : Apache ou Nginx.
- **PHP** : Version 7.4 ou supérieure.
- **Base de données** : MySQL 5.7+ ou MariaDB 10.3+.
- **Gestionnaire de fichiers** : Accès FTP ou un gestionnaire local.
- **Composer** (optionnel) : Pour gérer les dépendances PHP si nécessaire.

---

## Installation

### Étape 1 : Télécharger les fichiers WordPress et le projet
1. Clonez le dépôt du projet avec la commande suivante :
   ```bash
   git clone https://github.com/Et-taky/Ajishri-ecommerce.git
   cd votre-projet
2. Téléchargez la dernière version de WordPress depuis wordpress.org.
3. Déplacez les fichiers WordPress téléchargés dans le dossier racine du projet.

### Étape 2 : Configurer la base de données
1. Accédez à votre outil de gestion de base de données (phpMyAdmin, Adminer, etc.).
2. Créez une nouvelle base de données nommée `wordpress`.
3. Importez le fichier SQL fourni avec le projet, situé dans le répertoire `/wordpress(2).sql`.

---

### Étape 3 : Configurer WordPress
1. Renommez le fichier `wp-config-sample.php` en `wp-config.php` dans le dossier racine :
   ```bash
   mv wp-config-sample.php wp-config.php
2. Ouvrez le fichier wp-config.php et configurez les paramètres suivants :
```php
define('DB_NAME', 'wordpress'); // Nom de la base de données
define('DB_USER', 'root'); // Remplacez par votre nom d'utilisateur MySQL
define('DB_PASSWORD', 'root'); // Remplacez par votre mot de passe MySQL
define('DB_HOST', 'localhost'); // Adresse du serveur (par défaut localhost)
```
### Identifiants administrateur principal
Voici les identifiants par défaut pour accéder à l'administration du site :

URL d'administration :
```bash
 localhost/votre-nom-du-projet/wp-admin
 ```
Nom d'utilisateur : 
```bash
Anasslaz14@gmail.com
```
Mot de passe :
```bash
 anass18/11LAZ
```
