import Vue from 'vue'
import About from '@/components/About'

describe('About.vue', () => {
  it('Can find the string "Logan is awesome"', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h2').textContent)
      .toEqual('Logan is awesome')
  })
})