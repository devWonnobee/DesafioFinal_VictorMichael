import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import {
  filteredFoods,
  selectFood,
} from "../../store/actions/food.action";
import { useDispatch, useSelector } from "react-redux";

import { FoodItem } from "../../components";
import { styles } from './styles';

const MenuList = ({ navigation }) => {
  const dispatch = useDispatch();
  const filterFoods = useSelector((state) => state.food.filteredFoods);
  const category = useSelector((state) => state.category.selected);

  useEffect(() => {
    dispatch(filteredFoods(category.id));
  }, []);
  
  const onSelected = (item) => {
    dispatch(selectFood(item.id));
    navigation.navigate("FoodDetails", {
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <FoodItem item={item} onSelected={onSelected} />
  );
  return(
    <View style={styles.container}> 
      <FlatList
        data={filterFoods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default MenuList;