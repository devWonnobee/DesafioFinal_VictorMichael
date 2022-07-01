import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AddItemModal } from '../../components';
import { addItem } from "../../store/actions/cart.action";
import { colors } from '../../constants/themes/colors';
import { styles } from './sytles';

const FoodDetails = ({ route }) => {
  
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food.selected);
  
  const onHandlerAddToCart = () => {
    dispatch(addItem(food));
    console.log("Hello, you added!");
  }

  const SetModal = () => (
    <AddItemModal food={food} onHandlerAddToCart={() => onHandlerAddToCart()} />
  );
  
  
  return(
    <View style={styles.container}>
      <View style={styles.details}>
      <Text style={styles.text}>id: {food.id}</Text>
        <Text style={styles.text}>{food.name}</Text>
        <Text style={styles.text}>{food.description}</Text>
        <Text style={styles.text}>{food.gluten}</Text>
        <Text style={styles.text}>{food.calories}</Text>
        <Text style={styles.text}>{food.price}</Text>
        <SetModal />
        
        {/* <Button 
          color={colors.primary}
          title="Add to cart"
          onPress={() => onHandlerAddToCart()}
        /> */}
        {/* <Image
          source={require({uri: food.img})}
        /> */}
      </View>
    </View>
  );
};

export default FoodDetails;