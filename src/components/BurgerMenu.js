import React, { useState } from "react";

function BurgerMenu(props) {
  return (
    <div className="burger-menu">
      <input
        id="menu__toggle"
        type="checkbox"
        value={props.burger}
        checked={props.burger || false}
        onChange={props.soldCheckbox}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span className="menu__btn-burger"></span>
      </label>
    </div>
  );
}
export default BurgerMenu;
