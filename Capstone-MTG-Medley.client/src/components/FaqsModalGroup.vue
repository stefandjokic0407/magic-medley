<template>

  <!-- SECTION FAQs modal -->
  <section class="modal fade" id="faqsModal" aria-hidden="true" aria-labelledby="faqsModalLabel" tabindex="-1">
    <div class="modal-dialog modal-sm modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="faqsModalLabel">FAQs</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column">
          <button class="btn btn-outline-dark border-0" data-bs-target="#mtgExplainedModalToggle"
            data-bs-toggle="modal">What is Magic
            the Gathering?</button>
          <button class="btn btn-outline-dark border-0" data-bs-target="#magicMedleyModalToggle"
            data-bs-toggle="modal">Why build
            Magic
            Medley?</button>
          <button class="btn btn-outline-dark border-0" data-bs-target="#howToPlayModalToggle"
            data-bs-toggle="modal">How to
            play</button>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION What is MtG modal -->
  <section class="modal fade" id="mtgExplainedModalToggle" aria-hidden="true" aria-labelledby="mtgExplainedModalToggle"
    tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered ">
      <div class="modal-content explain-mtg">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">What is Magic the Gathering?</h5>
          <span>
            <button class="btn btn-outline-light border-0" data-bs-target="#faqsModal" data-bs-toggle="modal">Back to
              FAQs</button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </span>
        </div>
        <div class="modal-body">
          <p>Magic: The Gathering (colloquially known as Magic or MTG) is a tabletop and digital collectible card game
            created by Richard Garfield. Released in 1993 by Wizards of the Coast (now a subsidiary of Hasbro), Magic
            was the first trading card game and had approximately thirty-five million players as of December
            2018, and over twenty billion Magic cards were produced in the period from 2008 to 2016, during
            which time it grew in popularity.<br><br>

            A player in Magic takes the role of a Planeswalker, a powerful wizard who can travel ("walk") between
            dimensions ("planes") of the Multiverse, doing battle with other players as Planeswalkers by casting spells,
            using artifacts, and summoning creatures as depicted on individual cards drawn from their individual decks.
            A player defeats their opponent typically (but not always) by casting spells and attacking with creatures to
            deal damage to the opponent's "life total," with the object being to reduce it from 20 to 0. Although the
            original concept of the game drew heavily from the motifs of traditional fantasy role-playing games such as
            Dungeons & Dragons, the gameplay bears little similarity to paper-and-pencil games, while simultaneously
            having substantially more cards and more complex rules than many other card games.<br><br>

            Magic can be played by two or more players, either in person with printed cards or on a computer, smartphone
            or tablet with virtual cards through the Internet-based software Magic: The Gathering Online or other video
            games such as Magic: The Gathering Arena and Magic Duels. It can be played in various rule formats, which
            fall into two categories: constructed and limited. Limited formats involve players building a deck
            spontaneously out of a pool of random cards with a minimum deck size of 40 cards; in constructed formats,
            players create decks from cards they own, usually with a minimum of 60 cards per deck.<br><br>

            New cards are released on a regular basis through expansion sets. Further developments include the Wizards
            Play Network played at the international level and the worldwide community Players Tour, as well as a
            substantial resale market for Magic cards. Certain cards can be valuable due to their rarity in production
            and utility in gameplay, with prices ranging from a few cents to tens of thousands of dollars.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION What is Magic Medley modal -->
  <section class="modal fade" id="magicMedleyModalToggle" aria-hidden="true" aria-labelledby="magicMedleyModalToggle"
    tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">Why build Magic Medley?</h5>
          <span>
            <button class="btn btn-outline-dark border-0" data-bs-target="#faqsModal" data-bs-toggle="modal">Back to
              FAQs</button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </span>
        </div>
        <div class="modal-body">
          Hide this modal and show the first with the button below.
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION How to play modal -->
  <section class="modal fade" id="howToPlayModalToggle" aria-hidden="true" aria-labelledby="howToPlayModalToggle"
    tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">How to play</h5>
          <span>
            <button class="btn btn-outline-dark border-0" data-bs-target="#faqsModal" data-bs-toggle="modal">Back to
              FAQs</button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </span>
        </div>
        <div class="modal-body">
          <img class="img-fluid"
            src="https://images.ctfassets.net/s5n2t79q9icq/30NamqPpPf4ygaSkYlTAwU/08a9a63ec531ec04659a25cf9ab8b675/new-bg-playmat"
            alt="">
          <img class="img-fluid"
            src="https://media.magic.wizards.com/image_legacy_migration/mtg/images/tcg/resources/cardanatomy_en.jpg"
            alt="">
        </div>
      </div>
    </div>
  </section>

</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.explain-mtg {
  background-image: url(https://images.ctfassets.net/s5n2t79q9icq/684AfTBXMgTnyfifLHcUzv/de7ea09847a02b8dfec7cf6174446dad/bg-latest-product.jpg?q=70);
  background-position: center;
  background-size: cover;
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>