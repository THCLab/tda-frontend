<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row">
      <div class="col-4-md">
        <q-list bordered class="rounded-borders" style="max-width: 350px">
          <q-item-label header>Recent</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Would you like to join clinical trial?</q-item-label>
              <q-item-label caption lines="2">
                <span class="text-weight-bold">Sandra</span>
                -- Pharma 1 is organizing new clinical trial which you fit perfectly. Would you like to join?
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              1 min ago
            </q-item-section>
          </q-item>

          <q-separator inset="item" />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar4.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">New offer</q-item-label>
              <q-item-label caption lines="2">
                <span class="text-weight-bold">John</span>
                -- Can we schedule a call for tomorrow?
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              1 min ago
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md">
        <div class="q-pa-md row justify-center">
           <div style="width: 100%; max-width: 400px">
             <q-chat-message
               name="<span class='text-positive'>Trusted Source</span>"
               avatar="https://cdn.quasar.dev/img/avatar3.jpg"
               :text="['hey, how are <strong>you</strong>?']"
               stamp="7 minutes ago"
               sent
               bg-color="amber-7"
             />
             <q-chat-message
               name="<span class='text-negative'>Jane (untrusted text but trusted name)</span>"
               avatar="https://cdn.quasar.dev/img/avatar5.jpg"
               :text="[
                 'doing fine, how r you?',
                 'I just feel like typing a really, really, <strong>REALLY</strong> long message to annoy you...'
               ]"
               text-sanitize
               size="6"
               stamp="4 minutes ago"
               text-color="white"
               bg-color="primary"
             />
             <q-chat-message
               name="<span class='text-negative'>Jao (untrusted)</span>"
               avatar="https://cdn.quasar.dev/img/avatar5.jpg"
               :text="['<strong>Did it work?</strong>']"
               stamp="1 minutes ago"
               size="8"
               text-color="white"
               bg-color="primary"
             />
           </div>
         </div>
      </div>
    </div>
  </div>
</template>
