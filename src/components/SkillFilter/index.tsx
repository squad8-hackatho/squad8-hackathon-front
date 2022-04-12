import React, { useState } from 'react';
import { NewDropdown } from '../NewDropdown';
import { Background, ModalContent, ModalWrapper } from './styles';

type Props = {
  showFilterModal: boolean;
  setShowFilterModal: Function;
  setSelectedSkillsToFilter: Function;
};

export function SkillFilter({
  showFilterModal,
  setShowFilterModal,
  setSelectedSkillsToFilter,
}: Props) {
  const [skill1, setSkill1] = useState({ area: '' });
  const [skill2, setSkill2] = useState({ area: '' });

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
              <h2>Filtrar por:</h2>
              <h3>Escolha a primeira habilidade:</h3>
              <NewDropdown techFilter={skill1} setTechFilter={setSkill1} />

              <h3>Escolha a segunda habilidade:</h3>
              <NewDropdown techFilter={skill2} setTechFilter={setSkill2} />
              <button type="button" onClick={handleFilterClick}>
                Filtrar
              </button>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
}
