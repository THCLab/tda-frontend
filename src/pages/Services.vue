<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="services" label="Services" />
          <q-tab name="alarms" label="Pending applications" />
          <q-tab name="movies" label="Approved" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="services">
            <div class="text-h6">Available services</div>
              <div class="q-pa-md" style="max-width: 350px">
                 <q-list bordered separator>
                   <q-item clickable v-ripple>
                     <q-item-section>Immunization Passport</q-item-section>
                   </q-item>

                   <q-item clickable v-ripple>
                     <q-item-section>
                       <q-item-label>Yellow fever</q-item-label>
                       <q-item-label caption>Treveler passport</q-item-label>
                     </q-item-section>
                   </q-item>

                   <q-item clickable v-ripple>
                     <q-item-section>
                       <q-item-label>Cov-19 Vaccination</q-item-label>
                       <q-item-label>Only for adults</q-item-label>
                     </q-item-section>
                   </q-item>
                 </q-list>
               </div>
          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary" />
          </q-page-sticky>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Pending applications</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Approved</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
