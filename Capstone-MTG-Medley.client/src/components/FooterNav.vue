<template>
    <div class="row fixed-bottom footer-style justify-content-around">
        <div class="col-2">
            <div class="border-bottom border-danger-5">Account</div>
            <p>
                <Login />
            </p>
            <p>
                <router-link :to="{ name: 'Collection' }"
                    class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">
                    Collection
                </router-link>
            </p>
            <p>Contact Us</p>
        </div>
        <div class="col-3"></div>
        <div class="col-2 text-end">
            <div class="border-bottom border-danger-5">Magic Medley</div>

            <p>
                <router-link :to="{ name: 'Search' }"
                    class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">
                    Search Cards
                </router-link>
            </p>
            <SearchForm />
            <p>
                <router-link :to="{ name: 'Guild' }"
                    class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">
                    Guild
                </router-link>
            </p>
        </div>
    </div>
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
    color: white;
    border-radius: 8px;
    text-shadow: 5px 5px 5px black;
    padding: 0.5em;
    min-height: 15vh;
}
</style>