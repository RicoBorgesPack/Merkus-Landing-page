import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Sistema CRM ',
    description:
      'Possuimos um sistema de gestão de clientes para que possa aprofundar a relação com o mesmo e gerar campanhas mais otimizadas',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Franquias integradas',
    description:
      'Com a Merkus, as lojas fisicas e o site estão interligados e são ajustados a sua necessidade, podendo incluse a loja receber comissão pela venda online',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Campanhas digitais',
    description:
      'Gerenciar campanhas de midias sociais nunca foi facil com a Merkus, possuimos um sistema que integra essas campanhas com as demandas dos CRMs de cada loja fisica',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Integrado a seus canais de venda',
    description:
      'Nosso sistema é Omnichannel, ou seja, todos os seus canais de venda são interligados, seja a loja fisica, midias sociais, ecommerce e marketplace',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Diversos meios de pagamento',
    description:
      'Aceitamos vários maneiras de pagamento para sua loja, PIX, cartão, Boleto, Paypal e Mercado pago',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Entrega de qualidade',
    description:
      'Voce pode entregar seu produto da forma que for melhor para ti, seja retirando na loja, ou enviando via Correios ou Loggi',
  }
];

export default function FeaturesPage() {
  return (
    <Page title="Funcionalidades" description="Veja como o Merkus pode impulsionar sua loja.">
      <Wrapper>
        <SectionTitle>Se interessou pela Merkus, clique para responder esse formulário</SectionTitle>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
