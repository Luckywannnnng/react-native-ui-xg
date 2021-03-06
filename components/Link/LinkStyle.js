import StyleSheet from 'react-native-stylesheet-xg';

export const IMG = {
  skipIcon: 'data:image/png;base64,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'
};

const Style = StyleSheet.create({
  inputCon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderBottomColor: '#e5e5e5'
  },
  multiInputCon: {
    height: null,
    minHeight: 55,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  focus: {
    borderColor: '#ff9900'
  },
  error: {
    borderColor: '#ec5330'
  },
  disabled: {
    backgroundColor: '#e5e5e5'
  },
  input: {
    flex: 1,
    paddingLeft: 0,
    minHeight: 14,
    color: '#333',
    fontSize: 14
  },
  columnModeInput: {
    flex: null,
    marginTop: 4,
    marginBottom: 10
  },
  labelCon: {
    flexDirection: 'row',
    width: 90,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  columnModeLabelCon: {
    width: null,
    height: 35
  },
  label: {
    fontSize: 14,
    color: '#666'
  },
  lineBottom: {
    position: 'absolute',
    height: 2,
    bottom: -1,
    left: 0,
    right: 0,
    backgroundColor: '#ff9900'
  },
  lineError: {
    backgroundColor: '#ec5330'
  },
  tips: {
    flex: 1,
    marginTop: 1,
    marginLeft: 5,
    fontSize: 12,
    color: '#06c1ae'
  },
  required: {
    fontSize: 14,
    color: '#ec5330'
  },
  skipIcon: {
    width: 16,
    height: 16
  }
});

export default Style;

