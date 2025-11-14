
const Section = ({ children, corFundo, altura, espacamento, modeloCaixa, corTexto }) => {

  const style = `
    ${corFundo}
    ${altura}
    ${espacamento}
    ${modeloCaixa}
    ${corTexto}
  `;

  return (
    <>
      <section className={style}>{children}</section>
    </>
  );
}

export default Section;
