<template>
  <div></div>
</template>
<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted } from 'vue'

onMounted(() => {
  var scene = new THREE.Scene()
  /**
   * 创建网格模型
   */
  const geometry = new THREE.BoxGeometry(1, 1, 1) //创建一个立方体几何对象Geometry
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
  }) //材质对象Material
  const mesh = new THREE.Mesh(geometry, material) //网格模型对象Mesh
  scene.add(mesh) //网格模型添加到场景中

  /**
   * 相机设置
   */
  var width = window.innerWidth //窗口宽度
  var height = window.innerHeight //窗口高度
  var k = width / height //窗口宽高比
  //创建相机对象
  const camera = new THREE.PerspectiveCamera(45, k, 0.1, 1000)
  camera.position.set(0, 0, 10) //设置相机位置
  camera.lookAt(0, 0, 0) //设置相机方向(指向的场景对象)
  /**
   * 创建渲染器对象
   */
  var renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height) //设置渲染区域尺寸
  renderer.setClearColor(0xb9d3ff, 1) //设置背景颜色
  document.body.appendChild(renderer.domElement) //body元素中插入canvas对象
  //执行渲染操作   指定场景、相机作为参数
  renderer.render(scene, camera)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', () => renderer.render(scene, camera))
})
</script>
<style scoped></style>
