
const Header = ({
  children,
  fonte,
  corFundo,
  corTexto,
  espacamento
}) => {

  const style = `
    ${fonte}
    ${corFundo}
    ${corTexto}
    ${espacamento}
  `;

  return <header className={style}>{children}</header>;
}

export default Header;
