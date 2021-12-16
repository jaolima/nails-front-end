import React from "react";
import MasterServiceContent from "../../../components/common/Service/MasterServiceConternt";
import {
  svgFreeShipping,
  svgLowCost,
  svgFastEfficient,
  svgoffer,
  svgpayment,
} from "../../../services/script";
const Data = [
  {
    link: svgFreeShipping,
    title: "Express Shipping",
    service: "from Mon-Fri",
  },
  {
    link: svgLowCost,
    title: "Cheapest in",
    service: "Switzerland Prices",
  },
  {
    link: svgoffer,
    title: "Absolutely safe",
    service: "Payment Methods",
  },
  {
    link: svgFastEfficient,
    title: "Direct from the",
    service: "manufacturer einkaufen",
  },
  {
    link: svgpayment,
    title: "free shipping",
    service: "from CHF 100.-",
  },
];

const Service = () => {
  return (
    <div className="collection-filter-block">
      <div className="product-service">
        {Data.map((data, index) => {
          return (
            <MasterServiceContent
              key={index}
              link={data.link}
              title={data.title}
              service={data.service}
              lastChild={data.lastChild}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
