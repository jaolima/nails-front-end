import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Collapse, Input } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";
import { useTranslation } from "react-i18next";
const GET_SIZE = gql`
  query getSize($type: String) {
    getSize(type: $type) {
      size
    }
  }
`;

const Size = () => {
      const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(FilterContext);
  const isChecked = context.isChecked;
  const filterChecked = context.filterChecked;
  const toggle = () => setIsOpen(!isOpen);

  var { loading, data } = useQuery(GET_SIZE, {
    variables: {
      type: context.state,
    },
  });

  return (
    <div className="collection-collapse-block border-0 open">
      <h3 className="collapse-block-title" onClick={toggle}>
        {t('size')}
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="collection-size-filter">
            {!data || !data.getSize || data.getSize.length === 0 || loading
              ? "loading"
              : data &&
                data.getSize.size.map((size, index) => (
                  <div key={index}
                    className="custom-control custom-checkbox collection-filter-checkbox"
                    key={index}
                  >
                    <Input
                      checked={context.selectedSize.includes(size)}
                      onChange={() => {
                        context.handleSizes(size, isChecked);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id={size}
                    />

                    <label className="custom-control-label" htmlFor={size}>
                      {size}
                    </label>
                  </div>
                ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Size;
