import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List', () => {
  const wrapper = shallowMount(List)

  it('renders 100 list elements', () => {
    expect(wrapper.findAll("li").length).toBe(100);
  })

  it('changes text color after click for every third element', () => {
    const clickableElement = wrapper.find("li:nth-child(3)"),
      nonClickableElement = wrapper.find("li");

    clickableElement.trigger("click");
    expect(clickableElement.attributes('style')).toMatch(/^color: rgb\(255, 0, 132\)|color: #ff0084$/);

    nonClickableElement.trigger("click");
    expect(nonClickableElement.attributes('style')).toBeUndefined();
  })

  it('deletes chosen element after clicking Delete button', () => {
    const li = wrapper.find(".c-list__list-item--0"),
      button = li.find("button");

    button.trigger("click");
    expect(wrapper.find(".c-list__list-item--0").exists()).toBe(false);
  })
})
