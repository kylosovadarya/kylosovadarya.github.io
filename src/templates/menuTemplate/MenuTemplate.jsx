import React from 'react';
import classes from './menuTemplate.module.scss';
import Menu from '../../components/menu/Menu';

function MenuTemplate(props) {
  return (
    <div className={classes.menuTemplate}>
        <Menu menu={props.menu}/>
        {props.content}
    </div>
  )
}

export default MenuTemplate