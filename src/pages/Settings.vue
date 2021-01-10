<template>
  <div class="q-pa-md">
    <pds-settings title="Personal Data Storage" />
    <controller-settings title="Controller Configuration" />
    <tda-settings title="TDA Configuration" />

    <q-list bordered padding>
      <q-item-label header>User Controls</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Content filtering</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict
            apps that can be downloaded
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Data Store</q-item-label>
          <q-item-label caption>
            Configure your data store.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
        <q-item-label header>General</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="check1" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Notifications</q-item-label>
            <q-item-label caption>
              Notify me about updates to apps or games that I downloaded
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="check2" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Sound</q-item-label>
            <q-item-label caption>
              Auto-update apps at anytime. Data charges may apply
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="check3" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Auto-add widgets</q-item-label>
            <q-item-label caption>
              Automatically add home screen widgets
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />
          <q-item-label header>Notifications</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>New consent request</q-item-label>
            </q-item-section>
            <q-item-section side >
              <q-toggle color="blue" v-model="notif1" val="battery" />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Connection request</q-item-label>
              <q-item-label caption>Allow notification</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-toggle color="green" v-model="notif2" val="friend" />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Enriched data received</q-item-label>
              <q-item-label caption>Allow notification when uploading images</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-toggle color="red" v-model="notif3" val="picture" />
            </q-item-section>
          </q-item>

          <q-separator spaced />
            <q-item-label header>Other settings</q-item-label>

            <q-item>
              <q-item-section side>
                <q-icon color="teal" name="volume_down" />
              </q-item-section>
              <q-item-section>
                <q-slider
                  v-model="volume"
                  :min="0"
                  :max="10"
                  label
                  color="teal"
                  />
              </q-item-section>
              <q-item-section side>
                <q-icon color="teal" name="volume_up" />
              </q-item-section>
            </q-item>

    </q-list>
  </div>
</template>

<script>
import PdsSettings from './Settings/PdsSettings.vue'
import ControllerSettings from './Settings/ControllerSettings.vue'
import TdaSettings from './Settings/TdaSettings.vue'

export default {
  name: 'settings',
  components: {
    PdsSettings,
    ControllerSettings,
    TdaSettings
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
