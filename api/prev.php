<?php

$slug = ltrim($_SERVER['REQUEST_URI'], '/');
$slug = $slug == "" ? 'index' : $slug;

require_once dirname(__FILE__)."/../.prev/php/index.php";

$app = json_encode([
    'component' => $slug,
    'props' => getServerSideProps($slug),
    'url' => "/{$slug}",
]);

echo <<<EOF
<html>
<div id="app" data-page='$app'></dov>
<script src="js/app.js"></script>
</html>
EOF;
