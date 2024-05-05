import { stockAPIInfo } from "@/lib/types/types";
import React from "react";
import InfoBox from "./InfoBox";

type InfoBoxListProps = {
  otherInfo: stockAPIInfo | null;
  currentPrice: number | null;
};

const InfoBoxList = ({ otherInfo, currentPrice }: InfoBoxListProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {currentPrice ? (
        <InfoBox title={`current price`} value={currentPrice} />
      ) : null}
      {otherInfo
        ? Object.entries(otherInfo).map(([key, value]) => (
            <div key={value}>
              <InfoBox title={key} value={value} />
            </div>
          ))
        : null}
    </div>
  );
};

export default InfoBoxList;
