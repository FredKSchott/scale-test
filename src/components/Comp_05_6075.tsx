// Comp_05_6075
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_6075: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_6075
      <div>
      
        </div>
      </div>;
};

export default Comp_05_6075;