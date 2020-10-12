import { mount } from '@vue/test-utils'
import SearchBar from '../components/SearchBar.vue'

const factory = (values = {}) => {
    return mount(SearchBar, {
      data () {
        return {
            inputSearch: null,
        }
      }
    })
  }

  describe('SearchBar', () => {
    it('inputSearch value is well bind to the input value', () => {
      const wrapper = factory({  })
      const newSearch = 'cream'
      const input = wrapper.find('input')
      input.element.value = newSearch

      expect(wrapper.inputSearch == newSearch)
    });
  })