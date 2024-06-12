import { useAppSelector } from '../../store';
import { selectMidInventory } from '../../store/inventory';
import InventoryPed from './InventoryPed';

const MidInventory: React.FC = () => {
  const midInventory = useAppSelector(selectMidInventory);
  
  return <InventoryPed inventory={midInventory} />;
};

export default MidInventory;
