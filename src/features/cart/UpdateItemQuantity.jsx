import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ name, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 sm:gap-8 md:gap-3">
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(name))}>
        +
      </Button>
      <span className="flex items-center text-sm font-medium">
        {currentQuantity}
      </span>
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(name))}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
