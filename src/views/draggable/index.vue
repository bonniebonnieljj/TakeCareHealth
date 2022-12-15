
<template>
  <div>
    {{list}}
    <vuedraggable class="wrapper" v-model="list">
      <transition-group>
        <div v-for="item in list" :key="item.projectid" class="item">
          <p>{{item.name}}</p>
        </div>
      </transition-group>
    </vuedraggable>
  </div>
</template>
<script>
import vuedraggable from "vuedraggable";
export default {
  components: { vuedraggable },
  props: {},
  data() {
    return {

      list: [
        {
          name: "体型",
          projectid: 1,
        },
        {
          name: "屈臂悬垂",
          projectid: 2,
        },
        {
          name: "引体向上",
          projectid: 3,
        },
      ],

    };
  },
  updated() {
    console.log(this.list);

  }
}
</script>
