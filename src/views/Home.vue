<template>
  <section class="section">
    <div class="container">
      <BeeIcon width="200" height="150" />
      <div class="columns is-centered">
        <div class="column is-half">
          <br />
          <h1 class="title">Heimspiel</h1>
          <br />
          <h2 class="subtitle">Spielregeln</h2>
          <p class="has-text-left">
            Und so geht's! Gemeinsam mit deinem Team sammelst du Punkte, indem
            ihr gemeinsam den Alltag bewältigt. Jedes Teammitglieder hat dabei
            unterschiedliche Fähigkeiten, die es bei der Erfüllung der Quests
            (Aufgaben) einsetzen kann. Am Ende des Tages bekommt ihr eine
            Belohnung für euer Ergebnis.
          </p>
          <br />
          <p class="has-text-left">
            <strong>
              Das Spiel soll euch helfen, den Alltag zu strukturieren und
              gemeinsam zu meistern.
            </strong>
          </p>
          <br /><br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/LGcex_mjoaE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br /><br />
          <br /><br />
          <SpecialButton target="/add-team">Jetzt mitspielen!</SpecialButton>
          <br />
        </div>
      </div>
      <RandomTitleGrid position="top-right" />
      <RandomTitleGrid position="bottom-left" />
    </div>
  </section>
</template>

<script>
import SpecialButton from "@/components/general/SpecialButton";
import BeeIcon from "@/components/icons/BeeIcon";
import RandomTitleGrid from "@/components/icons/RandomTileGrid";

export default {
  name: "Home",
  components: {
    SpecialButton,
    BeeIcon,
    RandomTitleGrid
  }
};
</script>
