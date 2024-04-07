<template>
    <section>
        <!-- lg and md -->
        <header class="card m-0 shadow-sm d-lg-flex d-md-flex d-none flex-row justify-content-between px-3 py-2">
            <a href="#"><img src="../assets/GC_logo.png" alt="" width="40" height="40" style="border-radius: 5px;"/></a>
            <span class="text-light rounded material-symbols-outlined d-flex justify-content-center align-items-center border"
                type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu"
                style="width: 40px; height: 40px;"> settings </span>
        </header>
        <!-- <= sm -->
        <header class="card m-0 shadow-sm d-lg-none d-md-none d-flex flex-row justify-content-between px-2 py-2">
            <a href="#"><img src="../assets/GC_logo.png" alt="" width="40" height="40" /></a>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary mx-2 d-flex justify-content-center align-items-center" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#groupes" aria-controls="groupes"
                    style="width: 40px;height: 40px;"> <span class="material-symbols-outlined"> forum </span>
                </button>
                <span class="text-light material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                    type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu"
                    style="width: 40px; height: 40px;"> settings </span>
            </div>
        </header>
        <div class="d-flex align-items-start text-dark">
            <div class="nav d-lg-flex d-md-flex d-none flex-column nav-pills col-lg-3 col-md-4"
                id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div class="bg-light d-flex flex-row card shadow rounded-pill m-2 p-1">
                    <span
                        class="material-symbols-outlined d-flex justify-content-center align-items-center text-primary"
                        style="width: 35px; height: 35px;"> search </span>
                    <input type="search" name="search" id="search"
                        class="text-dark form-control rounded rounded-pill rounded-4 border-0" style="height: 40px;">
                </div>
                <button class="nav-link active d-flex justify-content-between align-items-center" id="frontend-tab"
                    data-bs-toggle="pill" data-bs-target="#frontend" type="button" role="tab" aria-controls="frontend"
                    aria-selected="true">
                    <img src="../assets/GC_logo.png" alt="" width="50" height="50" class="rounded rounded-4">
                    <div class="d-flex flex-column mx-3">
                        <h6> Développement web frontend </h6>
                    </div>
                </button>
                <button class="nav-link d-flex justify-content-between align-items-center" id="backend-tab"
                    data-bs-toggle="pill" data-bs-target="#backend" type="button" role="tab" aria-controls="backend"
                    aria-selected="false">
                    <img src="../assets/GC_logo.png" alt="" width="50" height="50" class="rounded rounded-4">
                    <div class="d-flex flex-column mx-3">
                        <h6> Développement web backend </h6>
                    </div>
                </button>
            </div>
            <div class="tab-content p-0 bg-light overflow-auto col-lg-9 col-md-8 col-12 border border-bottom-0 border-top-0 border-right-0"
                id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="frontend" role="cabpanel" aria-labelledby="frontend-tab">
                    <div class="d-flex flex-column">
                        <div style="height: 9vh;"
                            class="m-0 card rounded-0 d-flex flex-row justify-content-between align-items-center p-1">
                            <div class="d-flex justify-content-between align-items-center">
                                <img src="../assets/GC_logo.png" alt="" width="50" height="50" class="rounded rounded-circle">
                                <div class="d-flex flex-column mx-3">
                                    <h6 class="fw-bold text-light"> Développement web frontend </h6>
                                </div>
                            </div>
                            <span
                                class="material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                        </div>
                        <div style="height: 74vh;" class="m-0 overflow-auto d-flex flex-column p-2">
                            <div v-for="message in this.$store.state.messages['messages']" :key="message.idMessage">
                                <div v-if="message.idGroupe === 1 && message.pseudoUser !== currentUserPseudo">
                                    <p class="text-start my-0"> {{ message.pseudoUser }} </p>
                                    <div class="m-0 card px-2 py-1 bg-warning mb-1 col-lg-6 col-md-8 col-10 text-dark text-start"
                                        style="border-radius: 15px;">
                                        {{ message.texte }}
                                    </div>
                                </div>
                                <div v-if="message.idGroupe === 1 && message.pseudoUser === currentUserPseudo"
                                    class="col-12 d-flex justify-content-end">
                                    <div class="m-0 card px-2 py-1 bg-primary mb-1 col-lg-6 col-md-8 col-10 text-light text-end"
                                        style="border-radius: 15px;">
                                        {{ message.texte }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- lg and md -->
                        <div style="height: 8vh;"
                            class="rounded-0 m-0 card d-lg-flex d-md-flex d-none flex-row justify-content- align-items-center p-1">
                            <span
                                class="material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span
                                class="material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <input type="text" name="message" id="message" class="bg-light form-control rounded rounded-pill">
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span @click="sendMessageGroupe1"
                                class="text-light material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                id="send" style="width: 40px; height: 40px;"> send </span>
                        </div>
                        <!-- <= sm -->
                        <div style="height: 8vh;"
                            class="rounded-0 m-0 card d-lg-none d-md-none d-flex flex-row justify-content- align-items-center p-1">
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <input type="text" name="" id="" class="bg-light form-control rounded rounded-pill">
                            <span
                                class="text-light material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> send </span>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="backend" role="tabpanel" aria-labelledby="backend-tab">
                    <div class="d-flex flex-column">
                        <div style="height: 9vh;"
                            class="rounded-0 m-0 card d-flex flex-row justify-content-between align-items-center p-1">
                            <div class="d-flex justify-content-between align-items-center">
                                <img src="../assets/GC_logo.png" alt="" width="50" height="50" class="rounded rounded-circle">
                                <div class="d-flex flex-column mx-3">
                                    <h6 class="fw-bold text-light"> Développement web backend </h6>
                                </div>
                            </div>
                            <span
                                class="material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                        </div>
                        <div style="height: 74vh;" class="m-0 overflow-auto d-flex flex-column p-2">
                            <div v-for="message in this.$store.state.messages['messages']" :key="message.idMessage">
                                <div v-if="message.idGroupe === 2 && message.pseudoUser !== currentUserPseudo">
                                    <p class="text-start my-0"> {{ message.pseudoUser }} </p>
                                    <div class="m-0 card px-2 py-1 bg-warning mb-1 col-lg-6 col-md-8 col-10 text-dark text-start"
                                        style="border-radius: 15px;">
                                        {{ message.texte }}
                                    </div>
                                </div>
                                <div v-if="message.idGroupe === 2 && message.pseudoUser === currentUserPseudo"
                                    class="col-12 d-flex justify-content-end">
                                    <div class="m-0 card px-2 py-1 bg-primary mb-1 col-lg-6 col-md-8 col-10 text-light text-end"
                                        style="border-radius: 15px;">
                                        {{ message.texte }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- lg and md -->
                        <div style="height: 8vh;"
                            class="rounded-0 m-0 card d-lg-flex d-md-flex d-none flex-row justify-content- align-items-center p-1">
                            <span
                                class="material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span
                                class="material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <input type="text" name="message2" id="message2" class="bg-light form-control rounded rounded-pill">
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <span @click="sendMessageGroupe2"
                                class="text-light material-symbols-outlined d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> send </span>
                        </div>
                        <!-- <= sm -->
                        <div style="height: 8vh;"
                            class="rounded-0 m-0 card d-lg-none d-md-none d-flex flex-row justify-content- align-items-center p-1">
                            <span
                                class="material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> </span>
                            <input type="text" name="" id="" class="text-light form-control rounded rounded-pill">
                            <span
                                class="text-light material-symbols-outlined mx-2 d-flex justify-content-center align-items-center border rounded"
                                style="width: 40px; height: 40px;"> send </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Offcanvas -->
    <!-- Groupes -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="groupes" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel" class="fw-bold"> Groupes </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="nav d-flex flex-column nav-pills" id="v-pills-tab" role="tablist"
                aria-orientation="vertical">
                <div class="bg-light d-flex flex-row card shadow rounded-pill m-2">
                    <span class="text-dark material-symbols-outlined d-flex justify-content-center align-items-center"
                        style="width: 35px; height: 35px;"> search </span>
                    <input type="search" name="search" id="search"
                        class="text-dark form-control rounded rounded-pill rounded-4 border-0" style="height: 40px;">
                </div>
                <button class="nav-link active d-flex justify-content-between align-items-center border"
                    id="frontend-tab" data-bs-toggle="pill" data-bs-target="#frontend" type="button" role="tab"
                    aria-controls="frontend" aria-selected="true">
                    <img src="../assets/GC_logo.png" alt="" width="50" height="50" class="rounded rounded-4">
                    <div class="d-flex flex-column mx-3">
                        <h6> Développement web frontend </h6>
                    </div>
                </button>
                <button class="nav-link d-flex justify-content-between align-items-center " id="backend-tab"
                    data-bs-toggle="pill" data-bs-target="#backend" type="button" role="tab" aria-controls="backend"
                    aria-selected="false">
                    <img src="../assets/GC_logo.png" alt="" width="50" height="50" class="rounded rounded-4">
                    <div class="d-flex flex-column mx-3">
                        <h6> Développement web backend </h6>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <!-- Menu -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="menu" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel" class="fw-bold"> Menu </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-between">
            <h4 class="text-start"> {{ currentUser }} </h4>
            <button @click="logOut" class="btn btn-primary mx-auto"> Deconnexion </button>
        </div>
    </div>
</template>

<script>

export default {
    name: "GeekChat",
    components: {

    },
    data() {
        return {
            messages: this.$store.state.messages["messages"],
            currentUserPseudo: window.localStorage.getItem('userPseudo'),
            currentUser: window.localStorage.getItem('user')
        }
    },
    methods: {
        sendMessageGroupe1() {
            fetch(`http://localhost:3010/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    texte: document.getElementById("message").value,
                    idGroupe: 1,
                    pseudoUser: window.localStorage.getItem("userPseudo"),
                })
            })
                .then((response) => response.json())
                .then(() => {
                    document.getElementById("message").value = "";
                    window.location.href = "/chat";
                })
                .catch(error => {
                    alert("Le champ ne doit pas rester vide");
                    console.log('Error creating user:', error);
                });
        },
        sendMessageGroupe2() {
            fetch(`http://localhost:3010/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    texte: document.getElementById("message2").value,
                    idGroupe: 2,
                    pseudoUser: window.localStorage.getItem("userPseudo"),
                })
            })
                .then((response) => response.json())
                .then(() => {
                    document.getElementById("message").value = "";
                    window.location.href = "/chat";
                })
                .catch(error => {
                    alert("Le champ ne doit pas rester vide");
                    console.log('Error creating user:', error);
                });
        },
        logOut() {
            window.localStorage.setItem("userPseudo", "");
            window.location.href = "/";
        },
        handleKeyPress1(event) {
            if (event.keyCode === 13) {
                this.sendMessageGroupe1();
            }
        },
    },
    beforeMount() {
        fetch('http://localhost:3010/messages', {
            method: "GET"
        })
            .then((response) => {
                response.json().then((data) => {
                    this.$store.commit('READ_ALLMESSAGES', data);
                    // alert(window.localStorage.getItem('userPseudo'))
                });
            })
            .catch((err) => {
                console.error(err);
            });
        document.removeEventListener("keydown", this.handleKeyPress1);

    },
    mounted() {
        document.addEventListener("keydown", this.handleKeyPress1);
    },
}
</script>

<style>
section {
    height: 100vh;
}

#send:hover {
    cursor: pointer;
}
</style>