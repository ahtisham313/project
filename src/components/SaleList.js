import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function SaleList({ product, addToCart }) {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <Card className="w-96">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-96"
              onClick={(e) => navigate("/product-desc")}
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
              <div className="flex items-center justify-between mb-2">
                <Typography color="blue-gray" className="font-medium">
                  {productItem.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {productItem.price}
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                onClick={() => addToCart(productItem)}
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default SaleList;
