import { mount } from '@vue/test-utils'
import Header from '../components/Header.vue'

describe('Header', () => {
  it('restitue un titre qui correspond à la prop passé', () => {
    const wrapper = mount(Header, {
      propsData: {
        title: "This is a page for beauty product search"
      }
    })

    // vérifie que `message` est restitué
    expect(wrapper.find('.header-title').text()).toEqual("This is a page for beauty product search")
  })
})