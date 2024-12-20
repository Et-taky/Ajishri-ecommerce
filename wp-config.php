<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K~0KZsY_rT9cpRE)5[QkEiOM84ke*4xwR{S$Uo2}{,$EzGtOQv.gt4h7 !Z,<-<3' );
define( 'SECURE_AUTH_KEY',  'p5+MLmejpQl>I!5B&.H8SB``9@yq$:gp&`(0rB,-v[?^s,DfMSP@7>d^#G0fD%W?' );
define( 'LOGGED_IN_KEY',    '/EiTol?lRt8k%UM4210se9O]i|mr~]vfYjDZ+Lss@7h5O*T1zdd%*U%LNg$F|@nG' );
define( 'NONCE_KEY',        'Ja9U|&Sb?(#_PyJqM>!jn}BI~*W1jm*`(<Wb~z(h_sd76T;6,q<b[oab{^hM*hyE' );
define( 'AUTH_SALT',        '=t`u,sAs,&M|;JZ8w-%vmT mJ(yBP&R:oV[>K4&b&]W;*E@=u%Ff.$D!0_,sYi@0' );
define( 'SECURE_AUTH_SALT', 'oAlo%i2Jrx&eZG(@Ib(?4[ioNjx_ms/R/&sF@,tYsA@#Iiv/vSxXO(2a;xv0YHj`' );
define( 'LOGGED_IN_SALT',   '|y%)b%}/D`bs%0<b[ba16GuDL!G)F/>`i2]Z`A$l7{s%M}!H_7HLd#uV1oo3G.X,' );
define( 'NONCE_SALT',       'CLP,FR~H =8ZzI#FR?Gi^$m<h-n5vq,gsD<d_`<v;A%a-VlvxwE1]4u<f.)>A2M3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
