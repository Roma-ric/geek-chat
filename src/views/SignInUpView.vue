<template>
  <section id="section" class="d-flex justify-content-center align-items-center p-2">
    <div class="d-flex justify-content-around align-items-center flex-lg-row flex-md-row flex-column col-12 my-5">
      <div class="col-lg-4 col-md-5">
        <h1 class="text-warning mb-4 fs-1"> Geek<sub class="fs-2 text-primary">Chat</sub> </h1>
        <p class="fs-5 text-light"> La plateforme de communication entre les différents <strong>Geek</strong> de notre
          communauté. </p>
      </div>
      <div class="col-lg-4 col-md-5 col-12">
        <Form @submit="onSignIn" :validation-schema="schema()" class="card bg-light shadow p-2 ">

          <h4 class="fw-bold text-dark"> Connexion </h4>

          <Field type="text" name="pseudo" id="pseudoI" class="border border-1 rounded text-dark form-control mb-1 text-dark p-1" placeholder="Pseudo" />
          <ErrorMessage name="pseudo" class="mb-1 text-start text-danger" />

          <div class="d-flex border border-1 rounded mb-1 justify-content-between align-items-center">
            <Field type="password" name="motDePasse" id="motDePasseI" placeholder="Mot de passe"
              class="text-dark form-control border-0 text-dark px-1" />
            <span @click="changePasswordVisibility" id="passwordVisibility"
              class="material-symbols-outlined d-flex justify-content-center align-items-center text-dark"
              style="width: 30px; height: 30px;"> {{ v }} </span>
          </div>
          <ErrorMessage name="motDePasse" class="mb-2 text-start text-danger" />

          <button @click="onSignIn" type="submit" class="btn btn-primary mt-2"> Se connecter </button>

          <a href="" class="text-primary my-2"> Mot de passe oublié ? </a>

          <button type="button" class="btn btn-warning text-light col-7 mx-auto mb-2" data-bs-toggle="modal"
            data-bs-target="#inscription"> Créer un compte </button>
        </Form>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div class="modal fade" id="inscription" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold" id="staticBackdropLabel"> Inscription </h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          <Form @submit="onSignUp" :validation-schema="schema()">
            <Field type="text" name="nom" id="nomU" class="text-dark form-control mb-1 border border-1 px-1 rounded" placeholder="Nom" />
            <ErrorMessage name="nom" class="mb-1 text-start text-danger" />

            <Field type="text" name="prenom" id="prenomU" class="text-dark form-control mb-1 border border-1 px-1 rounded" placeholder="Prénom(s)" />
            <ErrorMessage name="prenom" class="mb-1 text-start text-danger" />

            <Field type="text" name="pseudo" id="pseudoU" class="text-dark form-control mb-1 border border-1 px-1 rounded" placeholder="Pseudo" />
            <ErrorMessage name="pseudo" class="mb-1 text-start text-danger" />

            <Field type="email" name="adresseEmail" id="adresseEmail" class="text-dark form-control mb-1 border border-1 px-1 rounded"
              placeholder="Adresse e-mail" />
            <ErrorMessage name="adresseEmail" class="mb-1 text-start text-danger" />

            <Field type="text" name="imgProfil" id="imgProfil" class="text-dark form-control mb-1 border border-1 px-1 rounded" readOnly value="/images" />
            <ErrorMessage name="imgProfil" class="mb-1 text-start text-danger" />

            <div class="d-flex border border-1 rounded mb-1 justify-content-between align-items-center">
              <Field type="password" name="motDePasse" id="motDePasseU" placeholder="Mot de passe"
                class="text-dark form-control border-0 px-1" />
              <span @click="changePasswordVisibility" id="passwordVisibility"
                class="material-symbols-outlined d-flex justify-content-center align-items-center"
                style="width: 30px; height: 30px;"> {{ v }} </span>
            </div>
            <ErrorMessage name="motDePasse" class="mb-2 text-start text-danger" />
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary">S'inscrire</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { configure } from 'vee-validate'
import router from '@/router'; 

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: false,
});

export default {
  name: "SignInUp",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      v: "visibility",
      users: this.$store.state.users
    }
  },
  methods: {
    changePasswordVisibility() {
      // 1
      this.v = (this.v === "visibility") ? "visibility_off" : "visibility";
      // 2
      let passwordInput = document.getElementById('motDePasseI');
      let passwordInputU = document.getElementById('motDePasseU');
      passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
      passwordInputU.type = (passwordInput.type === 'password') ? 'text' : 'password';
    },
    schema() {
      return yup.object().shape({
        nom: yup.string().required("Le nom est requis."),
        prenom: yup.string().required("Le prénom est requis."),
        pseudo: yup.string().min(5, "Le pseudo doit contenir au moins 5 caractères.").required("Le pesudo est requis."),
        adresseEmail: yup.string().email("L'adresse e-mail n'est pas valide.").required("L'adresse e-mail est requise."),
        motDePasse: yup.string().min(8, "Le mot de passe doit contenir au moins 8 caractères.").required("Le mot de passe est requis."),
        imgProfil: yup.string().required("La photo de profil est requis."),
      })
    },
    onSignIn() {
      const pseudoInput = document.getElementById("pseudoI").value;
      const motDePasseInput = document.getElementById("motDePasseI").value;

      if (this.users && this.$store.state.users["users"]) {
        const userIndex = this.$store.state.users["users"].findIndex(user => user.pseudo === pseudoInput && user.motDePasse === motDePasseInput);
        const user = this.$store.state.users["users"].find(user => user.pseudo === pseudoInput && user.motDePasse === motDePasseInput);

        if (userIndex !== -1) {
          window.localStorage.setItem("userPseudo", pseudoInput);
          // window.userPseudo = pseudoInput;
          window.localStorage.setItem("user", user.nom + " " + user.prenom);
          router.push('/chat');
        } else {
          alert("Pseudo ou Mot de passe incorrect!");
        }
      } else {
        alert("Les données d'utilisateurs ne sont pas disponibles.");
      }
    },
    onSignUp(values) {
      fetch(`http://localhost:3010/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values, null, 2)
      })
        .then((response) => response.json())
        .then(() => {
          alert("Inscription validée avec succès.");
          router.push('/');
        })
        .catch(error => {
          console.log('Error creating user:', error);
        });
    }
  },
  beforeMount() {
    fetch('http://localhost:3010/users', {
      method: "GET"
    })
      .then((response) => {
        response.json().then((data) => {
          this.$store.commit('READ_ALLUSERS', data);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
}
</script>

<style>
input {
  height: 45px
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

section {
  height: 100vh;
}
</style>
