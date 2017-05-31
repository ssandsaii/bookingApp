import { StyleSheet,Dimensions } from 'react-native';

var {height,width} = Dimensions.get('window');
const blue = '#90caf9';
const navy = '#1a237e';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
     padding: 40,
    // backgroundColor: 'transparent',
  },
  backgroundImage:{
    flex: 1,
     width: null,
     height: null,
     backgroundColor: 'transparent',
     justifyContent: 'center',
     alignItems: 'center'
   },
  input: {
    backgroundColor: white,
    height: 50,
    width: 300,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: '#ffdf49',
    justifyContent: 'center',
    height: 50,
    width: 300,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2
  },
  buttonSignOut: {
    backgroundColor: '#ffdf49',
    justifyContent: 'center',
    height: 50,
    width : 200,
    padding:10,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    alignItems:'center'
  },
  button: {
    textAlign: 'center'
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    color: white,
    textAlign: 'center'
  },
  feedback: {
    textAlign: 'center',
    color: '#ff0000'
  },

  // section
  flexContainer: {
    flex: 1,
    backgroundColor: '#203a49',
  },
  header: {
    height: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#203a49'
  },
  body: {
    flex: 24,
    paddingRight: 20,
    paddingLeft: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: white
  },

  //list section
  list: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    padding: 10
  },
  rowTitle: {
    fontWeight: 'bold'
  },

  //details section
  detailTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  detailSubtitle: {
    textAlign: 'center',
    fontSize: 14
  },
  comment: {
    color: '#777'
  },
  imageHeader: {
    height:200,
    width: 400,
  },
  bodyImage:{
    width:400,
    height:200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexContainer2: {
    flex: 1,
    backgroundColor: '#203a49',
    padding: 50,
    justifyContent: 'center',
  },
  tutorroomtext :{
    color: '#ffffff',
    fontSize: 50,
    textAlign: 'center'
  },
  tutorroomimage :{
    height:120,
    width: 300,
    alignItems: 'center'
  },
  welcomeText :{
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center'
  },
  tutorroomtexttile:{
    color : '#ffffff',
    fontSize:20,
    textAlign: 'center'
  },

  tutorroomtexttile2:{
    color : '#ffffff',
    fontSize:15,
    textAlign: 'center'
  },
  imageLogo:{
    alignItems:'center',
    justifyContent:'center',
    height : 300,
    width : 320
  },
  link3:{
    color: black,
    textAlign: 'center'

  }
})
