import {StyleSheet, Dimensions, Platform} from 'react-native'

const {height, width} = Dimensions.get('screen');

export const Styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#4d94ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuIcon: {
    marginLeft: 10,
    color: 'white',
    fontSize: 24
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container : {
    marginHorizontal: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 20
  }

})