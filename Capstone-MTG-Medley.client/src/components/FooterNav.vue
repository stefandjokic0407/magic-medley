<template>
  <div
    class="row fixed-bottom footer-style justify-content-around text-uppercase text-my-light no-select align-items-center">
    <!-- SECTION Account -->
    <div class="col-1 xsFont">
      <Login />
    </div>
    <div class="col-1 text-my-light xsFont" data-bs-toggle="modal" data-bs-target="#contactUsModal">
      Contact Us
    </div>

    <!-- SECTION Information -->

    <div class="col-1 text-my-light xsFont" data-bs-toggle="modal" data-bs-target="#faqsModal">
      FAQs
    </div>
    <div class="col-1 text-my-light xsFont">Site Tour</div>
    <!-- NOTE modal is located in the contact us component -->
    <div class="col-1 text-my-light xsFont" data-bs-toggle="modal" data-bs-target="#legalModal">
      Legal
    </div>
  </div>
  <ContactUsModal />
  <FaqsModalGroup />
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer-style {
  background: rgba(0, 0, 0, 0.721);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  border-radius: 8px;
  height: 5VH;
}

.text-my-light {
  color: whitesmoke;
  text-shadow: 1px 1px 2px black;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
}

.deckText {
  -webkit-text-stroke: .5px black;
  color: rgba(255, 255, 255, 0.88);
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.xsFont {
  font-size: x-small;
}
</style>
