<template>
  <ul>
    <li>
      <router-link to="/page-a">
        page-a
      </router-link>
    </li>
    <li>
      <router-link to="/page-b">
        page-b
      </router-link>
    </li>
  </ul>
    
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
