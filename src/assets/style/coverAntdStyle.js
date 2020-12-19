import InputItemStyle from '@ant-design/react-native/lib/input-item/style/index';

import listStyle from '@ant-design/react-native/lib/list/style/index'

export default {
  newInputStyle: {
    ...InputItemStyle,
    container: {
      ...InputItemStyle.container,
      borderBottomWidth: 0,
      marginLeft: 0,
      paddingRight: 0,
    },
  },
  newListStyle: {
    ...listStyle,
    Body: {
      ...listStyle.Body,
      borderTopWidth: 0,
      backgroundColor: '#FAFAFA',
    },
    BodyBottomLine: {
      ...listStyle.BodyBottomLine,
      borderBottomWidth: 0,
    }
  }
};
