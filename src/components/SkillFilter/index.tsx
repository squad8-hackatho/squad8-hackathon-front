import React from 'react';
import { RiEqualizerFill } from 'react-icons/ri';
import { NewDropdown } from '../Dropdown';
import {
  Background,
  ButtonModalFilter,
  ButtonWrapper,
  CloseModalFilter,
  HeaderModalFilter,
  ModalContent,
  ModalWrapper,
  TitleModalFilter,
  WrapperForm,
} from './styles';

type Props = {
  showFilterModal: boolean;
  setShowFilterModal: Function;
  setSelectedSkillsToFilter: Function;
  skill1: any;
  setSkill1: Function;
  skill2: any;
  setSkill2: Function;
};

export function SkillFilter({
  showFilterModal,
  setShowFilterModal,
  setSelectedSkillsToFilter,
  skill1,
  setSkill1,
  skill2,
  setSkill2,
}: Props) {
  function handleFilterClick() {
    setSelectedSkillsToFilter([skill1, skill2]);
    setShowFilterModal(false);
  }

  return (
    <div>
      {showFilterModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <HeaderModalFilter>
                <TitleModalFilter>
                  <RiEqualizerFill size={32} />
                  <h2>Filtrar por:</h2>
                </TitleModalFilter>
                <CloseModalFilter
                  size={40}
                  onClick={() => {
                    return setShowFilterModal(false);
                  }}
                />
              </HeaderModalFilter>

              <WrapperForm>
                <h3>Escolha a primeira habilidade:</h3>
                <NewDropdown techFilter={skill1} setTechFilter={setSkill1} />

                <h3>Escolha a segunda habilidade:</h3>
                <NewDropdown techFilter={skill2} setTechFilter={setSkill2} />
                <ButtonWrapper>
                  <ButtonModalFilter
                    onClick={() => {
                      handleFilterClick();
                    }}
                  >
                    Filtrar
                  </ButtonModalFilter>
                </ButtonWrapper>
              </WrapperForm>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
}
