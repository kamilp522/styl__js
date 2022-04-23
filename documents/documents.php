<!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="../images/icons/fireplace__icon.png" />
    <link rel="apple-touch-icon" href="../images/icons/fireplace__icon.png" />

    <!--Fireplace icon by Icons8-->
    <!--Video in the the hero section by Mikhail Nilov: https://www.pexels.com/video/cold-relaxing-winter-photography-6507518/-->

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />

    <meta
      name="description"
      content="Styl-Art-Kom, Kominki Pokojowe Krosno. Firma działająca od ponad 30 lat na terenie Krosna, podkarpacia i nie tylko."
    />

    <link rel="stylesheet" href="../montserrat.css" />
    <title>Styl-Art-Kom, Kominki Pokojowe Krosno</title>

    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
      }

      html > div[style] {
        display: none !important;
      }

      body {
        background-color: #0d0d0d;
        text-align: center;
      }

      .go-back {
        position: fixed;
        top: 30px;
        left: 30px;
        font-size: 30px;
        color: rgb(73, 100, 255);
        text-decoration: none;
        font-weight: 600;
        background-color: #0d0d0d;
      }

      @media (max-width: 800px) {
        .go-back {
          right: 5%;
          left: 5%;
        }
      }


      a {
        color: rgb(73, 100, 255);
      }

      a:hover {
        color: rgb(255, 52, 52);
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 15px;
        padding: 0 15px
      }

      @media (max-width: 800px) {
        div {
          margin-top: 100px;
        }
      }

      div a {
        padding: 2px 0;
        letter-spacing: 0.5px;
        text-decoration: none;
        transition: 0.2s ease;
      }

      @media (min-width: 1000px) {
        div a:hover {
          color: rgb(255, 52, 52);
          font-size: 17.5px;
       }
      }


    </style>
  </head>

  <body>
    <a href="../index.html" class="go-back">POWRÓT</a>

    <div>
    <?php
    $files = array_slice(scandir('./pdf'), 2);

    for ($i = 0; $i <= (count($files)); $i++) {
        $path = "./pdf/" . $files[$i];
        $out2 = '     <a target="_blank" href=' . $path . '>' . $files[$i] . '</a><br>';
        echo $out2;
    }

    ?>
</div>
  </body>
</html>

