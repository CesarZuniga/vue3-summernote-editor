# Summernote Editor for Vue 3

A VueJs 3 component for use [Summernote WYSIWYG](https://summernote.org/)

## Install
``` cmd
// npm install
npm install summernote-editor-vue3 --save
```

You must be have `jQuery` at `window.$` and install summernote by yourself.


### Globla JQuery sample for vite
``` html
  Add in index.html
  <!-- import style summernote lite -->
  <link href="./node_modules/summernote/dist/summernote-lite.min.css" rel="stylesheet">
   <!-- import jquery -->
  <script src="./node_modules/jquery/dist/jquery.min.js"></script>
  <!-- import summernote lite -->
  <script src="./node_modules/summernote/dist/summernote-lite.min.js"></script>
   <!-- this line change default lang to spanish -->
  <script src="./node_modules/summernote/dist/lang/summernote-es-ES.min.js"></script>
```
### Use as component
1. import as global component.
``` javascript

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