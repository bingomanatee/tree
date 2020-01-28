import ReactDOM from 'react-dom'
import React from 'react'
import styled from 'styled-components'
import { Global } from './styles'
import Tree  from './Tree'

const Item = styled.div`
color: white;
`

/**
 *
 const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
 <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
 * @returns {*}
 * @constructor
 */

const App = () => (
  <>
    <Global />
    <Tree name="main" defaultOpen>
      <Tree name="hello" />
      <Tree name="subtree with children">
        <Tree name="hello" />
        <Tree name="sub-subtree with children">
          <Tree name="child 1" style={{ color: '#37ceff' }} />
          <Tree name="child 2" style={{ color: '#37ceff' }} />
          <Tree name="child 3" style={{ color: '#37ceff' }} />
          <Tree name="custom content">
            <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
              <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
            </div>
          </Tree>
        </Tree>
        <Tree name="hello" />
      </Tree>
      <Tree name="world" />
      <Tree name={<span>🙀 something something</span>} />
    </Tree>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
