<template>
  <div id="">
    <h2>Built-in Directive</h2>
    <p v-text="'v-text'"></p>
    <p v-html="'<strong>v-html</strong>'"></p>
    <h2>Custom Directive</h2>
    <p v-local-highlight:background.delayed.blink="'red'">Background Color</p>
    <p v-local-highlight:background="'red'">Background Color</p>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay =3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value;
          let seconColor = 'blue';
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == seconColor ? currentColor = mainColor : currentColor = seconColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
                el.style.color = '#fff';
              }else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        }
        el.style.backgroundColor = '#ccc';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
