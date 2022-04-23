<!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="./images/icons/fireplace__icon.png" />
    <link rel="apple-touch-icon" href="./images/icons/fireplace__icon.png" />

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
      }

      @media (max-width: 450px) {
        div {
          margin-top: 40px;
        }
      }

      div a {
        padding: 4px 0;
        letter-spacing: 0.5px;
        text-decoration: none;
        transition: 0.2s ease;
      }

      div a:hover {
        color: rgb(255, 52, 52);
        font-size: 17.5px;
      }
    </style>
  </head>

  <body>
    <a href="../index.html" class="go-back">POWRÓT</a>

    <div>
    <?php
    // $files = array_slice(scandir('./pdf'), 2);

    // for ($i = 0; $i <= (count($files)); $i++) {
    //     $path = "./pdf/" . $files[$i];
    //     $out2 = '     <a href=' . $path . '>' . $files[$i] . '</a><br>';
    //     echo $out2;
    // }

    echo "content";
    ?>
</div>
  </body>
</html>

<!-- <div>
  <a href="./pdf/Belka-Kominkowa-Luk.pdf" target="blank"
    >Belka-Kominkowa-Luk.pdf</a
  >
  <a href="./pdf/Belka-Kominkowa-Skosna.pdf" target="blank"
    >Belka-Kominkowa-Skosna.pdf</a
  >
  <a href="./pdf/Belka-Kominkowa-Prosta.pdf" target="blank"
    >Belka-Kominkowa-Prosta.pdf</a
  >
  <a href="./pdf/Biokominek-Narozny-Zamowienie.pdf" target="blank"
    >Biokominek-Narozny-Zamowienie.pdf</a
  >
  <a href="./pdf/Biokominek-Prosty-Zamowienie.pdf" target="blank"
    >Biokominek-Prosty-Zamowienie.pdf</a
  >
  <a href="./pdf/Broszura-Watts.pdf" target="blank">Broszura-Watts.pdf</a>
  <a href="./pdf/Belka-Kominkowa-Prosta.pdf" target="blank"
    >Belka-Kominkowa-Prosta.pdf</a
  >
  <a href="./pdf/Cennik-Detaliczny-od-01.05.2017r.pdf" target="blank"
    >Cennik-Detaliczny-od-01.05.2017r.pdf</a
  >
  <a
    href="./pdf/Deklaracja-Osiagnietych-Wynikow-Poczas-Badania-PL_KOZA_AB.pdf"
    target="blank"
    >Deklaracja-Osiagnietych-Wynikow-Poczas-Badania-PL_KOZA_AB.pdf</a
  >
  <a href="./pdf/Belka-Kominkowa-Prosta.pdf" target="blank"
    >Belka-Kominkowa-Prosta.pdf</a
  >
  <a href="./pdf/Belka-Kominkowa-Prosta.pdf" target="blank"
    >Belka-Kominkowa-Prosta.pdf</a
  >
  <a href="./pdf/Belka-Kominkowa-Prosta.pdf" target="blank"
    >Belka-Kominkowa-Prosta.pdf</a
  >
</div> -->
