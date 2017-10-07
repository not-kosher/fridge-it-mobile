import React, { Component } from 'react';
import {
  Button,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'



class FridgeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.fridgeContainer}>
      <TouchableOpacity style={{flex: 1}} onPress={() => navigate('CategoryView', {category: 'frozen', backgroundColor: '#bad5dd'})}>
        <View style={styles.shelf}>
          <View style={{ ...styles.catergoryView, ...styles.frozenView}}>
              <Image
                style={styles.image}
                source={require('../images/frozen.png')}
              />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.shelf}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('CategoryView', {category: 'protein', backgroundColor: '#FC7E7E'})}>
          <View style={{...styles.catergoryView, ...styles.proteinView}}>
            <Image
              style={styles.image}
              source={require('../images/protein.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigate('CategoryView', {category: 'grains', backgroundColor: '#F2CC7B'})}>
          <View style={{...styles.catergoryView,...styles.grainsView}}>
            <Image
              style={styles.image}
              source={require('../images/grains.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{flex: 1}} onPress={() => navigate('CategoryView', {category: 'dairy', backgroundColor: '#A5C6EF'})}>
        <View style={styles.shelf}>
            <View style={{...styles.catergoryView, ...styles.dairyView}}>
              <Image
                style={styles.image}
                source={require('../images/dairy.png')}
              />
            </View>
        </View>
      </TouchableOpacity>
        <View style={styles.shelf}>
            <TouchableOpacity style={{flex: 2}} onPress={() => navigate('CategoryView', {category: 'produce', backgroundColor: '#A2D8C0'})}>
              <View style={{...styles.catergoryView, ...styles.produceView}}>
                <Image
                  style={styles.image}
                  source={require('../images/produce.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex: 1}} onPress={() => navigate('CategoryView', {category: 'misc', backgroundColor: '#e5a5c2'})}>
              <View style={{...styles.catergoryView, ...styles.miscView}}>
                <Image
                  style={styles.image}
                  source={require('../images/misc.png')}
                />
              </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  fridgeContainer: {flex: 1,
    alignContent: 'center',
    backgroundColor: 'white'
  },
  shelf: {
    flex: 1, 
    flexDirection: 'row',
  },
  image: {
    alignSelf: 'center',
    height: 115,
    width: 115, 
  },
  catergoryView: {
    flex: 1,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  frozenView: {
    flex: 1,
    // marginTop: 6,
    backgroundColor: '#bad5dd'
  },
  proteinView: {
    marginRight: 3,
    backgroundColor: '#FC7E7E'
  },
  grainsView: {
    marginLeft: 3,
    backgroundColor: '#F2CC7B'
  },
  dairyView: {
    backgroundColor: '#A5C6EF'
  },
  produceView: {
    marginRight: 3,
    backgroundColor: '#A2D8C0'
  },
  miscView: {
    marginLeft: 3,
    backgroundColor: '#e5a5c2'
  }
}

export default FridgeView;
