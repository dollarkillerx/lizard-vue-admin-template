<script setup lang="ts">
import { RouterView  } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { Toaster as Sonner } from '@/components/ui/sonner'
</script>

<template>
  <div>
    <n-modal-provider>
      <n-message-provider>
        <n-loading-bar-provider>
          <n-notification-provider>
            <n-dialog-provider>
              <router-view />
            </n-dialog-provider>
          </n-notification-provider>
        </n-loading-bar-provider>
      </n-message-provider>
    </n-modal-provider>
    <Toaster />
    <Sonner />
  </div>
</template>