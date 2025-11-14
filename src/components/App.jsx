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
        corTexto='text-white'
        espacamento='px-[12.5rem]'
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
        <Section
          corFundo='bg-black'
          altura='h-[37.5rem]'
          espacamento='px-50'
          modeloCaixa='flex'
          corTexto='text-white'
          >
          <Box
            largura='w-[50%]'
          >
            <Heading
              tamanhoFonte='text-[4rem]'
              pesoFonte='font-bold'
            >
              Bicicletas feitas sob medida<Drawer texto='.' corTexto='text-yellow-500'/>
            </Heading>
            <Paragraph
              texto='Bicicletas elétricas de alta precisão e qualidade, 
              feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.'
              tamanhoFonte='text-[1.35rem]'
            />
            <Button />
          </Box>
          <Box
            largura='w-[50%]'
          >
            <Image 
              fonte='https://www.origamid.com/projetos/bikcraft/img/fotos/introducao.jpg'
            />
          </Box>
        </Section>
      </Main>
    </>
  );
}

export default App;
