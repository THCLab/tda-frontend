<template>
  <q-page-container>
    <q-page class="">
      <div class="row q-col-gutter-md">
        <div class="offset-1 col-md-4 col-xs-10">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>TDA - Work</q-item-label>
                <q-item-label caption>v2.0.5</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon color="primary" name="arrow_forward" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>TDA - Private</q-item-label>
                <q-item-label caption>v2.1.0</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon color="primary" name="arrow_forward" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="offset-1 col-xs-10 col-md-5">
          <div class="row">
            <div class="col">
              <q-input v-model="result" label="Connection invite">
                <template v-slot:after>
                  <q-btn round dense flat icon="add" color="primary" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
      <q-dialog v-model="isScanerDialogVisible">
        <q-card>
          <q-toolbar>
            <q-icon style="font-size: 2em;" name="qr_code_scanner" />

            <q-toolbar-title>
              Scan invitation
            </q-toolbar-title>

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section>
            <p class="error">{{ error }}</p>
            <qrcode-stream @decode="onDecode" @init="onInit" v-if="!destroyed">
              <div class="loading-indicator" v-if="loading">
                Loading...
              </div>
            </qrcode-stream>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="isUploadQrDialogVisible">
        <q-card>
          <q-toolbar>
            <q-icon style="font-size: 2em;" name="cloud_upload" />

            <q-toolbar-title>
              Upload Qr Code
            </q-toolbar-title>

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section>
            <qrcode-capture @decode="onDecode" />
            <p align="center">or</p>
            <qrcode-drop-zone
              @detect="onDetect"
              @dragover="onDragOver"
              @init="logErrors"
            >
              <div class="drop-area" :class="{ dragover: dragover }">
                DROP SOME IMAGES HERE
              </div>
            </qrcode-drop-zone>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab color="secondary" text-color="white" icon="add" direction="left">
          <q-fab-action
            color="primary"
            text-color="white"
            @click="scanQrCode"
            icon="qr_code_scanner"
          />
          <q-fab-action
            color="primary"
            text-color="white"
            @click="uploadQrCode"
            icon="cloud_upload"
          />
        </q-fab>
      </q-page-sticky>
    </q-page>
  </q-page-container>
</template>

<script>
import { QrcodeDropZone, QrcodeCapture, QrcodeStream } from 'vue-qrcode-reader'

export default {
  components: { QrcodeDropZone, QrcodeStream, QrcodeCapture },

  data () {
    return {
      result: '',
      error: '',
      destroyed: false,
      dragover: false,
      isScanerDialogVisible: false,
      isUploadQrDialogVisible: false,
      loading: false
    }
  },

  methods: {
    onDecode (result) {
      if (result) {
        this.result = result
        this.destroyed = true
        this.isScanerDialogVisible = false
        this.isUploadQrDialogVisible = false
      }
    },

    scanQrCode () {
      this.destroyed = false
      this.isScanerDialogVisible = true
    },

    uploadQrCode () {
      this.isUploadQrDialogVisible = true
    },

    onDragOver (isDraggingOver) {
      this.dragover = isDraggingOver
    },

    async onDetect (promise) {
      try {
        const { content } = await promise

        this.result = content
        this.error = null
      } catch (error) {
        if (error.name === 'DropImageFetchError') {
          this.error = 'Sorry, you can\'t load cross-origin images :/'
        } else if (error.name === 'DropImageDecodeError') {
          this.error = 'Ok, that\'s not an image. That can\'t be decoded.'
        } else {
          this.error = 'Ups, what kind of error is this?! ' + error.message
        }
      }
    },

    async onInit (promise) {
      this.loading = true
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .loading-indicator {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }

  button {
    padding: 10px 15px
  }

  .drop-area {
    height: 200px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding: 10px;

    background-color: rgba(0,0,0,.5);
  }

  .dragover {
    background-color: rgba(0,0,0,.8);
  }

  .drop-error {
    color: red;
    font-weight: bold;
  }
</style>
