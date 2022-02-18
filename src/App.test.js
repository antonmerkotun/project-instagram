import {shallow} from 'enzyme'
import {Provider} from "react-redux";
import App from './App'
import {store} from "./redux/store";

//    https://jestjs.io/ru/docs/expect


test('App should render something', () => {
    const wrapper = shallow(<Provider store={store}><App/></Provider>)

    expect(wrapper.isEmptyRender()).toBe(false)
})