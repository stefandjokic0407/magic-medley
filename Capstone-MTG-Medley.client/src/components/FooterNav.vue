<template>
    <div class="row fixed-bottom footer-style justify-content-between text-uppercase text-my-light no-select">

        <!-- SECTION Account -->
        <section class="col-2 py-2 text-center">
            <div class="text-center border-bottom border-2 fs-5"> <b>Account</b></div>
            <div class=" selectable  ">
                <Login />
            </div>
            <div class=" selectable ">
                <router-link :to="{ name: 'Collection' }" class="text-my-light ">
                    My Collection
                </router-link>
            </div>
        </section>

        <!-- SECTION Information -->
        <section class="col-2 py-2 text-center ">
            <div class="text-center border-bottom border-2 fs-5">
                <b>Information</b>
            </div>
            <div class=" text-my-light selectable " data-bs-toggle="modal" data-bs-target="#faqsModal">
                FAQs
            </div>
            <div class=" text-my-light selectable ">
                Site Tour
            </div>
            <!-- NOTE modal is located in the contact us component -->
            <div class=" text-my-light selectable " data-bs-toggle="modal" data-bs-target="#legalModal">
                Legal
            </div>
        </section>

        <!-- SECTION Magic Medley -->
        <section class="col-2 py-2 text-center">
            <div class="text-center border-bottom border-2 fs-5"><b>Magic Medley</b></div>

            <div class=" selectable ">
                <router-link :to="{ name: 'Search' }" class="text-my-light ">
                    Search Cards
                </router-link>
            </div>
            <div class=" selectable ">
                <router-link :to="{ name: 'Guild' }" class="text-my-light selectable  ">
                    Guild
                </router-link>
            </div>
            <div class=" text-my-light selectable  " data-bs-toggle="modal" data-bs-target="#contactUsModal">
                Contact Us
            </div>
        </section>

    </div>
    <ContactUsModal />
    <FaqsModalGroup />
</template>


<script>
export default {
setup() {
return {}
}
}
</script>


<style lang="scss" scoped>
.footer-style {
    background: rgb(0 0 0 / 38%);
    backdrop-filter: blur(4px);
    border: solid #8d8b8b1f;
    border-radius: 8px;


    // padding: 0.5em;
    // min-height: 15vh;
}

.text-my-light {
    color: whitesmoke;
    text-shadow: 1px 1px 2px black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>