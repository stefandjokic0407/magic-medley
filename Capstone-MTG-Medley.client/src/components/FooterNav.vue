<template>
    <div class="row footer-style justify-content-center">
        <div class="col-6">
            <div class="border-bottom border-danger-5">Account</div>
            <p>Login</p>
            <p>My Collection</p>
            <p>Contact Us</p>
        </div>
        <div class="col-6">
            <div class="border-bottom border-danger-5">Magic Medley</div>
            <p>Map</p>
            <p>Rules</p>
            <p>Videos</p>
            <p>Search Cards</p>
        </div>
    </div>
</template>


<script>
export default {
    setup(){
        return{}
    }
}
</script>


<style lang="scss" scoped>
    .footer-style{
        background: rgb(0 0 0 / 38%);
        backdrop-filter: blur(4px);
        border: solid #8d8b8b1f;
        color: white;
        border-radius: 8px;
        text-shadow: 5px 5px 5px black;
        padding: 0.5em;
        min-height: 50vh;
    }

</style>