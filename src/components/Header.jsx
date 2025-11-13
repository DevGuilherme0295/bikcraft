
const Header = ({
  children,
  fonte,
  corFundo,
  corFonte,
  preenchimento
}) => {

  const style = `
    ${fonte}
    ${corFundo}
    ${corFonte}
    ${preenchimento}
  `;

  return <header className={style}>{children}</header>;
}

export default Header;
