<template>
  <div ref="summernoteRefElement"></div>
</template>

<script setup>
import * as jQuery from "jquery";

// define & and jQuery on the global window object
Object.assign(window, { $: jQuery, jQuery });
import { watch, onMounted, onBeforeUnmount, ref } from "vue";
const summernoteRefElement = ref(null);
const events = {
  "summernote.change": "summernoteChange",
  "summernote.image.link.insert": "summernoteImageLinkInsert",
};

let elem = null;
const props = defineProps({
  // v-model
  modelValue: {
    default: null,
    required: true,
    event: "change",
    validator(value) {
      return (
        value === null || typeof value === "string" || value instanceof String
      );
    },
  },
  // https://summernote.org/deep-dive/
  config: {
    type: Object,
    default: () => {return {...window.SUMMERNOTE_DEFAULT_CONFIGS, lang: "es-ES"}},
  },
});

const emit = defineEmits({
  // v-model event with validation
  "update:modelValue": (value) => value !== null,
  "summernote.change": (value) => value,
  "summernote.image.link.insert": (value) => value,
});

const stopWatch = watch(
  () => props.modelValue,
  async (newValue) => {
    // do something
    const currValue = $(elem).summernote("code");
    if (newValue != currValue) {
      $(elem).summernote("code", newValue);
    }
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  elem = $(summernoteRefElement.value);
  elem.summernote(props.config);
  $(elem).on("summernote.change", onChange);
  if (props.modelValue) {
    $(elem).summernote("code", props.modelValue);
  }
  registerEvents();
});

function onChange() {
  const value = $(elem).summernote("code");
  emit("update:modelValue", value);
}
function registerEvents() {
  for (var realName in events) {
    elem.on(`${realName}`, (...args) => {
      emit(`${events[realName]}`, ...args);
    });
  }
}

onBeforeUnmount(() => {
  stopWatch();
});
</script>
