import ProductPage from "../../components/ProductPage";
import { FeatureProductDAta, ColorDAta, ProductMaterial } from '../../utils/ApiCallsData'

const page = async() => {
    const productdata = await FeatureProductDAta()
    const colors = await ColorDAta()
    const productmaterial = await ProductMaterial()
   
    return (
      <>
        <ProductPage product={productdata} colors={colors} productmaterial={productmaterial}/>
      </>
    );
}

export default page
