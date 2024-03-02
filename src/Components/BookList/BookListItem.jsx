import {} from 'react-bootstrap'
import classes from './BookList.module.css';

const BookListItem = ({ book, addToCart}) => {
  const {imgUrl, id, title, price, author} = book;
  const onAddToCart () => addToCart(id)

  return (
    <div className={classes.list_item}>
      <div className={classes.list_item_cover}>
        <img src={imgUrl} alt='book' />
      </div>

      <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}</div>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default BookListItem