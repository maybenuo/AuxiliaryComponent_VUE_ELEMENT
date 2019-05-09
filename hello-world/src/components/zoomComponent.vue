<template>
  <div id="zoomComponent" class="zoom-component" @click="zoomComponentClick">
    <div id="backShady">
      <slot></slot>
      <canvas id="frameCanvas"></canvas>
      <img id="selectImg" src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'zoomComponent',
  data() {
    return {
      startX: 0,
      startY: 0
    }
  },
  mounted() {
    const zoomComponent = document.getElementById('zoomComponent')
    zoomComponent.addEventListener('mousedown', this.addFrameStart)
    document.addEventListener('mouseup', this.addFrameEnd)
  },
  methods: {
    addFrameStart(e) {
      try {
        const evt = window.event || e
        // const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        // const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
        this.startX = evt.clientX
        this.startY = evt.clientY
        const canvas = document.getElementById('frameCanvas')
        canvas.style.marginLeft = this.startX + 'px'
        canvas.style.marginTop = this.startY + 'px'
        canvas.style.border = '1px solid blue'
        canvas.style.position = 'absolute'
        canvas.style.left = 0
        canvas.style.top = 0
      } catch (e) {
        alert(e)
      }
      document.onmousemove = (e) => {
        const evt = window.event || e
        // const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        // const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
        const startX = evt.clientX
        const startY = evt.clientY
        const canvas = document.getElementById('frameCanvas')
        canvas.style.width = `${startX - this.startX}px`
        canvas.style.height = `${startY - this.startY}px`
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
      }
    },
    addFrameEnd(e) {
      try {
        // 生成图片并作放大展示
        document.onmousemove = null
        const canvas = document.getElementById('frameCanvas')
        const pen = canvas.getContext('2d')
        const canvasImg = canvas.toDataURL('image/jpg', 1)
        document.getElementById('selectImg').src = canvasImg
        canvas.style.width = 0
        canvas.style.height = 0
        console.log('生成图片')
      } catch (e) {
        alert(e)
      }
    },
    zoomComponentClick(e) {
      const shady = e.currentTarget
      shady.className = 'back-shady'
    }
  }
}
</script>

<style>
.back-shady {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

