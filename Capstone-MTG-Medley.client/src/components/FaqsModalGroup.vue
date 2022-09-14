<template>

  <!-- SECTION Modal--FAQs Menu -->
  <section class="modal fade" id="faqsModal" aria-hidden="true" aria-labelledby="faqsModalLabel" tabindex="-1">
    <div class="modal-dialog modal-sm modal-dialog-centered">
      <div class="modal-content faq-modal">
        <div class="modal-header">
          <h5 class="modal-title" id="faqsModalLabel">FAQs</h5>
          <div class="text-light selectable" data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <div class="my-btn m-2" data-bs-target="#mtgExplainedModalToggle" data-bs-toggle="modal">What is Magic
            the Gathering?</div>
          <div class="my-btn m-2" data-bs-target="#howToPlayModalToggle" data-bs-toggle="modal">How to
            play</div>
          <div class="my-btn m-2" data-bs-target="#glossaryModalToggle" data-bs-toggle="modal">Glossary</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION Modal What is MtG -->
  <section class="modal fade" id="mtgExplainedModalToggle" aria-hidden="true" aria-labelledby="mtgExplainedModalToggle"
    tabindex="-1">
    <div class="modal-dialog modal modal-dialog-scrollable modal-dialog-centered ">
      <div class="modal-content explain-mtg-modal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">What is Magic the Gathering?</h5>
          <span class="d-flex">
            <button class="btn btn-outline-light border-0" data-bs-target="#faqsModal" data-bs-toggle="modal">Back to
              FAQs</button>
            <div class="text-light selectable" data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i>
            </div>
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
            <br><br>

            New cards are released on a regular basis through expansion sets. Further developments include the Wizards
            Play Network played at the international level and the worldwide community Players Tour, as well as a
            substantial resale market for Magic cards. Certain cards can be valuable due to their rarity in production
            and utility in gameplay, with prices ranging from a few cents to tens of thousands of dollars.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION Modal--How to play -->
  <section class="modal fade" id="howToPlayModalToggle" aria-hidden="true" aria-labelledby="howToPlayModalToggle"
    tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content how-mtg-modal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">How to play</h5>
          <span class="d-flex">
            <button class="btn btn-outline-light border-0" data-bs-target="#faqsModal" data-bs-toggle="modal">Back to
              FAQs</button>
            <div class="text-light selectable" data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i>
            </div>
          </span>
        </div>
        <div class="modal-body">
          <span class="row pb-2 text-center"><em>This guide is intended as a basic overview of a typical game of Magic.
              Many
              of the less
              popular mechanics
              have been omitted.</em></span>


          <!-- SECTION Formats -->
          <section class="row">
            <div class="col-12">
              <p class="fs-4 bg-dark rounded text-light ps-2 mb-2">PLAY FORMATS</p>
            </div>
            <div class="col-12 karn-img">
              <div class="row">
                <div class="col-6">
                  <p>
                    A format limits the cards available to you for play within your deck. MtG officially recognizes 21
                    different formats but we will only be covering the 7 major options that use a prebuilt deck.<br>
                    A deck consists of all the cards available to you in a game. Some formats allow a side board
                    consisting
                    of additional cards that can be swapped out with cards in your main deck between rounds of a match.
                    Some
                    cards even allow you to add sideboard into your deck mid-game.<br>

                    Unless otherwise stated, you start the game at 20 life and all cards in you main deck are shuffled,
                    creating your library, and you draw 7. At this point you choose to accept your hand or mulligan
                    .<br>

                    All formats limit the count of any individual card and, with the exception of basic lands (Plains,
                    Island, Swamp, Mountain, Forest, and Wastes), your
                    combined deck and sideboard usually may not contain more than four of any individual card.<br>

                    Most formats are designed for 2 players, but casual games of any format may have more. During
                    multiplayer gameplay, a player may choose to attack any other player, regardless of their position
                    on
                    the table, and can also choose to attack multiple different players during their attack phase.
                    Permanents, spells, and abilities can also target any player around the table (as long as they
                    don't explicitly say they must be used on "you").<br>

                    Many of the
                    other formats require you to build a deck at the start of play to use for that event. For more
                    information on formats, please visit the official site <a
                      href="https://magic.wizards.com/en/formats">here</a>.
                  </p>
                </div>
              </div>

            </div>
            <div class="col-8">
              <img class="img-fluid"
                src="https://images.ctfassets.net/s5n2t79q9icq/4NbFQcbtJSSxWE0GwE7XrS/2795d8165774acbd0a44dbe34c9f0ec2/playing-cards-img.png"
                alt="">
            </div>
            <div class="col-4">
              <div class="accordion mt-2" id="accordionExample">

                <!-- SECTION Standard -->
                <section class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Standard
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body limit-size">
                      <ul class="list-unstyled d-flex justify-content-around">
                        <li class="text-center" title="Deck Size"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/1A5vv0aemIJashQ2vzqTvW/c1735cd99ba334762b07fd47d6e483ec/icon-deck.svg"
                            alt=""> <br><span title="Main">60</span><span title="Sideboard">(15)</span></li>
                        <li class="text-center" title="Number of Players"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/3SAnh2ZE3pFlo13l0Jqb7B/550886a1c3166d17f1d50daaca5edc87/icon-players.svg"
                            alt=""><br>2</li>
                        <li class="text-center" title="Game Duration"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/4pIveHFO9lhMRQ7pdHZZmq/f71d0f9dccaaeacf309f098a63d42695/icon-duration.svg"
                            alt=""><br>20 min</li>
                      </ul>
                      <p>These are one-on-one games with 60 card minimums for the main deck (up to 15 card
                        sideboard).<br> Standard is a dynamic format where you build decks and play using cards in your
                        collection
                        from
                        recently released Magic sets.
                      </p>
                      <button class="btn btn-outline-dark d-flex my-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Legal sets
                      </button>
                      <div class="collapse" id="collapseExample">
                        <ul class="set-list">
                          <li>Streets of New Capenna</li>
                          <li>Kamigawa: Neon Dynasty</li>
                          <li>Innistrad: Crimson Vow</li>
                          <li>Innistrad: Midnight Hunt</li>
                          <li>Adventures in the Forgotten Realms</li>
                          <li>Strixhaven</li>
                          <li>Kaldheim</li>
                          <li>Zendikar Rising</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- SECTION Commander -->
                <section class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Commander
                    </button>
                  </h2>
                  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body limit-size">
                      <ul class="list-unstyled d-flex justify-content-around">
                        <li class="text-center" title="Deck Size"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/1A5vv0aemIJashQ2vzqTvW/c1735cd99ba334762b07fd47d6e483ec/icon-deck.svg"
                            alt=""> <br>100</li>
                        <li class="text-center" title="Number of Players"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/3SAnh2ZE3pFlo13l0Jqb7B/550886a1c3166d17f1d50daaca5edc87/icon-players.svg"
                            alt=""><br>3-5</li>
                        <li class="text-center" title="Game Duration"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/4pIveHFO9lhMRQ7pdHZZmq/f71d0f9dccaaeacf309f098a63d42695/icon-duration.svg"
                            alt=""><br>120 min</li>
                      </ul>
                      <p>
                        The Commander format is all about picking your hero and building a deck around them. In this
                        casual, multiplayer format, you choose a legendary creature to serve as your commander and build
                        the rest of your deck around their color identity and unique abilities.<br>

                        Players are only allowed
                        one of each card in their deck, with the exception of basic lands, but they can use cards from
                        throughout Magic's history.<br>

                        Each player starts with 40 life, rather then 20, and places their commander face-up in their
                        command zone.<br><br>

                        COLOR IDENTITY<br>
                        A card's color identity can come from any part of that card, including its casting cost and any
                        mana symbols in its text. Every card in your Commander deck must only use mana symbols that also
                        appear on your commander. Colorless cards are allowed as well.<br><br>

                        COMMAND ZONE<br>
                        This is where your commander resides during the game when they are not in play. At the start of
                        the game, each player puts their commander face up into the command zone. A commander can be
                        cast from the command zone for its normal costs, plus an additional two mana for each previous
                        time it's been cast from the command zone this game. If your commander would be put into your
                        library, hand, graveyard or exile from anywhere, you may return it to your command zone
                        instead.<br><br>

                        COMMANDER DAMAGE<br>
                        A player that's been dealt 21 or more combat damage by the same commander over the course of the
                        game loses the game. The commander is tracked across zone changes for this purpose (for example,
                        if one player takes control of another player's commander, any damage that commander already
                        dealt is still counted).<br><br>

                        PLAY FREE-FOR-ALL MULTIPLAYER<br>
                        If you're playing a game of Commander with three or more people, you play against each other in
                        a free-for-all multiplayer format.<br>

                      </p>
                    </div>
                  </div>
                </section>

                <!-- SECTION Modern -->
                <section class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Modern
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body limit-size">
                      <ul class="list-unstyled d-flex justify-content-around">
                        <li class="text-center" title="Deck Size"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/1A5vv0aemIJashQ2vzqTvW/c1735cd99ba334762b07fd47d6e483ec/icon-deck.svg"
                            alt=""> <br><span title="Main">60</span><span title="Sideboard">(15)</span></li>
                        <li class="text-center" title="Number of Players"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/3SAnh2ZE3pFlo13l0Jqb7B/550886a1c3166d17f1d50daaca5edc87/icon-players.svg"
                            alt=""><br>2</li>
                        <li class="text-center" title="Game Duration"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/4pIveHFO9lhMRQ7pdHZZmq/f71d0f9dccaaeacf309f098a63d42695/icon-duration.svg"
                            alt=""><br>20 min</li>
                      </ul>
                      <p>These are one-on-one games with 60 card minimums for the main deck (up to 15 card
                        sideboard).<br>
                        This
                        format
                        includes powerful cards and strategies from the
                        last two decades of Magic.
                      </p>
                      <button class="btn btn-outline-dark d-flex my-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Legal sets
                      </button>
                      <div class="collapse" id="collapseExample">
                        <ul class="set-list">
                          <li>Streets of New Capenna</li>
                          <li>Kamigawa: Neon Dynasty</li>
                          <li>Innistrad: Crimson Vow</li>
                          <li>Innistrad: Midnight Hunt</li>
                          <li>Adventures in the Forgotten Realms</li>
                          <li>Modern Horizons 2</li>
                          <li>Strixhaven</li>
                          <li>Kaldheim</li>
                          <li>Zendikar Rising</li>
                          <li>Core 2021</li>
                          <li>Ikoria: Lair of Behemoths</li>
                          <li>Theros Beyond Death</li>
                          <li>Throne of Eldraine</li>
                          <li>Core Set 2020</li>
                          <li>Modern Horizons</li>
                          <li>War of the Spark</li>
                          <li>Ravnica Allegiance</li>
                          <li>Guilds of Ravnica</li>
                          <li>Core Set 2019</li>
                          <li>Dominaria</li>
                          <li>Rivals of Ixalan</li>
                          <li>Ixalan</li>
                          <li>Hour of Devastation</li>
                          <li>Amonkhet</li>
                          <li>Aether Revolt</li>
                          <li>Kaladesh</li>
                          <li>Eldritch Moon</li>
                          <li>Shadows over Innistrad</li>
                          <li>Oath of the Gatewatch</li>
                          <li>Battle for Zendikar</li>
                          <li>Magic Origins</li>
                          <li>Dragons of Tarkir</li>
                          <li>Fate Reforged</li>
                          <li>Khans of Tarkir</li>
                          <li>Magic 2015</li>
                          <li>Journey into Nyx</li>
                          <li>Born of the Gods</li>
                          <li>Theros</li>
                          <li>Magic 2014</li>
                          <li>Dragon's Maze</li>
                          <li>Gatecrash</li>
                          <li>Return to Ravnica</li>
                          <li>Magic 2013</li>
                          <li>Avacyn Restored</li>
                          <li>Dark Ascension</li>
                          <li>Innistrad</li>
                          <li>Magic 2012</li>
                          <li>New Phyrexia</li>
                          <li>Mirrodin Besieged</li>
                          <li>Scars of Mirrodin</li>
                          <li>Magic 2011</li>
                          <li>Rise of the Eldrazi</li>
                          <li>Worldwake</li>
                          <li>Zendikar</li>
                          <li>Magic 2010</li>
                          <li>Alara Reborn</li>
                          <li>Conflux</li>
                          <li>Shards of Alara</li>
                          <li>Eventide</li>
                          <li>Shadowmoor</li>
                          <li>Morningtide</li>
                          <li>Lorwyn</li>
                          <li>Tenth Edition</li>
                          <li>Future Sight</li>
                          <li>Planar Chaos</li>
                          <li>Time Spiral</li>
                          <li>Coldsnap</li>
                          <li>Dissension</li>
                          <li>Guildpact</li>
                          <li>Ravnica: City of Guilds</li>
                          <li>Ninth Edition</li>
                          <li>Saviors of Kamigawa</li>
                          <li>Eighth Edition</li>
                          <li>Betrayers of Kamigawa</li>
                          <li>Champions of Kamigawa</li>
                          <li>Fifth Dawn</li>
                          <li>Darksteel</li>
                          <li>Mirrodin</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- SECTION Legacy -->
                <section class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Legacy
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body limit-size">
                      <ul class="list-unstyled d-flex justify-content-around">
                        <li class="text-center" title="Deck Size"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/1A5vv0aemIJashQ2vzqTvW/c1735cd99ba334762b07fd47d6e483ec/icon-deck.svg"
                            alt=""> <br><span title="Main">60</span><span title="Sideboard">(15)</span></li>
                        <li class="text-center" title="Number of Players"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/3SAnh2ZE3pFlo13l0Jqb7B/550886a1c3166d17f1d50daaca5edc87/icon-players.svg"
                            alt=""><br>2</li>
                        <li class="text-center" title="Game Duration"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/4pIveHFO9lhMRQ7pdHZZmq/f71d0f9dccaaeacf309f098a63d42695/icon-duration.svg"
                            alt=""><br>20 min</li>
                      </ul>
                      <p>
                        Legacy does not rotate and allows cards to be played from <b>all</b> Magic
                        sets (with the exception of those from the banned card list).
                        <br>

                      </p>
                    </div>
                  </div>
                </section>

                <!-- SECTION Vintage -->
                <section class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Vintage
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body limit-size">
                      <ul class="list-unstyled d-flex justify-content-around">
                        <li class="text-center" title="Deck Size"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/1A5vv0aemIJashQ2vzqTvW/c1735cd99ba334762b07fd47d6e483ec/icon-deck.svg"
                            alt=""> <br><span title="Main">60</span><span title="Sideboard">(15)</span></li>
                        <li class="text-center" title="Number of Players"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/3SAnh2ZE3pFlo13l0Jqb7B/550886a1c3166d17f1d50daaca5edc87/icon-players.svg"
                            alt=""><br>2</li>
                        <li class="text-center" title="Game Duration"><img class="symbol-icon"
                            src="https://images.ctfassets.net/s5n2t79q9icq/4pIveHFO9lhMRQ7pdHZZmq/f71d0f9dccaaeacf309f098a63d42695/icon-duration.svg"
                            alt=""><br>20 min</li>
                      </ul>
                      <p>
                        This format allows for cards to be played from <b>all</b> Magic card sets and includes cards
                        from
                        expansions and special sets (with the exception of cards on the banned list)! This format holds
                        a restricted list which limits the use of a card to a single copy allowed either in the
                        sideboard or in the main deck.
                      </p>
                    </div>
                  </div>
                </section>

                <!-- SECTION Pauper -->
                <section class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Pauper
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body limit-size">
                      <p>

                        This format is unique in that it can be combined with another format, most often Commander, to
                        create a deck that is both competitive and inexpensive.<br>

                        All cards must have been released at common rarity in a Magic set or product. Common promo cards
                        are only legal if the card meets that qualification.<br>

                        If a common version of a particular card was ever released in a Magic: The Gathering paper
                        product or Magic: The Gathering Online, any version of that card is legal in this format. This
                        includes land cards that were printed with both a common set symbol and the L rarity code.

                      </p>
                    </div>
                  </div>
                </section>

              </div>
            </div>

          </section>


          <!-- SECTION Card explanation -->
          <section class="row">
            <div class="col-12 mt-2">
              <p class="fs-4 bg-dark rounded text-light ps-2 text-center">HOW TO READ A CARD</p>
            </div>
            <div class="col-md-8">
              <img class="img-fluid" src="../assets/img/creaturecardanatomy.jpg" alt="">
            </div>
            <div class="col-md-4">
              <p>Standard Magic cards typically have one or more of either the permanent types land, creature, artifact,
                enchantment, and planeswalker, or of the non-permanent spell types instant and sorcery.

                Cards may have more than one card type, such as artifact land or enchantment creature, and types may be
                changed during gameplay. A card may possess any supertype, regardless of its type, and can gain any
                subtype that corresponds to a type on that card.</p><br>
              <p class="fs-5">Type</p>
              <span class="d-flex justify-content-between">
                <ul class="list-unstyled">
                  <li><b>Permanent</b></li>
                  <li class="selectable no-select">Creature</li>
                  <li class="selectable no-select">Land</li>
                  <li class="selectable no-select">Artifact</li>
                  <li class="selectable no-select">Enchantment</li>
                  <li class="selectable no-select">Planeswalker</li>
                </ul>
                <ul class="list-unstyled">
                  <li><b>Non-permanent</b></li>
                  <li class="selectable no-select">Instant</li>
                  <li class="selectable no-select">Sorcery</li>
                </ul>
              </span>
            </div>
            <div class="col-12 teferi-img">
              <div class="row">
                <div class="col-6">
                  <ul class="">
                    <b>
                      Subtype
                    </b>
                    <p>Every card has a card type and may have one or more subtypes. These are printed on the type line.
                      Most creatures, planeswalkers and tribal cards have at
                      least one subtype.<br>
                      On artifact, enchantment, instant, sorcery and land cards the subtypes are optional.</p>
                  </ul>
                  <ul class="">
                    <b>
                      Supertype
                    </b>
                    <p>A word that may appear on a card's type line
                      just before its card types:</p>
                    <li class="ms-4">Basic- Found on basic land cards.</li>
                    <li class="ms-4">Legendary- Any permanent with the legendary supertype is bound by the "legend
                      rule,"
                      which prevents
                      multiple copies of the card with the same name from existing on the battlefield under the same
                      player's control.</li>
                    <li class="ms-4">Snow- a supertype with no inherent functionality. Instead, it serves as an
                      identifying
                      characteristic of permanents and spells, and is closely tied to snow activation costs and mana
                      costs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION Colors -->
          <section class="row">
            <div class="col-12">
              <p class="fs-4 bg-dark rounded text-light ps-2">Colors</p>
              <div class="row colors-bg rounded m-1">
                <div class="col colors-text fix-margin text-center">
                  <img class="mana-symbol " src="../assets/img/mana-white.png" alt="">
                  <p class="text-start">White gets the job done with teamwork and balance. The strongest
                    defensive color,
                    white uses
                    protection spells to keep your creatures safe!
                  </p>
                </div>
                <div class="col colors-text fix-margin text-center">
                  <img class="mana-symbol " src="../assets/img/mana-blue.png" alt="">
                  <p class="text-start">
                    Blue picks apart opponent's strategies—then crushes them. Foresight is the key to success. It's
                    strongest when played defensively.
                  </p>
                </div>
                <div class="col colors-text fix-margin text-center">
                  <img class="mana-symbol " src="../assets/img/mana-black.png" alt="">
                  <p class="text-start">
                    Black is where you can find spooky creatures like demons and
                    undead. It's also where you'll trade resources in order to
                    destroy your opposition.
                  </p>
                </div>
                <div class="col colors-text fix-margin text-center">
                  <img class="mana-symbol " src="../assets/img/mana-red.png" alt="">
                  <p class="text-start">
                    Red wants to win fast and win now. Red is played as an aggressive color that uses power, damage, and
                    quick-play tactics to decimate opponents.
                  </p>
                </div>
                <div class="col colors-text fix-margin text-center">
                  <img class="mana-symbol " src="../assets/img/mana-green.png" alt="">
                  <p class="text-start">
                    Green is filled with nature's fiercest creatures: the bigger the
                    better! Green plays with a force as unstoppable as nature itself.
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- SECTION Battlefield Layout -->
          <section class="row">
            <div class="col-12">
              <p class="fs-4 bg-dark rounded text-light ps-2">BATTLEFIELD LAYOUT</p>
              <img class="img-fluid"
                src="https://images.ctfassets.net/s5n2t79q9icq/30NamqPpPf4ygaSkYlTAwU/08a9a63ec531ec04659a25cf9ab8b675/new-bg-playmat"
                alt="">
            </div>
          </section>

          <!-- SECTION Turns -->
          <section class="row">
            <div class="col-8">
              <p class="fs-4 bg-dark rounded text-light ps-2">WHATS IN A TURN</p>
              <p>
                Each turn proceeds in the same sequence. Whenever you enter a new step or phase, any triggered abilities
                that happen during that step or phase trigger and are put on the stack. The active player (the player
                whose turn it is) gets to start casting spells and activating abilities, then each other player in turn
                order will too. When all players decline to do anything more and nothing is on the stack waiting to
                resolve, the game will move to the next step.
              </p><br>
              <ul class="list-unstyled">
                <li class="fs-5">Beginning phase</li>
                <li>
                  <b>
                    Untap
                  </b>
                  <p>You untap all your tapped permanents. On the first turn of the game, you don't have any permanents,
                    so you just skip this step. No one can cast spells or activate abilities during this step.</p>
                </li>
                <li>
                  <b>
                    Upkeep
                  </b>
                  <p>Players can cast instants and activate abilities. This part of the turn is mentioned on a number of
                    cards. If something is supposed to happen just once per turn, right at the beginning, an ability
                    will trigger "at the beginning of your upkeep."</p>
                </li>
                <li>
                  <b>
                    Draw
                  </b>
                  <p>You must draw a card from your library (even if you don't want to). The player who goes first in a
                    two-player game skips the draw step on their first turn to make up for the advantage of going first.
                    Players can then cast instants and activate abilities.</p>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li class="fs-5">First main phase</li>
                <li>You can cast any number of sorceries, instants, creatures, artifacts, enchantments, and
                  planeswalkers, and you can activate abilities. You can play a land during this phase, but remember
                  that you can play only one land during your turn. Your opponent can cast instants and activate
                  abilities.</li>
              </ul>
              <ul class="list-unstyled">
                <li class="fs-5">Combat phase</li>
                <li>
                  <b>
                    Beginning of combat step
                  </b>
                  <p> Players can cast instants and activate abilities.</p>
                </li>
                <li>
                  <b>
                    Declare attackers step
                  </b>
                  <p> You decide which, if any, of your untapped creatures will attack, and which player or planeswalker
                    they will attack. This taps the attacking creatures. Players can then cast instants and activate
                    abilities.</p>
                </li>
                <li>
                  <b>
                    Declare blockers step
                  </b>
                  <p>
                    Your opponent decides which, if any, of their untapped creatures will block your attacking
                    creatures. If multiple creatures block a single attacker, you order the blockers to show which will
                    be first to receive damage, which will be second, and so on. Players can then cast instants and
                    activate abilities.</p>
                </li>
                <li>
                  <b>
                    Combat damage step
                  </b>
                  <p>
                    Each attacking or blocking creature that's still on the battlefield assigns its combat damage to the
                    defending player (if it's attacking that player and wasn't blocked), to a planeswalker (if it's
                    attacking that planeswalker and wasn't blocked), to the creature or creatures blocking it, or to the
                    creature it's blocking. If an attacking creature is blocked by multiple creatures, you divide its
                    combat damage among them by assigning at least enough damage to the first blocking creature to
                    destroy it, then by assigning damage to the second one, and so on. Once players decide how the
                    creatures they control will deal their combat damage, the damage is all dealt at the same time.
                    Players can then cast instants and activate abilities.</p>
                </li>
                <li>
                  <b>
                    End of combat step
                  </b>
                  <p>
                    Players can cast instants and activate abilities.</p>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li class="fs-5">Second main phase</li>
                <li>Your second main phase is just like your first main phase. You can cast any type of spell and
                  activate abilities, but your opponent can only cast instants and activate abilities. You can play a
                  land during this phase if you didn't play one during your first main phase.</li>
              </ul>
              <ul class="list-unstyled">
                <li class="fs-5">End Phase</li>
                <li>
                  <b>
                    End step
                  </b>
                  <p>
                    Abilities that trigger “at the beginning of your end step” go on the stack. Players can cast
                    instants and activate abilities.</p>
                </li>
                <li>
                  <b>
                    Cleanup step
                  </b>
                  <p>
                    If you have more than seven cards in your hand, choose and discard cards until you have only seven.
                    Next, all damage on creatures is removed and all “until end of turn” effects end. No one can cast
                    instants or activate abilities unless an ability triggers during this step.</p>
                </li>
              </ul>
            </div>
            <div class="col-4 tower-img"></div>
          </section>

          <!-- SECTION Actions -->
          <section class="row">
            <div class="col-12">
              <p class=" fs-4 bg-dark rounded text-light ps-2">GAME ACTIONS</p>
            </div>
            <!-- SECTION  Tapping and Untapping-->
            <div class="col-12">
              <div class="row">
                <div class="col-6">
                  <p class="fs-5">Tapping and untapping</p>
                  <p>To tap a card is to turn it sideways to show that it has been used for the turn. You do this when
                    you use a land to make mana, when you attack with a creature, or when you activate an ability that
                    has the <img class="symbol pb-1" src="../assets/img/tap-symbol.png" alt=""> symbol as part of its
                    cost (<img class="symbol pb-1" src="../assets/img/tap-symbol.png" alt=""> means "tap this
                    permanent"). When a permanent is tapped, you
                    can't tap it again until it's been untapped (turned back upright). As your turn begins, untap your
                    tapped cards so you can use them again.</p>

                </div>
                <div class="col-6">
                  <img class="img-fluid" src="https://media.wizards.com/2018/mtg_portal/castingex.png" alt="">
                </div>
              </div>
            </div>


            <!-- SECTION Casting Spells -->
            <section class="col-12">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid rounded" src="../assets/img/serra-angel.jpg" alt="">
                </div>
                <div class="col-8">
                  <p class="fs-5">Casting Spells</p>
                  <p>To cast a spell, you must pay its mana cost (located in the upper right corner of the card) by
                    tapping lands (or other permanents) to make the amount and Game Actions type of mana which that
                    spell requires. For example, if you were casting Serra Angel, which costs <img class="symbol pb-1"
                      src="../assets/img/mana-colorless3.png" alt=""><img class="symbol pb-1"
                      src="../assets/img/mana-white.png" alt=""><img class="symbol pb-1"
                      src="../assets/img/mana-white.png" alt="">, you could tap three
                    basic lands of any type to pay <img class="symbol pb-1" src="../assets/img/mana-colorless3.png"
                      alt="">
                    plus two Plains to pay <img class="symbol pb-1" src="../assets/img/mana-white.png" alt=""><img
                      class="symbol pb-1" src="../assets/img/mana-white.png" alt="">.

                    Once a spell has been cast, one of two things happens. If the spell is an instant or a sorcery, you
                    follow the instructions on the card, and then you put the card into your graveyard. If the spell is
                    a creature, artifact, or enchantment, you put the card on the table in front of you. The card is now
                    on the battlefield.

                    Cards on the battlefield are called permanents to differentiate them from instants and sorceries,
                    which are never on the battlefield.</p><br>
                </div>
              </div>
            </section>

            <!-- SECTION Attacking and Blocking -->
            <section class="col-12 mt-2">
              <div class="row">
                <div class="col-12 elspeth-img">
                  <div class="row">
                    <div class="col-7">

                      <p class="fs-5">Attacking and Blocking</p>
                      <p>The most common way to win the game is to attack with your creatures. If a creature that is
                        attacking
                        an opponent isn't blocked, it deals damage equal to its power to that opponent.<br><br>

                        The middle phase of each turn is the combat phase. In your combat phase, you choose which of
                        your
                        creatures will attack, and you choose which opponents they will attack. Tap your creatures to
                        show
                        that
                        they are attacking. Your opponents then choose which of their creatures will block, if any.
                        Tapped
                        creatures can't be declared as blockers.<br><br>

                        Once all blockers have been chosen, each creature—both attackers and blockers—simultaneously
                        deals
                        damage equal to its power (the number on the left side of the slash in the lower right corner of
                        the
                        card).<br><br>

                        An attacking creature that isn't blocked deals damage to the player it's attacking.
                        An attacking creature that is blocked deals damage to the creature or creatures that are
                        blocking
                        it,
                        and vice versa.
                        If damage is dealt to your opponent, they lose that much life.<br><br>

                        If one of your attacking creatures is blocked by multiple creatures, you decide how to divide
                        its
                        combat
                        damage among them. You must assign at least enough damage to the first blocking creature to
                        destroy
                        it
                        before you can assign damage to the second one, and so on.<br><br>

                        If a creature is dealt damage equal to or greater than its toughness over the course of a single
                        turn
                        (whether it be combat damage, damage from spells or abilities, or a combination of both), that
                        creature
                        is destroyed, and it goes to its owner's graveyard (or "dies"). If a creature takes damage that
                        isn't
                        enough to destroy it in a single turn, that creature stays on the battlefield, and the damage
                        wears
                        off
                        at the end of the turn.</p>
                    </div>
                  </div>
                </div>
                <div class="col text-center">
                  <img class="img-fluid" src="https://media.wizards.com/2018/mtg_portal/unblocked.png" alt="">
                  <p>Attacking creature is unblocked.</p>
                </div>

                <div class="col text-center">
                  <img class="img-fluid" src="https://media.wizards.com/2018/mtg_portal/attackerdead.png" alt="">
                  <p>Attacking creature is blocked and destroyed.</p>
                </div>

                <div class="col text-center">
                  <img class="img-fluid mt-4" src="https://media.wizards.com/2018/mtg_portal/doubleblock.png" alt="">
                  <p>Attacking creature is double blocked.</p>
                </div>

                <div class="col text-center">
                  <img class="img-fluid" src="https://media.wizards.com/2018/mtg_portal/bothlive.png" alt="">
                  <p>Attacking creature is blocked but both survive.</p>
                </div>

                <div class="col text-center">
                  <img class="img-fluid" src="https://media.wizards.com/2018/mtg_portal/defenderdead.png" alt="">
                  <p>Attacking creature is blocked and the defender is destroyed.</p>
                </div>
              </div>
            </section>

          </section>

          <!-- SECTION Targeting-->
          <section class="row jace-img">
            <div class="col-6">
              <p class="fs-4 bg-dark rounded text-light ps-2">TARGETING</p>
              <p>Some spells and abilities use the word "target" to describe something that the spell or ability will
                affect. You must choose all targets for a spell when you cast it, and for an ability when it triggers or
                when you activate it. If you can't meet the targeting requirements, you can't cast the spell or use the
                ability. For example, if a spell has the text "Destroy target creature," but there are no creatures on
                the battlefield, you can't cast that spell because it has no valid targets.<br><br>

                If a spell "deals damage to any target," you can choose any creature or player (or planeswalker, if a
                player has one) as a target for that spell.<br><br>

                Once you choose targets, you can't change your mind later. When the spell or ability resolves, it checks
                the targets to make sure they're still legal (that is, they're still there and they still match the
                requirements of the spell or ability). If a target isn't legal, the spell or ability can't affect it. If
                none of the targets are legal, the spell or ability does nothing at all.</p>
            </div>
            <div class="col-6">
              <img class="img-fluid" src="../assets/img/transparents/jace.png" alt="">
            </div>
          </section>

          <!-- SECTION Stack-->
          <section class="row">
            <div class="col-12">
              <p class="fs-4 bg-dark rounded text-light ps-2">THE STACK</p>
            </div>
            <div class="col-4">
              <img class="img-fluid" src="https://media.wizards.com/2018/mtg_portal/stackimg.png" alt="">
            </div>
            <div class="col-8">
              <p>When you cast a spell or activate an ability, it doesn't resolve right away—it goes on the stack.
                Spells and abilities remain on the stack until both players choose not to cast any new spells or
                activate any new abilities. Triggered abilities also go on the stack until they resolve.<br><br>

                When you have finished putting spells and abilities on the stack, priority then passes to the next
                player in turn order, who may want to use a spell or ability of their own in response. Subsequent
                players (including you) can then respond to that player's response, and so on—the result is a "stack"
                waiting to resolve. Spells and abilities remain on the stack until all players choose not to cast any
                new spells or activate any new abilities.<br><br>

                <em> A general rule is that spells and abilities on the stack resolve one by one, beginning with the
                  last one
                  put on the stack.</em>
              </p>
            </div>
            <div class="col-12">
              <p class="fs-5">Responding to Spells and Abilities</p>
              <p>
                Each player has an opportunity to cast an instant spell (or activate an activated ability) in response
                to any spell or ability that goes on the stack. If a player does decide to respond, their spell or
                ability goes on the stack on top of what was already waiting there. When all players pass—that is,
                decline to do anything more—the top spell or ability on the stack will resolve.<br><br>
                After a spell or ability resolves, both players again get the chance to respond. If no one does, the
                next thing waiting on the stack will resolve. If the stack is empty, the current step of the turn will
                end, and the game will proceed to the next step.
              </p>
            </div>
          </section>


        </div>
      </div>
    </div>
  </section>

  <!-- SECTION Modal--Glossary -->
  <section class="modal fade" id="glossaryModalToggle" aria-hidden="true" aria-labelledby="glossaryModalToggle"
    tabindex="-1">
    <div class="modal-dialog modal modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content glossary-modal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">Glossary</h5>
          <span class="d-flex">
            <button class="btn btn-outline-light border-0" data-bs-target="#faqsModal" data-bs-toggle="modal">Back to
              FAQs</button>
            <div class="text-light selectable" data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i>
            </div>
          </span>
        </div>
        <div class="modal-body">
          <ul class="list-unstyled">
            <li>
              <b class="bg-dark text-light rounded px-2">
                <img class="symbol pb-1" src="../assets/img/tap-symbol.png" alt=""> (TAP) </b>
              <p>This symbol means “tap this permanent” (turn it sideways to show that it has been used). It appears in
                activation costs. You can't pay a cost if the card is already tapped, or if it's a creature that still
                has summoning sickness.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">ADDITIONAL COST</b>
              <p>Some spells say they have an additional cost. To cast such a spell, you must pay both the mana cost in
                the upper right corner of the card and its additional cost.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">AURA</b>
              <p>Aura is a subtype that appears on an enchantment that can be attached to a permanent. Each Aura has the
                keyword “enchant” followed by what it can be attached to—for example, “enchant creature,” “enchant
                land,” and so on. When you cast an Aura spell, you choose its target. When the Aura resolves, it's put
                onto the battlefield attached to that permanent. The Aura stays there until it's destroyed or until the
                permanent it's attached to leaves the battlefield. If the permanent leaves the battlefield, the Aura
                card is put into your graveyard.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">BASIC LAND</b>
              <p>There are five types of basic lands: Plains, Island, Swamp, Mountain, and Forest. Any land with the
                Plains subtype has the intrinsic ability “: Add <img class="symbol pb-1"
                  src="../assets/img/mana-white.png" alt="">” (white
                mana). Similarly, Islands tap for <img class="symbol pb-1" src="../assets/img/mana-blue.png"
                  alt="">(blue mana),
                Swamps tap for <img class="symbol pb-1" src="../assets/img/mana-black.png" alt="">(black mana),
                Mountains tap for <img class="symbol pb-1" src="../assets/img/mana-red.png" alt="">(red mana), and
                Forests tap for <img class="symbol pb-1" src="../assets/img/mana-green.png" alt="">(green mana). If an
                effect refers to a “basic land card,” it's referring to a card with the words “basic land” on its type
                line (basic is a supertype). Other lands are often referred to as “nonbasic lands.”</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">COLOR</b>
              <p>The five Magic colors are white, blue, black, red, and green. If a spell or ability tells you to choose
                a color, you must choose one of those five. A card's color is determined by its mana cost. For example,
                a card that costs is blue, and a card that costs is both red and white.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">COLORLESS</b>
              <p>Lands and most artifacts are colorless. Colorless is not a color. If something tells you to choose a
                color, you can't choose colorless.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">COMBAT DAMAGE</b>
              <p>Creatures deal combat damage by attacking and blocking. Each creature deals combat damage equal to its
                power. This damage is dealt during the combat damage step. Any other kind of damage doesn't count as
                combat damage, even if it's dealt during the combat phase or as the result of a creature's ability.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">CONTROL</b>
              <p>You control spells you cast and permanents that enter the battlefield on your side. You also control
                abilities that come from permanents you control. Only you can make decisions for things you control. If
                you control a permanent, only you can activate its activated abilities. Some spells and abilities let
                you gain control of a permanent. Most of the time, this means the card will move from your opponent's
                side to yours.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">CONTROLLER</b>
              <p>A spell's controller is the player who cast it. A permanent's controller is the player who cast
                it—unless another spell or ability changes who controls it.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">COST</b>
              <p>A cost is something you have to pay to take most actions. You must pay a cost to cast a spell or
                activate an activated ability. Sometimes a spell or ability will also ask you to pay an additional cost
                to cast or activate it. For example, in addition to its mana cost, Village Rites requires you to
                sacrifice a creature in order to cast it. You can't cast it if you have no creature to sacrifice.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">COUNTER A SPELL OR ABILITY</b>
              <p>Countering a spell or ability causes it to have no effect. If a spell is countered, it's removed from
                the stack and put into its owner's graveyard. Once a spell or ability starts to resolve, it's too late
                to counter it. Lands aren't spells, so they can't be countered.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">COUNTER ON A PERMANENT</b>
              <p>Some spells and abilities tell you to put a counter on a permanent. The counter marks a change to the
                permanent that lasts for as long as it's on the battlefield with the counter on it, or a Planeswalker's
                loyalty. A counter usually changes a creature's power and toughness. You can use anything you want as
                counters: many players find that glass beads and dice work best.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">DAMAGE</b>
              <p>Damage reduces a player's life total and destroys creatures. Attacking and blocking creatures deal
                damage equal to their power. Some spells and abilities can also deal damage. Damage can be dealt only to
                creatures, players and planeswalkers. Damage dealt to a player is subtracted from the player's life
                total. If a creature is dealt damage equal to or greater than its toughness in a single turn, it is
                destroyed. Damage dealt beyond a creature's toughness is “excess damage.” Damage dealt to planeswalkers
                is subtracted from the planeswalker's loyalty.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">DEATHTOUCH</b>
              <p>A keyword ability found on creatures. A creature dealt any amount of damage by a creature with
                deathtouch is destroyed. Deathtouch has no effect on players or planeswalkers.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">DEFENDER</b>
              <p>A keyword ability found on creatures. Creatures with defender can't attack.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">DESTROY</b>
              <p>When a permanent is destroyed, you move it from the battlefield to its owner's graveyard. Creatures are
                destroyed when they have taken damage equal to or greater than their toughness. Many spells and
                abilities can also destroy permanents without dealing damage to them.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">DISCARD</b>
              <p>To discard, take a card from your hand and put it into your graveyard. If a spell or ability forces you
                to discard, you get to choose which card(s) to discard unless the spell or ability says another player
                chooses the cards or you have to discard “at random.” If you have more than seven cards in your hand as
                your turn ends, you have to discard until you have seven.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">DOUBLE STRIKE</b>
              <p>A keyword ability found on creatures. Creatures with double strike deal their combat damage twice. When
                you reach the combat damage step, check to see if any attacking or blocking creatures have first strike
                or double strike. If so, an extra combat damage step is created just for them. Only creatures with first
                strike and double strike get to deal combat damage during this step. After that, the normal combat
                damage step happens. All other attacking and blocking creatures that survived, as well as the ones with
                double strike, deal combat damage during this second step.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">ENCHANT</b>
              <p>All Auras have this keyword ability, and it is always followed by the kind of permanent that the Aura
                can be attached to (for example, “enchant creature” or “enchant land”). When you cast the Aura, you must
                target that kind of permanent. When an ability of an Aura says “enchanted creature” (or “enchanted
                artifact,” “enchanted land,” and so on), it means “the creature the Aura is attached to.” See the
                glossary entry for “Aura.”</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">ENTERS THE BATTLEFIELD</b>
              <p>Some triggered abilities start with “When [this permanent] enters the battlefield, . . .” When a
                permanent with an ability like this is put onto the battlefield, the ability triggers right away. Some
                abilities also trigger when certain other permanents enter the battlefield.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">EQUIPMENT</b>
              <p>Equipment is a subtype that appears on an artifact that can be attached to a creature. Most Equipment
                cards have the activated ability “equip” followed by a cost—for example, “Equip .” An equip ability can
                be activated only any time you could cast a sorcery. When you activate an equip ability, you choose a
                creature you control as its target. When the ability resolves, the Equipment artifact becomes attached
                to that creature. The creature is then “equipped.” The Equipment remains attached until it's destroyed,
                or until the creature it's attached to leaves the battlefield, or until you activate the equip ability
                again and move the Equipment to a new creature.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">EXILE</b>
              <p>Some spells and abilities can exile permanents on the battlefield or cards in other zones. Exiled

                cards are set apart from the rest of the game. You can't interact with cards in exile unless an ability
                specifies otherwise.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">FIRST STRIKE</b>
              <p>A keyword ability found on creatures. Creatures with first strike deal all of their combat damage
                before creatures without first strike or double strike. When you reach the combat damage step, check to
                see if any attacking or blocking creatures have first strike or double strike. If so, an extra combat
                damage step is created just for them.

                Only creatures with first strike and double strike get to deal combat damage during this step. After
                that, the normal combat damage step happens. All other attacking and blocking creatures that survived,
                as well as the ones with double strike, deal combat damage during this second step.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">FLASH</b>
              <p>A keyword ability found on cards. A spell with flash can be cast any time you could cast an instant.
              </p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">FLASHBACK</b>
              <p>A keyword ability found on instants and sorceries. A spell with flashback can be cast from the
                graveyard by paying its flashback cost. The spell's effects will happen as usual. A spell cast using
                flashback will be exiled afterward, regardless of whether it resolves or is countered.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">FLYING</b>
              <p>A keyword ability found on creatures. A creature with flying can be blocked only by creatures with
                flying or reach.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">GOAD</b>
              <p>A keyword action. If you goad a creature, that creature has to attack and has to attack a player other
                than you during its controller's next combat, if able. The creature's controller still chooses who it
                attacks. If a creature is somehow goaded by all players on the table, it must still attack, but its
                controller may choose whomever they please.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">HASTE</b>
              <p>A keyword ability found on creatures. A creature with haste isn't affected by summoning sickness. It
                can attack as soon as it comes under your control. You can also activate its activated abilities with in
                the cost right away.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">HEXPROOF</b>
              <p>A keyword ability that prevents a permanent or player from being the target of spells or abilities an
                opponent controls.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">INDESTRUCTIBLE</b>
              <p>A keyword ability found on creatures, artifacts, and other permanents. An indestructible permanent
                can't be destroyed by damage or by effects that say “destroy,” but it can still be put into the
                graveyard for other reasons—such as an effect that reduces its toughness to 0.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">LEAVES THE BATTLEFIELD</b>
              <p>A permanent leaves the battlefield when it moves from the battlefield zone to any other zone. It might
                return to a player's hand from the battlefield, go to a graveyard from the battlefield, or go to some
                other zone. If a card leaves the battlefield and later returns to the battlefield, it's like a brand-new
                card. It doesn't “remember” anything from the last time it was on the battlefield.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">LEGENDARY</b>
              <p>Legendary is a supertype, so you'll find it written on the type line before the card type. If a player
                controls two or more legendary permanents with the same name at the same time, that player must choose
                one of those permanents to keep and immediately put the rest into their graveyard. Different players can
                control legendary permanents with the same name. All Planeswalkers are legendary, but you can control
                two different versions of the same Planeswalker at the same time (e.g. Jace, Mirror Mage and Jace,
                Arcane Strategist).</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">LIFELINK</b>
              <p>A keyword ability found on creatures. When a creature you control has lifelink and deals damage, you
                simultaneously gain that much life.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">MANA</b>
              <p>The magical energy you use to pay for spells and some abilities is called mana. Most mana comes from
                tapping lands. There are five colors of mana: <img class="symbol pb-1"
                  src="../assets/img/mana-white.png" alt="">(white), <img class="symbol pb-1"
                  src="../assets/img/mana-blue.png" alt="">(blue), <img class="symbol pb-1"
                  src="../assets/img/mana-black.png" alt="">(black), <img class="symbol pb-1"
                  src="../assets/img/mana-red.png" alt="">(red), and <img class="symbol pb-1"
                  src="../assets/img/mana-green.png" alt="">(green). Some
                nonbasic lands make <img class="symbol pb-1" src="../assets/img/mana-strict-colorless.png"
                  alt="">(colorless
                mana),
                which can be spent to pay costs that don't require mana of a
                specific color. Unspent mana vanishes between turns and phases, so you can't 'save' mana from one turn
                to use during a later turn.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">MANA ABILITY</b>
              <p>An ability that generates mana. Mana abilities can be activated abilities or triggered abilities. Mana
                abilities don't go on the stack or wait to resolve— you simply get the mana immediately.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">MANA VALUE</b>
              <p>The total amount of mana in a mana cost, regardless of color. For example, a card with a mana cost
                of <img class="symbol pb-1" src="../assets/img/mana-colorless3.png" alt=""><img class="symbol pb-1"
                  src="../assets/img/mana-white.png" alt=""><img class="symbol pb-1" src="../assets/img/mana-black.png"
                  alt="">
                has a mana value of 5. A card with mana cost <img class="symbol pb-1" src="../assets/img/mana-green.png"
                  alt=""><img class="symbol pb-1" src="../assets/img/mana-green.png" alt=""> has a mana value of 2.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">MENACE</b>
              <p>A keyword ability found on creatures. A creature with menace can't be blocked except by two or more
                creatures.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">MULLIGAN</b>
              <p>At the beginning of a Magic game, you draw the top seven cards of your library. That's your starting
                hand. If you don't like your starting hand for any reason, you can take a mulligan. The choice to take a
                mulligan is made after the starting player is determined, but before doing anything else. To take a
                mulligan, shuffle your hand back into your library and draw a new hand of seven cards. If you are
                satisfied with that hand, put one card from it on the bottom of your library. If not, you can take
                another mulligan. You can take a mulligan as many times as you want, but you put one card on the bottom
                of your library for each mulligan you've taken this game.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">OPPONENT</b>
              <p>A person you're playing against is your opponent. If a card says “an opponent,” it means one of its
                controller's opponents.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">OWNER</b>
              <p>The person who starts the game with a card in their deck is that card's owner. Even if your opponent
                gains control of one of your permanents, you're still its owner. (If you loaned your friend a deck,
                they're the “owner” of all the cards in it during the game.) The owner of a token is the player who
                controlled it when it entered the battlefield.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">PERMANENT</b>
              <p>A card or token on the battlefield. Permanents can be artifacts, creatures, enchantments, or lands.
                Once a permanent is on the battlefield, it stays there until it's destroyed, exiled, sacrificed, or
                otherwise removed according to the game rules. You can't remove a permanent from the battlefield just
                because you want to, even if you control it.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">PLANESWALKER</b>
              <p>Planeswalkers are formidable allies you can summon to fight alongside you. Planeswalker cards are
                shuffled into your deck at the start of the game, just like any other card. You can cast a Planeswalker
                during your main phase like any other permanent. (Note that Planeswalkers are not creatures.) Once a
                Planeswalker is on your side of the battlefield, you can start using their abilities right away. If you
                control a Planeswalker, your opponent can choose to attack either you or your Planeswalker (or both,
                with different creatures). Then, you can choose to have your creatures block for your Planeswalkers just
                as they would block for yourself. Excess damage dealt to planeswalkers does not carry over to the
                player. When a Planeswalker's loyalty is reduced to zero (by either activating its abilities or taking
                damage), it is sent to the graveyard.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">PLAYER</b>
              <p>You and your opponents are all players. If a spell or ability lets you choose a player, you can choose
                yourself. You can't choose yourself if the spell or ability says “opponent.”</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">PUT ONTO THE BATTLEFIELD</b>
              <p>When a spell or ability tells you to put something onto the battlefield, you move that card into the
                battlefield zone. This is different than casting it—you just put it onto the battlefield without paying
                its costs.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">REACH</b>
              <p>A keyword ability found on creatures. A creature with reach can block a creature with flying. Note that
                a creature with reach can be blocked by any kind of creature.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">SACRIFICE</b>
              <p>If a spell or ability tells you to sacrifice a kind of permanent, choose one of your permanents of that
                type on the battlefield and put it into its owner's graveyard (usually your graveyard, but some spells
                and abilities allow you to gain control of cards owned by an opponent). You can sacrifice only
                permanents you control. Sacrificing a permanent is different from destroying it. You can sacrifice a
                permanent only if a spell or ability tells you to, or if it's part of a cost.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">SCRY</b>
              <p>A keyword action that allows a player to see the future! “Scry N” means you look at N cards from the
                top of your library. You can put any number of those cards on the bottom of your library, then you put
                the rest back on top of your library in any order.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">SHUFFLE</b>
              <p>Some cards will instruct you to shuffle. This is a keyword action that has you randomize the cards of
                your library, so that no one knows the order of its contents.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">SOURCE</b>
              <p>Damage and abilities each come from a spell or permanent—the source of that damage or ability. Once an
                ability is on the stack, removing its source doesn't stop it from resolving.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">SPELL</b>
              <p>All types of cards (except lands) are spells while you're casting them. For example, Angler Turtle is a
                creature card. While you're casting it, it's a creature spell. When it resolves, it becomes a creature.
                Spells can only be cast during your main phase, except for instants, which can be cast anytime.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">TOKEN</b>
              <p>Some spells and abilities can create tokens. Tokens are always permanents, and they're affected by all
                the rules, spells, and abilities that affect permanents. If one of your tokens leaves the battlefield,
                however, it moves to the new zone (such as your graveyard or your hand) and then immediately vanishes
                from the game.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">TRAMPLE</b>
              <p>A keyword ability found on creatures. Trample allows a creature to deal excess combat damage to the
                player it's attacking, even if the creature is blocked. If you're attacking with a creature that has
                trample and it is blocked, you have to assign its combat damage to the creatures blocking it first. If
                it destroys all of those creatures, then you can assign any excess damage to the player it's attacking.
                If an attacking creature with trample is blocked, but there are no creatures blocking it when damage is
                assigned (for example, if you used a spell to destroy the blocking creature), then all of its damage is
                assigned to the player it's attacking. Trample does not work on Planeswalkers, unless the creature has
                “Trample over planeswalkers”.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">VIGILANCE</b>
              <p>A keyword ability found on creatures. A creature with vigilance doesn't tap to attack. Vigilance
                doesn't allow a tapped creature or a creature that entered the battlefield this turn to attack.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">X</b>
              <p>When you see <img class="symbol pb-1" src="../assets/img/mana-x.png" alt=""> in a mana cost or an
                activation cost, you get to choose the number that stands for. For
                example, Pull from Tomorrow is an instant that costs <img class="symbol pb-1"
                  src="../assets/img/mana-x.png" alt=""><img class="symbol pb-1" src="../assets/img/mana-blue.png"
                  alt=""><img class="symbol pb-1" src="../assets/img/mana-blue.png" alt="">. Its text reads, “Draw X
                cards, then discard a
                card.” When you cast Pull from Tomorrow, you choose what number X is. If you pick one, for example, Pull
                from Tomorrow costs <img class="symbol pb-1" src="../assets/img/mana-colorless.png" alt=""><img
                  class="symbol pb-1" src="../assets/img/mana-blue.png" alt=""><img class="symbol pb-1"
                  src="../assets/img/mana-blue.png" alt="">, and you will
                draw one card, then choose and discard a card from your hand. If you
                pick eight, Pull from Tomorrow costs <img class="symbol pb-1" src="../assets/img/mana-colorless8.png"
                  alt=""><img class="symbol pb-1" src="../assets/img/mana-blue.png" alt=""><img class="symbol pb-1"
                  src="../assets/img/mana-blue.png" alt="">, and you will draw eight
                cards, then choose and discard a card
                from your hand.</p>
            </li>
            <li><br>
              <b class="bg-dark text-light rounded px-2">YOU</b>
              <p>The word “you” on a spell or ability refers to the current controller of that spell or ability.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.explain-mtg-modal {
  background-image: url(https://images.ctfassets.net/s5n2t79q9icq/684AfTBXMgTnyfifLHcUzv/de7ea09847a02b8dfec7cf6174446dad/bg-latest-product.jpg?q=70);
  background-position: center;
  background-size: cover;
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.faq-modal {
  background-image: url(https://c4.wallpaperflare.com/wallpaper/53/810/403/dark-magic-the-gathering-wallpaper-preview.jpg);
  background-position: center;
  background-size: cover;
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.glossary-modal {
  background-image: url(https://wallpaperaccess.com/full/2057218.jpg);
  background-position: center;
  background-size: cover;
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  // font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.how-mtg-modal {
  background-image: url(https://wallpaperaccess.com/full/2057218.jpg);
  background-position: center;
  background-size: cover;
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  // font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.my-btn {
  cursor: pointer;
  text-align: center;
  transform: scale(1.15);
}

.my-btn:hover {
  background: white;
  border-radius: 4px;
  color: black;
  text-shadow: none;
}

.light-text {
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.colors-bg {
  background-image: url(https://wallpaperaccess.com/full/4541098.jpg);
  background-position: center;
  background-size: cover;
  min-height: 50vh;
  color: transparent;
}

.colors-text:hover {
  color: whitesmoke;
  text-shadow: 1px 1px 3px black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: auto;
}

.fix-margin {
  margin-top: auto;
}

.mana-symbol {
  height: 37px;
  width: 37px;
  margin-top: 1em;
}

.symbol {
  height: 1em;
}

.symbol-icon {
  height: 3em;
}

.limit-size {
  overflow-y: scroll;
  max-height: 28vh;
}

*::-webkit-scrollbar {
  display: none;
}

.karn-img {
  background-image: url(../assets/img/transparents/karn.png);
  background-position: top;
  background-size: cover;
}

.teferi-img {
  background-image: url(../assets/img/transparents/teferi.png);
  background-position: top;
  background-size: cover;
}

.tower-img {
  background-image: url(../assets/img/transparents/crystal-tower.png);
  background-position: top;
  background-size: cover;
}

.elspeth-img {
  background-image: url(../assets/img/transparents/elspeth.png);
  background-position: top;
  background-size: cover;
}
</style>