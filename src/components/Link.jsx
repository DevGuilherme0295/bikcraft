
const Link = ({
  texto,
  referencia,
  tamanhoFonte,
  pesoFonte,
  caixaFonte,
  espacamentoFonte,
  planagem,
  transicao
}) => {

  const style = `
    ${tamanhoFonte}
    ${pesoFonte}
    ${caixaFonte}
    ${espacamentoFonte}
    ${planagem}
    ${transicao}
  `;

  return <a className={style} href={referencia}>{texto}</a>;
}

export default Link;
