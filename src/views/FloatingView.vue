<template>
  <div class="floating-view" @mousemove="mousemoveHandle" @mousedown="mousedownHandle" @mouseup="mouseupHandle"
       @click="clickHandle">
    <el-icon class="el-icon">
      <Edit/>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from 'vue'

  import {Edit} from '@element-plus/icons-vue'

  import {appWindow, LogicalSize, WebviewWindow} from '@tauri-apps/api/window'

  const canDraggable = ref(false)

  onMounted(async () => {
    await appWindow.setSize(new LogicalSize(40, 40))
  })

  const mousedownHandle = (): void => {
    canDraggable.value = true;
  }

  const mouseupHandle = (): void => {
    canDraggable.value = false;
  }

  const mousemoveHandle = async (): Promise<void> => {
    if (canDraggable.value) {
      await appWindow.startDragging()
    }
  }

  const clickHandle = async (): Promise<void> => {
    let mainWindow = WebviewWindow.getByLabel('main')
    // 如果主页面窗口不存在，则创建主窗口
    if (mainWindow == null) {
      new WebviewWindow('main', {url: '/#/'})
      return
    }
    // 检查窗口是否小化
    if (await mainWindow.isMinimized()) {
      // 如果主页面窗口小化，则恢复主窗口
      await mainWindow.unminimize();
    }
    // 如果主页面窗口存在，则设置主窗口为焦点
    await mainWindow.setFocus();
  }
</script>

<style scoped>
  .floating-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #00ADB5;
    border: 1px solid #00ADB5A0;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    user-select: none;

    .el-icon {
      width: 100%;
      height: 100%;
      font-size: 18px;
      color: #EEEEEE;
    }
  }
</style>
