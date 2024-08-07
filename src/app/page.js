import Navbar from "../components/Navbar";
import ServiceBanner from "../components/ServiceBanner";
import ProductPage from "../components/ProductPage";
import { fetchData, ColorDAta, ProductMaterial } from '../utils/ApiCallsData'

export default async function  Home() {
  const productdata = await fetchData()
  const colors = await ColorDAta()
  const productmaterial = await ProductMaterial()
 
  return (
    <>
      <Navbar />
      <ServiceBanner />
      <ProductPage product={productdata} colors={colors} productmaterial={productmaterial}/>
    </>
  );
}
