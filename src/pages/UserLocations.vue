
<template>
  <section class="ui two column centered grid">
    <div class="column">
      <form action="" class="ui segment large form">
        <div class="ui message red"></div>
        <div class="ui segment">
          <div class="field">
            <div class="ui right icon input large">
              <input type="text" placeholder="Enter Your Address" />
              <button class="ui" @click="locatorButtonPressed" ><i class="location arrow icon"></i></button>
            </div>
          </div>
        </div>
        <button class="ui button red" >Go</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        error=>{
            console.log(error.message);
        });
      } else {
        console.log("No Support");
      }
    },
  },
};
</script>

<style>
</style>