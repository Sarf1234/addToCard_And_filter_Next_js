import ProductPage from "../components/ProductPage";
import { AllProductDAta, ColorDAta, ProductMaterial } from '../utils/ApiCallsData'

export default async function  Home() {
  const productdata = await AllProductDAta()
  const colors = await ColorDAta()
  const productmaterial = await ProductMaterial()
 
  return (
    <>
      <ProductPage product={productdata} colors={colors} productmaterial={productmaterial}/>
    </>
  );
}
