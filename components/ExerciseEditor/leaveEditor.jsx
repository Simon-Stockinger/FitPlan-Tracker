const leaveEditor = (navigation) => {
  navigation.reset({ index: 0, routes: [{ name: 'Training Week' }] });
};

export default leaveEditor;
