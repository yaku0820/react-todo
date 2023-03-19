import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'


const Header = ({title, onAdd}) => {
  return (
    <>
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} text="add" color="green"/>
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