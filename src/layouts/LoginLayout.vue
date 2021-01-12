<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-blue-2 q-py-xs" height-hint="58">
      <q-toolbar>

        <q-space />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-toolbar-title shrink class="text-weight-bold">
            Trusted Digital Assistant
          </q-toolbar-title>
        </q-btn>

        <q-space />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LoginLayout',

  created () {
  }
}
</script>

<style lang="sass">
</style>
