import React from 'react'
// functional just need return no render since that involves react lifecycle
function Header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: 'darkgrey',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

export default Header;
