import { useState } from 'react';

const MenuLinks = ({ children, isActive }) => {
  const [open, setOpen] = useState(isActive);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default MenuLinks;
