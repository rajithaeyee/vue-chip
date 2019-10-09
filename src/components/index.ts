import  vue  from 'vue';
import VChip from '@/components/VChip.vue'

declare module 'vue/types/vue' {
    export interface Vue {
      VueChip: VChip;
    }
  }

const VueChip = {
    install: function (Vue : typeof vue, options:any) {
        Vue.component('vue-chip', VChip);
    },
}

export { VueChip };
export default VueChip;
