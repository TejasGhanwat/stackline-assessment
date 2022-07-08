import ProductDetails from '../../../components/ProductDetails';
import './styles.css'

function Sidebar(props: any) {
    return (
        <div className= "sta-sidebar">
            <ProductDetails data={props.data}/>
        </div>
    );
}

export default Sidebar;