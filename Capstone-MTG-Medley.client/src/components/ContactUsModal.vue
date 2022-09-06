<template>
  <!-- SECTION Contact Us -->
  <section
    class="modal fade"
    id="contactUsModal"
    tabindex="-1"
    aria-labelledby="contactUsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">Contact Us</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row">
          <div class="col-8">
            <p>
              Thank you for your interest in our capstone project. Magic Medley
              is an example of what we are capable of using Vue.js, Node.js and
              an external RESTful API.
            </p>
          </div>
          <!-- SECTION Contributors -->
          <ul class="col-4 list-unstyled">
            <li class="d-flex justify-content-between">
              <span> Savannah </span>
              <span>
                <a href="https://www.linkedin.com/in/savannah-temple/">
                  <i class="mdi mdi-linkedin selectable px-1"></i>
                </a>
                <a href="https://github.com/savtemp">
                  <i class="mdi mdi-github selectable"></i>
                </a>
              </span>
            </li>
            <li class="d-flex justify-content-between">
              <span> Miles </span>
              <span>
                <a href="https://www.linkedin.com/in/miles-collins/">
                  <i class="mdi mdi-linkedin selectable px-1"></i>
                </a>
                <a href="https://github.com/Miles-Collins">
                  <i class="mdi mdi-github selectable"></i>
                </a>
              </span>
            </li>
            <li class="d-flex justify-content-between">
              <span> Max </span>
              <span>
                <a href="https://www.linkedin.com/in/maxball-/">
                  <i class="mdi mdi-linkedin selectable px-1"></i>
                </a>
                <a href="https://github.com/Max-Ball">
                  <i class="mdi mdi-github selectable"></i>
                </a>
              </span>
            </li>
            <li class="d-flex justify-content-between">
              <span> Jonathon </span>
              <span>
                <a href="https://www.linkedin.com/in/jonathon-mcnamara/">
                  <i class="mdi mdi-linkedin selectable px-1"></i>
                </a>
                <a href="https://github.com/JonathonMcNamara">
                  <i class="mdi mdi-github selectable"></i>
                </a>
              </span>
            </li>
            <li class="d-flex justify-content-between">
              <span> Chris </span>
              <span>
                <a href="www.linkedin.com/in/Christopher-Hildebrandt">
                  <i class="mdi mdi-linkedin selectable px-1"></i>
                </a>
                <a href="https://github.com/chris-hildebrandt">
                  <i class="mdi mdi-github selectable"></i>
                </a>
              </span>
            </li>
            <li class="d-flex justify-content-between">
              <span> Andrew </span>
              <span>
                <a href="https://www.linkedin.com/in/andrew-la-rue-a07958238/">
                  <i class="mdi mdi-linkedin selectable px-1"></i>
                </a>
                <a href="https://github.com/AndrewLaRue">
                  <i class="mdi mdi-github selectable"></i>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION Legal -->
  <!-- NOTE should be in its own component -->
  <section
    class="modal fade"
    id="legalModal"
    tabindex="-1"
    aria-labelledby="legalModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Legal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Portions of Magic Medley are unofficial Fan Content permitted under
            the Wizards of the Coast Fan Content Policy. The literal and
            graphical information presented on this site about Magic: The
            Gathering, including card images, the mana symbols, and Oracle text,
            is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc.
            Magic Medley is not produced by, endorsed by, supported by, or
            affiliated with
            <a href="https://company.wizards.com/en">Wizards of the Coast</a
            >.<br /><br />

            Magic Medley uses the Scryfall Api to obtain Card information. Magic
            Medley is not produced by, endorsed by, supported by, or affiliated
            with
            <a href="https://scryfall.com/docs/api">Scryfall</a>.<br /><br />

            Card prices and promotional offers represent daily estimates and/or
            market values provided by
            <a href="https://www.tcgplayer.com/">TcgPlayer</a>. Absolutely no
            guarantee is made for any price information. See stores for final
            prices and details.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
