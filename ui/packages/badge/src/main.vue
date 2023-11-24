<template>
  <div class="wf-badge">
      <slot></slot>
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="wf-badge__content"
        :class="[
          'wf-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]">
      </sup>
  </div>
</template>

<script>
export default {
    name:'WfBadge',
    props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
         // 这个值必须匹配下列字符串中的一个
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  },

  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    }
  }
}
</script>