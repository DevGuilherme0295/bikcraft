
const List = ({
  children,
  modeloCaixa,
  brecha
}) => {

  const style = `
    ${modeloCaixa}
    ${brecha}
  `;

  return <ul className={style}>{children}</ul>;
}

export default List;
