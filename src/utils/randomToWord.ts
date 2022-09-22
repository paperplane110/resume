import { Ref } from 'vue';
import { generateRandomString} from './randomString'

export const randomToWord = (refString: Ref<string>, word: string, interval: number=60) => {
    let i = 0

    let changeTime: number
    if (word.length < 5) changeTime = 5
    else changeTime = word.length

    const randomTimer = setInterval(() => {
      const dis = Math.ceil(Math.random() * 3)
      refString.value =
        word.slice(0, i) + generateRandomString(word.length - i + dis)
      i++

      if (i === changeTime) {
        clearInterval(randomTimer)
        refString.value = word
      }
    }, interval)
  }