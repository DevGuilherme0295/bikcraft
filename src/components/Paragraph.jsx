
const Paragraph = ({texto, tamanhoFonte}) => {

  const style = `
    ${tamanhoFonte}
  `;

  return (
    <>
      <p className={style}>{texto}</p>
    </>
  );
}

export default Paragraph;
