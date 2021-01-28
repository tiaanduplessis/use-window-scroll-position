import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const EVENT = 'scroll'

const getPosition = () => {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 }
  }

  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
}

const supportsPassive = () => {
  let passiveIfSupported = false

  if (typeof window === 'undefined') {
    return false
  }

  try {
    window.addEventListener('test', null,
      Object.defineProperty(
        {},
        'passive',
        {
          get: function () { passiveIfSupported = { passive: true } }
        }
      )
    )
  } catch (err) { }

  return passiveIfSupported
}

/**
 *
 * @param {Object} config Configuration object
 * @param {Number} config.wait Throttle wait period
 * @param {Boolean} config.passive Passive listener
 */
export const useWindowScrollPosition = ({ wait = 100, passive = true } = {}) => {
  const [position, setPosition] = useState(getPosition())
  useEffect(() => {
    const handleScroll = throttle(() => { setPosition(getPosition()) }, wait)

    if (passive) {
      passive = supportsPassive()
    }

    window.addEventListener(EVENT, handleScroll, passive)

    return () => {
      handleScroll.cancel()
      window.removeEventListener(EVENT, handleScroll)
    }
  })

  return position
}
