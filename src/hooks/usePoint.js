import { onMounted, onBeforeUnmount, reactive } from 'vue'
function savePoint() {
    const point = reactive({
        x1: 0,
        x2: 0,
    })
    function p(event) {
        point.x1 = event.pageX
        point.x2 = event.pageY
    }
    onMounted(() => {
        window.addEventListener('click', p)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', p)
    })
    return point
}
export default savePoint
