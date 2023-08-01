<template>
  <div class="home-view">
    <div ref="MdPreviewRef"></div>
  </div>
</template>

<script>
  import Editor from '@toast-ui/editor'
  import '@toast-ui/editor/dist/toastui-editor.css'
  import '@toast-ui/editor/dist/i18n/zh-cn'

  export default {
    name: 'HomeView',
    data () {
      return {
        editor: null,
        editorText: '# Hello, world!',
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.editor = new Editor({
          el: this.$refs.MdPreviewRef,
          initialValue: this.editorText,
          previewStyle: 'vertical',
          height: '100%',
          usageStatistics: false,
          language: 'zh-CN',
        })
      })
    }
  }
</script>

<style scoped lang="less">
  .home-view {
    height: 100%;
    box-sizing: border-box;

    /deep/ .toastui-editor-defaultUI {
      box-sizing: border-box;
    }
  }
</style>
