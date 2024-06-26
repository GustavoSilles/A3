import React, { useEffect } from 'react';
import { PiFlag } from 'react-icons/pi';
import { TbDiamond, TbPointFilled } from 'react-icons/tb';
import { FaRegEye } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import './leiamais.css';

const Leiamais = ({ closeModal }) => {
  useEffect(() => {
    const adjustModalOverlayHeight = () => {
      const modalOverlay = document.querySelector('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.style.height = `${window.innerHeight}px`;
      }
    };

   
    window.addEventListener('resize', adjustModalOverlayHeight);
    window.addEventListener('load', adjustModalOverlayHeight);
    
    adjustModalOverlayHeight();

   
    return () => {
      window.removeEventListener('resize', adjustModalOverlayHeight);
      window.removeEventListener('load', adjustModalOverlayHeight);
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}><IoMdClose /></button>
        <h2>Missão, Visão e Valores</h2>
        <div className="content-section">
          <div className="icon-wrapper">
            <FaRegEye className="icon" />
          </div>
          <h3>Visão</h3>
          <p>Ser uma referência em informações e dados sobre a violência no Brasil, contribuindo para a redução desse problema social. Além de ser o provedor de informações uteis para estudos, leis e politicas publicas para a diminuição da violência e conscientização da população.</p>
        </div>
        <div className="content-section">
          <div className="icon-wrapper">
            <PiFlag className="icon" />
          </div>
          <h3>Missão</h3>
          <p>Enfrentar a violência no Brasil por meio de mecanismos de conscientização, informação e mobilização. O objetivo deste site é fornecer dados e informações para conscientizar, informar e mobilizar as pessoas em relação a esse problema nacional. Aqui você encontrará dashboards úteis para suas pesquisas sobre o assunto.</p>
        </div>
        <div className="content-section">
          <div className="icon-wrapper">
            <TbDiamond className="icon" />
          </div>
          <h3>Valores</h3>
          <div className="values-list">
            <div className="value-item"><TbPointFilled className="iconli" /> Transparência</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Compromisso Social</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Confiabilidade</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Educação</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Ética</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Justiça</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Honestidade</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Solidariedade</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Comprometimento</div>
            <div className="value-item"><TbPointFilled className="iconli" /> Despreconceito</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leiamais;
