<template>
  <div class="home">
    <GreetingCard />
    <ConditionalRender />
    <UserList />
    <DynamicBind />
    <EventHandler />
    <FormDemo />
    <DynamicComponent />
    <LifecycleDemo />
    <UserApiList />
    <CrudSystem />
  </div>
</template>

<script>
import GreetingCard from '../components/GreetingCard.vue'
import ConditionalRender from '../components/ConditionalRender.vue'
import UserList from '../components/UserList.vue'
import DynamicBind from '../components/DynamicBind.vue'
import EventHandler from '../components/EventHandler.vue'
import FormDemo from '../components/FormDemo.vue'
import DynamicComponent from '../components/DynamicComponent.vue'
import LifecycleDemo from '../components/LifecycleDemo.vue'
import UserApiList from '../components/UserApiList.vue'
import CrudSystem from '../components/CrudSystem.vue'

export default {
  name: 'Home',
  components: {
    GreetingCard,
    ConditionalRender,
    UserList,
    DynamicBind,
    EventHandler,
    FormDemo,
    DynamicComponent,
    LifecycleDemo,
    UserApiList,
    CrudSystem
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
