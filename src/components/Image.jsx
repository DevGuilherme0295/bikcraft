
const Image = ({ fonte }) => {

  const style = `
    ${fonte}
  `;

  return (
    <>
      <img src={fonte} alt="" />
    </>
  );
}

export default Image;
