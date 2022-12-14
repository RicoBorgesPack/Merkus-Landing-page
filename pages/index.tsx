import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Mais que uma plataforma de Ecommerce, é uma solução completa."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          
          <BasicSection imageUrl="/demo-illustration-1.svg" title="A melhor solução para sua franquia." overTitle="Um sistema integrado">
            <p>
              Nossa plataforma além de entregar um ecommerce que atende suas necessidades e diversas integrações, ajudamos as franquias a se posicionar nas vendas online.{' '}
              <Link href="/help-center">Nós integramos todos os seus canais de venda, tanto o site quanto as midias sociais, marketplaces e as inumeras lojas fisicas que o varejista possuir</Link> 
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <Features />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
/*<BasicSection imageUrl="/demo-illustration-2.svg" title="Além de produtos, possuimos serviços." overTitle="Mais que uma consultoria" reversed>
<p>
Para franquias grandes, possuimos consultorias para areas como Marketing digital,desenvolvimento e operações de TI, expansão de negócios  e melhoria de processos{' '}
<strong>Buscamos entender as dores e objetivos de clientes e com isso entregar o melhor resultado</strong>
</p>

</BasicSection>*/