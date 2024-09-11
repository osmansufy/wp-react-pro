<?php

/* 
Plugin Name: WP React Pro

*/

function wp_react_pro_enqueue_scripts()
{
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
    wp_enqueue_script('wp-react-pro', plugin_dir_url(__FILE__) . 'build/index.js', $asset_file['dependencies'], time(), true);
}
add_action('admin_enqueue_scripts', 'wp_react_pro_enqueue_scripts');
