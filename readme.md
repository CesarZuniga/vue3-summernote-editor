# Summernote Editor for Vue 3

A VueJs 3 component for use [Summernote WYSIWYG](https://summernote.org/)

## Install
``` cmd
// npm install
npm install summernote-editor-vue3 --save
```

You must be have `jQuery` at `window.$` and install summernote by yourself.


### Globla JQuery sample for vite
``` javascript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: [ 'jquery', '*' ],
      jQuery: 'jquery',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// on main.js 
import * as jQuery from "jquery";

// define & and jQuery on the global window object
Object.assign(window, { $: jQuery, jQuery });
```
### Use as component
1. import as global component.
``` javascript
//import summernote lite
import "summernote/dist/summernote-lite.min";
// import css summernote lite
import "summernote/dist/summernote-lite.min.css";
//Add import for change default lang to spanish if not add this line default lang is English
import "summernote/dist/lang/summernote-es-ES.min";
// import SummernoteEditor
import SummernoteEditor from 'summernote-editor-vue3';

const vueApp = createApp({});
vueApp.component('SummernoteEditor', SummernoteEditor);

```

2. import into a single component.
``` javascript
// import SummernoteEditor
import SummernoteEditor from 'summernote-editor-vue3';

<template>
  <SummernoteEditor
      v-model="myValue"
      @update:modelValue="summernoteChange($event)"
      @summernoteImageLinkInsert="summernoteImageLinkInsert"
    />
</template>
<script>
export default {
    // declare SummernoteEditor
    components: {SummernoteEditor},
    data() {
        return {
            myValue: '',
        }
    },
    methods: {
       summernoteChange(newValue) {
          console.log("summernoteChange", newValue);
       },
        summernoteImageLinkInsert(...args) {
          console.log("summernoteImageLinkInsert()", args);
       },
    }
}
</script>
```


### Config/Options
- `:config`: `option[]`
  - configurable settings, see [Summernote options](https://summernote.org/deep-dive/)
  - you can define a global options on a `window.SUMMERNOTE_DEFAULT_CONFIGS`

### Events
- `@update:modelValue`
  - triggered when summernote value change
- `summernote bare events`
  - summernote events will be triggered in camelCase
  - `"summernote.change": "@summernoteChange"`
  - `"summernote.image.link.insert": "@summernoteImageLinkInsert"`

### Screen Demo
![alt text](https://github.com/CesarZuniga/vue3-summernote-editor/blob/master/demo-summmernote-editor/public/demo.png)