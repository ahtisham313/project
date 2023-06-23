import React from "react";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import CartList from "./components/CartList";
// import "./Checkout.css"; // Import custom CSS file

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
}

export default function CheckOut() {
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  return (
    <div className="checkout-container">
      <div className="cards-container">
        <Card className="w-full max-w-[24rem]">
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
          >
            <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
              <BanknotesIcon className="h-10 w-10" />
            </div>
            <Typography variant="h4" color="white">
              Material Tailwind PRO
            </Typography>
          </CardHeader>
          <CardBody>
            <Tabs value={type} className="overflow-visible">
              <TabsHeader className="relative z-0 flex">
                <Tab
                  value="card"
                  onClick={() => setType("card")}
                  className={`${
                    type === "card" ? "bg-blue-500" : "bg-gray-200"
                  } text-white hover:bg-blue-500 hover:text-white px-6 py-3 cursor-pointer transition duration-300`}
                >
                  Pay with Card
                </Tab>
                <Tab
                  value="paypal"
                  onClick={() => setType("paypal")}
                  className={`${
                    type === "paypal" ? "bg-blue-500" : "bg-gray-200"
                  } text-white hover:bg-blue-500 hover:text-white px-6 py-3 cursor-pointer transition duration-300`}
                >
                  Pay with PayPal
                </Tab>
              </TabsHeader>
              <TabsBody className="relative">
                <TabPanel value="card">
                  <div className="grid gap-4">
                    <Input
                      type="text"
                      placeholder="Card Number"
                      value={formatCardNumber(cardNumber)}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full"
                      icon={<CreditCardIcon className="h-6 w-6" />}
                    />
                    <Input
                      type="text"
                      placeholder="Expires"
                      value={formatExpires(cardExpires)}
                      onChange={(e) => setCardExpires(e.target.value)}
                      className="w-full"
                      icon={<LockClosedIcon className="h-6 w-6" />}
                    />
                    <Input
                      type="text"
                      placeholder="CVC"
                      className="w-full"
                      icon={<LockClosedIcon className="h-6 w-6" />}
                    />
                    <div className="flex items-center">
                      <Button color="blue">Pay Now</Button>
                      <Typography variant="body2" color="gray" className="ml-2">
                        or{" "}
                        <a href="/" className="underline">
                          Cancel
                        </a>
                      </Typography>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="paypal">
                  <div className="grid gap-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      icon={<CreditCardIcon className="h-6 w-6" />}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      icon={<LockClosedIcon className="h-6 w-6" />}
                    />
                    <Select
                      className="w-full"
                      defaultValue=""
                      icon={<BanknotesIcon className="h-6 w-6" />}
                    >
                      <Option value="" disabled>
                        Select Country
                      </Option>
                      {countries.map((country) => (
                        <Option key={country.code} value={country.code}>
                          {country.name}
                        </Option>
                      ))}
                    </Select>
                    <div className="flex items-center">
                      <Button color="blue">Pay Now</Button>
                      <Typography variant="body2" color="gray" className="ml-2">
                        or{" "}
                        <a href="/" className="underline">
                          Cancel
                        </a>
                      </Typography>
                    </div>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
      <div className="cart-container">
        <CartList />
      </div>
    </div>
  );
}
