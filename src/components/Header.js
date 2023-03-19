import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'


const Header = ({title}) => {
    const onClick = ()=>{
        console.log('click')
    }
  return (
    <>
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} text="add" color="green"/>
        </header>
    </>

  )
}

Header.propTypes={
    h:PropTypes.string.isRequired,
};
Header.defaultProps={
    title:"ToDo"
}

export default Header