// import '../App.css';
// import '/Featured.css';
// import ProductDesc from "./ProductDesc";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function ProductList({ product, addToCart }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await getProducts();
  //       setProduct(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  // const value = { product };
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <Card className="mt-6 w-96">
            <CardHeader
              color="blue-gray"
              className="relative h-56"
              onClick={(e) => navigate("/productDesc")}
            >
              <img
                src={productItem.url}
                alt="img-blur-shadow"
                layout="fill"
                className="object-cover w-full h-full"
                style={{ aspectRatio: "1/1" }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {productItem.name}
              </Typography>
              <Typography>{productItem.price}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => addToCart(productItem)}>
                add to cart
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductList;
