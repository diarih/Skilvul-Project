import { CardContainer, CardImage, CardBody, CardProductName, CardPrice } from './styles/Card';

import Button from './Button';


const Card = (props) => {
  console.log(props);
  return (
    <CardContainer width="500px">
      <CardImage src={props.img} />
      <CardBody>
        <CardPrice>{props.price}</CardPrice>
        <CardProductName>{props.name}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
