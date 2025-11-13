import Header from './Header.jsx'
import Nav from './Nav.jsx';
import Link from './Link.jsx';
import List from './List.jsx';
import Item from './Item.jsx';
import Box from './Box.jsx';
import Button from './Button.jsx';
import Drawer from './Drawer.jsx';
import Heading from './Heading.jsx';
import Image from './Image.jsx';
import Main from './Main.jsx';
import Paragraph from './Paragraph.jsx';
import Section from './Section.jsx';


const App = () => {
  return (
    <>
      <Header
        fonte='font-figtree'
        corFundo='bg-black'
        corFonte='text-white'
        preenchimento='px-[12.5rem]'
      >
        <Nav
          altura='h-[6rem]'
          modeloCaixa='flex'
          justificacao='justify-between'
          alinhamento='items-center'
        >
          <Link
            referencia='#'
            texto='bicarte'
            tamanhoFonte='text-5xl'
            pesoFonte='font-black'
            caixaFonte='uppercase'
            espacamentoFonte='tracking-[.25rem]'
          />
          <List
            modeloCaixa='flex'
            brecha='gap-[2.5rem]'
          >
            <Item>
              <Link
                referencia='#'
                texto='modelos'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                planagem='hover:text-yellow-400'
                transicao='duration-200'
              />
            </Item>
            <Item>
              <Link
                referencia='#'
                texto='contato'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                planagem='hover:text-yellow-400'
                transicao='duration-300'
              />
            </Item>
            <Item>
              <Link
                referencia='#'
                texto='sobre'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                planagem='hover:text-yellow-400'
                transicao='duration-300'
              />
            </Item>
          </List>
        </Nav>
      </Header>
      <Main>
        
      </Main>
    </>
  );
}

export default App;
