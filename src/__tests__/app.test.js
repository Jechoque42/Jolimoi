import { shallowMount } from '@vue/test-utils'
import App from '../App.vue'

const factory = (values = {}) => {
    return shallowMount(App, {
      data () {
        return {
          productList: null,
          isNoproduct: null
        }
      }
    })
  }

  describe('App', () => {
    it('isNoproduct is true when productList is empty', () => {
      const wrapper = factory({ productList: [] })
  
      expect(wrapper.isNoproduct == true)
    });

    it('there is a list render when productList contain some product', () => {
        const wrapper = factory({ productList: { "id": 36, "brand": "banila co", "name": "it radiant brightening cream" } }) 
    
        expect(wrapper.find(".list-render").exists()).toBeTruthy();
      });
  })