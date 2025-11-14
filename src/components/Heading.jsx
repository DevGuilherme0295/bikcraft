
const Headiing= ({children, tamanhoFonte, pesoFonte}) => {

  const style = `
    ${tamanhoFonte}
  `;

  return (
    <>
      <h1 className={style}>{children}</h1>
    </>
  );
}

export default Headiing
;
