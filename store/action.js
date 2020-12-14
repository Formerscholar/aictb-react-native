import {
  GetListAction,
} from './actionCreators'

const mapStateToProps = (state) => {
  const { homeInfo } = state
  return {
    homeInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetListData(value) {
      const action = GetListAction(value)
      dispatch(action)
    }
  }
}

export { mapStateToProps, mapDispatchToProps }
