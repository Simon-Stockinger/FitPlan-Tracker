// 3rd party imports

import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';

const HorizontalSwipeListItem = ({ item, itemWidth }) => {
  return <View style={{ width: itemWidth }}>{item}</View>;
};

const HorizontalSwipeList = ({ data }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const listRef = useRef(null);

  const renderItem = ({ item }) => (
    <HorizontalSwipeListItem item={item} itemWidth={containerWidth} />
  );

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={containerWidth} // Set snapToInterval to the container width
      snapToAlignment="center"
      decelerationRate="fast"
      contentContainerStyle={{ width: containerWidth * data.length }}
      onLayout={onLayout}
    />
  );
};

export default HorizontalSwipeList;
