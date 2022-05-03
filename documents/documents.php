<!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="../images/icons/fireplace__icon.png" />
    <link rel="apple-touch-icon" href="../images/icons/fireplace__icon.png" />
    <link rel="canonical" href="htpps://kominkipokojowe.pl/documents/documents.php" />

    <!--Fireplace icon by Icons8-->
    <!--Video in the the hero section by Mikhail Nilov: https://pexels.com/video/cold-relaxing-winter-photography-6507518/-->

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />

    <meta
      name="description"
      content="Styl-Art-Kom, Kominki Pokojowe Krosno. Niniejsza strona zawiera plany kominków, atesty i inne."
    />

    <link rel="stylesheet" href="../montserrat.css" />
    <link rel="stylesheet" href="documents.css" />
    <title>Styl-Art-Kom, dokumenty</title>

  </head>

  <body>
    
  <div class="go-back-wrapper">
      <a href="../" class="go-back">POWRÓT</a>
  </div>
    

    <div class="pdf-wrapper">
      <?php
        $files = array_slice(scandir('./pdf'), 2);

        for ($i = 0; $i <= (count($files)); $i++) {
          $path = "./pdf/" . $files[$i];
          $out2 = '     <a target="_blank" href=' . $path . '>' . $files[$i] . '</a><br>';
          echo $out2;
         }

    ?>
    </div class="pdf-wrapper">
  </body>
</html>

