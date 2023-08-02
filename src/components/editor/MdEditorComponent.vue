<template>
  <div ref="MdEditorComponentRefs" class="md-editor-component"></div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import Editor from '@toast-ui/editor'
  import '@toast-ui/editor/dist/toastui-editor.css'
  import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
  import '@toast-ui/editor/dist/i18n/zh-cn'

  const editor = ref(null)

  const MdEditorComponentRefs = ref(null)
  onMounted(() => {
    editor.value = new Editor({
      el: MdEditorComponentRefs.value,
      initialValue: '# Hello, world!',
      previewStyle: 'vertical',
      height: '100%',
      usageStatistics: false,
      language: 'zh-CN',
      theme: 'dark',
    })
  })
</script>

<style scoped lang="less">
  .md-editor-component {
    height: 100%;
    box-sizing: border-box;

    /deep/ .toastui-editor-defaultUI {
      box-sizing: border-box;
      border-radius: 0;
    }
  }
</style>
