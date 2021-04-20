<template>
  <VGrid theme="compact" :source="rows" :columns="columns"></VGrid>
</template>

<script lang="ts" setup>
import { VGrid } from './vgrid'
// import type { Components } from '@revolist/revogrid'

// ref: grid = null as null | Components.RevoGrid

// grid.

const columns = [{ prop: 'name' }, { prop: 'details' }]
const rows = [
  {
    name: '1',
    details: 'Item 1',
  },
  {
    name: '1',
    details: 'Item 1',
  },
  {
    name: '1',
    details: 'Item 1',
  },
  {
    name: '1',
    details: 'Item 1',
  },
]
</script>
<style>
revo-grid {
  height: 500px;
}
</style>
