import React, { memo, useState } from 'react'
import { useMeasure, usePrevious } from './helpers'
import { a, useSpring } from 'react-spring'
import { Center, CheckboxWrapper, Content, Frame, Title } from './styles'
import Checkbox from './Checkbox'
import Empty from './Empty'
import Mutable from './Mutable'
import Add from './Add'
import Remove from './Remove';

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const [removed, setRemoved] = useState(false)
  const [extra, setExtra] = useState([])
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  })

  if (removed) return '';
  return (
    <Frame>
      <Center>
        <CheckboxWrapper>{children ? <Checkbox checked={isOpen} onChange={(e) => {
          setOpen(e.target.value)
        }}/> : <Empty/>}</CheckboxWrapper>
        <Title style={style}>{name}</Title>
        <Remove onClick={() => setRemoved(true)}></Remove>
      </Center>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <a.div style={{ transform }} {...bind}>
          {children}
        </a.div>
      </Content>
      {extra.map(e => (
        <Center>
          <CheckboxWrapper><Empty/></CheckboxWrapper>
          {e}
          <Remove onClick={() => setExtra(extra.filter(a => a !== e))}></Remove>
        </Center>
      ))}
      <Center onClick={() => {
        setExtra([...extra, <Mutable/>])
      }}>
        <CheckboxWrapper><Add/></CheckboxWrapper>
        <Title style={{ color: '#999999' }}>Add Item</Title>
      </Center>
    </Frame>
  )
})

export default Tree;
