<template>
    <div class="row fixed-bottom footer-style justify-content-between px-3">
        <div class="col-2 py-2 text-center">
            <div class="text-center border-bottom border-2 text-uppercase"> <b>Account</b></div>
            <div class="p-2 selectable text-uppercase no-select">
                <Login />
            </div>
            <div class="p-2 selectable no-select">
                <router-link :to="{ name: 'Collection' }" class="text-light text-uppercase">
                    My Collection
                </router-link>
            </div>
        </div>
        <div class="col-2 py-2 text-center">
            <div class="text-center border-bottom border-2 text-uppercase"><b>Magic Medley</b></div>

            <div class="p-2 selectable no-select">
                <router-link :to="{ name: 'Search' }" class="text-light text-uppercase">
                    Search Cards
                </router-link>
            </div>
            <div class="p-2 selectable no-select">
                <router-link :to="{ name: 'Guild' }" class="text-light selectable no-select text-uppercase">
                    Guild
                </router-link>
            </div>
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
    text-shadow: 0px 0px 1px black;
    // padding: 0.5em;
    // min-height: 15vh;
}
</style>