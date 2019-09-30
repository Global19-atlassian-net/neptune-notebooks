import React from 'react';
import Toast from 'common/components/toast/Toast';
import {Em} from './em/Em';

export const UpgradeAvailableNotification: React.FC = () => {
  return (
    <Toast
      type="info"
    >
      <p>New version of neptune-notebooks is now available! To upgrade, use this command:</p>
      <p><Em monospace>pip install -U neptune-notebooks</Em></p>
    </Toast>
  );
};
