import React, { useState } from 'react';
import InfoIcon from '@/assets/images/icons/info.svg';


export const InfoTooltip: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleTooltip = () => setVisible(!visible);

  return (
    <div
      className="info-tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={toggleTooltip}
    >
      <InfoIcon className="info-icon" />
      {visible && (
        <div className="tooltip-box">
          <div className="tooltip-title">
            CAC
          </div>
          <div className="tooltip-text">
            how much an organization spends to acquire new customers.
          </div>
        </div>
      )}
    </div>
  );
};
