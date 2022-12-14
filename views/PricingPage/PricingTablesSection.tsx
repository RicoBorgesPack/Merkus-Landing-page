import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Os melhores planos para lojistas de todos os tamanhos</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Plano Basic"
          description="Gratuito, o melhor para lojistas que estão começando"
          benefits={['3 usuários', '50 produtos', '5 mil visualizações por mes', 'Funcionalidades básicas']}
        >
          R$0<span>/mês</span>
        </PricingCard>
        <PricingCard
          title="Plano Growth"
          description="Para lojistas que buscam aumentar as vendas digitais"
          benefits={['8 usuários', '100 produtos', '15 mil visualizações por mes', 'Melhor gestão de conteúdo', 'Gestão de franquias', 'Analise de dados precisa']}
          isOutlined
        >
          R$24<span>/mês</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
/*<PricingCard
          title="Plano corporate"
          description="Grandes varejistas que querem uma grande expansão"
          benefits={[
            'usuários ilimitados',
            'produtos ilimitados',
            'visualizações ilimitadas',
            'Código-fonte aberto',
            'Equipe de marketing exclusiva',
            'Password protection',
            'Customization',
          ]}
        >
          <span>Pague o quanto usar</span>
        </PricingCard>*/
