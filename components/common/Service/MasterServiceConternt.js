import React from "react";
import { useTranslation } from "react-i18next";

const MasterServiceContent = ({
  link,
  title,
  service,
  marijuana,
  lastChild,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${!marijuana ? "media" : ""} ${lastChild ? "border-0 m-0" : ""
        }`}
    >
      <div dangerouslySetInnerHTML={{ __html: link }} />
      <div className="media-body">
        <h4>{t(title)}</h4>
        <p>{t(service)}</p>
      </div>
    </div>
  );
};

export default MasterServiceContent;
