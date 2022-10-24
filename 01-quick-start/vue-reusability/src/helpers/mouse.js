import { onMounted, onUnmounted, ref } from "vue"
import { useEventListener } from "./event"

export function useMouse () {
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  useEventListener(window, 'mousemove', update)

  // 一个组合式函数也可以挂靠在所需组件的生命周期上
  // 来启动或卸载副作用
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的状态
  return { x, y}
}