<!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="../images/icons/fireplace__icon.png" />
    <link rel="apple-touch-icon" href="../images/icons/fireplace__icon.png" />
    <link rel="canonical" href="https://kominkipokojowe.pl/old_gallery/old_gallery.php" />


    <!--Fireplace icon by Icons8-->
    <!--Video in the the hero section by Mikhail Nilov: https://www.pexels.com/video/cold-relaxing-winter-photography-6507518/-->

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />

    <meta
      name="description"
      content="Styl-Art-Kom, archiwum starych zdjęć."
    />

    <link rel="stylesheet" href="old_gallery.css" />
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../montserrat.css" />
    <title>Styl-Art-Kom, archiwum zdjęć </title>
  </head>
  
  <body>

  <div class="gallery-modal">
      <div class="gallery-modal-image-wrapper">
        <div class="close-icon-bar"></div>
        <img src="../images/icons/circle__times.png" alt="close/zamknij" class="close-icon">
        <div class="gallery-bar-right"></div>
        <img src="../images/icons/arrow__circle__right.png" alt="next/nastepny" class="gallery-modal-arrow-right">
        <div class="gallery-bar-left"></div>
        <img src="../images/icons/arrow__circle__left.png" alt="previous/poprzedni" class="gallery-modal-arrow-left">
      </div>
    </div>
  <nav class="gallery-nav">
      <div class="navbar-container">
        <a href="/" class="nav-logo">Styl-Art-Kom</a>
    </div>
    </nav>
    

      <div class="gallery-container">
        <div class="gallery-wrapper">

<?php
?>
<!-- <br>
<br>
<br> -->
<?php
$files = array_slice(scandir('img'), 2);   
 for ($i = 1; $i < count($files); $i++) {
        echo '<div class="image-wrapper">';
        $num = $i;
        $out = "img/g" . $num . ".jpg ";
        echo "<img src=" . $out . " alt='kominki_krosno'></img>";
        echo '</div>';
}  ?> 

</div>
</div>
      <footer class="footer-container">
        <div class="footer-wrap">
          <div class="footer-logo-wrap">
            <a href="/" class="footer-logo">Styl-Art-Kom</a>
            <small class="website-rights"></small>
          </div>
          <div class="footer-links-wrap">
            <a href="../advices/advices.html" class="advices">Porady</a>
            <a href="#" class="old-gallery"
              >Archiwum zdjęć</a
            >
            <a href="../documents/documents.php" target="_blank" class="documents">Dokumenty</a>
          </div>
        </div>
      </footer>


    
    <script src="old_gallery.js"></script>
  </body>
</html>
