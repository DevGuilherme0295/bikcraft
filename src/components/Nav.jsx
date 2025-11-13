
const Nav = ({
  children,
  modeloCaixa,
  justificacao,
  alinhamento,
  altura
}) => {

  const style = `
    ${altura}
    ${modeloCaixa}
    ${justificacao}
    ${alinhamento}
  `;

  return <nav className={style}>{children}</nav>;
}

export default Nav;
