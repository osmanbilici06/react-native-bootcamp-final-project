import { StyleSheet } from 'react-native';

const PastStyle = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(240, 240, 240, 0.7)',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  coverImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    
  },
});

export default PastStyle;
