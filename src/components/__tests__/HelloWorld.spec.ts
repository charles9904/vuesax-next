import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import VsButton from './VsButton.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(VsButton, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
