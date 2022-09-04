import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  safeAreaStyles: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
  },

  scrollView__container: {
    paddingHorizontal: 20,
  },

  heading__text: {
    fontSize: 20,
  },
  bold: {
    fontWeight: '800',
  },
  errorFont: {
    color: 'white',
    fontSize: 12,
    backgroundColor: '#BC4A3C',
    alignSelf: 'flex-start',
  },
  input__parent: {
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },

  boxWithShadow: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 13,
    elevation: 12,
  },
  outOfStockMsg: {
    fontSize: 11,
    color: 'red',
  },
  input__inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  input__hr: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },

  input__err: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },

  err__msg: {
    marginTop: 3,
    fontSize: 11,
    color: 'red',
  },

  input__icon: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexBasis: 20,
  },

  btn: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },

  btn__text: {
    color: 'black',
    fontWeight: '700',
  },

  btn__white: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
  },

  btn__whiteText: {
    color: 'white',
    fontWeight: '700',
  },

  alignHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  alignTopIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  alignFlexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linearGradient: {
    padding: 25,
    opacity: 0.4,
    marginBottom: -20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
  },
  cardStyle: {
    height: 125,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {height: 125, resizeMode: 'contain'},
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 10,
  },
  animatedStyle: {
    top: 5,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
});
