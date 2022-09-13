import { connect } from 'react-redux'
import Home1 from "../Components/Home1";
import { Addtocart,RemovetoCart } from '../Service1/Action1/Actionnew'

const mapStateToProps = state => ({
    data: state.Carditem
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(Addtocart(data)),
    removeToCartHandler: data=>dispatch (RemovetoCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home1)





//export default Home1;