<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue';
import "summernote/dist/summernote-lite.min";
import "summernote/dist/summernote-lite.min.css";
import "summernote/dist/lang/summernote-es-ES.min";
import SummernoteEditor from 'summernote-editor-vue3';
const editor = ref('');
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Summernote Editor" />
    </div>
  </header>

  <main>
    <SummernoteEditor
      v-model="editor"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
