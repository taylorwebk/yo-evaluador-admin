import React from 'react'
import Animated from 'animated/lib/targets/react-dom'

const ClickEffect = ({ children }) => {
  // console.log('CHILDREN: ', children)
  const animation = new Animated.Value(1)
  // console.log(animation)
  const handleMouseDown = () => Animated.spring(animation, {toValue: 0.9}).start()
  const handleMouseUp = () => Animated.spring(animation, {toValue: 1}).start()
  return (
    <Animated.div
      style={{
        display: 'inline-block',
        transform: [
          { scale: animation }
        ]
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      >
      {children}
    </Animated.div>
  )
}
export default ClickEffect
