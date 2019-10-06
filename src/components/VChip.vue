<template>
  <div class="chip" :id="id" :style="chipStyle">
    <slot v-if="contact" name="image"></slot>
    {{value}}
    <span v-if="closable" class="closebtn" @click="closeHanlder" :style="closeStyle">&times;</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VChip extends Vue {
  @Prop({ required: true })
  private id!: string; 
  @Prop({ required: true })
  private value!: string;
  @Prop({ default: false })
  private contact!: boolean;
  @Prop({ default: true })
  private closable!: boolean;
  @Prop({})
  private onClose!: Function;
  @Prop({})
  private chipStyle!: any;
  @Prop({})
  private closeStyle!: any;

  /**
   * close chip event handler
   */
  closeHanlder(e: any) {
    e.target.parentElement.style.display = "none";
    this.onClose(this.id);
  }
}
</script>

<style scoped lang="scss">
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;

  img {
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .closebtn {
    padding-left: 10px;
    color: #888;
    font-weight: bold;
    float: right;
    font-size: 20px;
    cursor: pointer;
  }

  .closebtn:hover {
    color: #000;
  }
}
</style>
