<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs col-8">
          <div class="text-overline">Document</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Driving license</div>
          <div class="text-caption text-grey">
            <q-list bordered separator>
               <q-item v-ripple>
                 <q-item-section>
                   <q-item-label>Name</q-item-label>
                   <q-item-label caption>Bob Konieczny</q-item-label>
                 </q-item-section>
               </q-item>

               <q-item clickable v-ripple>
                 <q-item-section>
                   <q-item-label>Vehical type</q-item-label>
                   <q-item-label caption>A B C D+E</q-item-label>
                 </q-item-section>
               </q-item>

            </q-list>
          </div>
        </q-card-section>

        <q-card-section class="col-4 flex">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/boy-avatar.png"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="access_time" />
        <q-btn flat>
          Valid until 2025-10-13
        </q-btn>
        <q-btn flat color="primary">
          Issued by Austrian Gov on 2020-10-12
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>University of Science and Technology</q-item-label>
          <q-item-label caption>
            Master of degree
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          Computer science
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          Ticket for Concert
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          5:30PM
        </q-btn>
        <q-btn flat>
          7:00PM
        </q-btn>
        <q-btn flat color="primary">
          2021-04-06
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
