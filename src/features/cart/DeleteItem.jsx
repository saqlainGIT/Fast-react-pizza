import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';

function DeleteItem({ name }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(name))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
