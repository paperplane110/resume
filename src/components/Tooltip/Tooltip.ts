export const tooltipProps = {
    theme: {
      type: String,
      default: 'dark',
      validator(value: string) {
        return ['dark', 'light'].includes(value)
      },
    },
    text: {
      type: String,
      default: '',
    },
  }