import React from "react";
import CardTemplate from "../cards/CardTemplate";
import PROGRESS_BAR_COLORS from "../progressBars/colors";

const mapTenCards = data => {
  return data.slice(0, 10).map(data => mapCard(data, "card", "Release funds"));
};

const mapCard = (data, componentType, buttonText) => {
  return (
    <CardTemplate
      {...{
        id: data.id,
        componentType: componentType,
        imageUrl: data.image_url ? data.image_url : null,
        title: data.name,
        description: data.description,
        status: data.status,
        balance: `£ ${data.balance}.00`, // sloppy. change this later.
        amount: `£ ${data.amount}.00`, // sloppy. change this later.
        breadcrumbButton: true,
        progress: data.percentage * 100,
        progressFilledColor: PROGRESS_BAR_COLORS,
        bottomText: data.date ? new Date(data.date).toDateString() : null,
        buttonText: buttonText
      }}
    />
  );
};

export { mapTenCards, mapCard };
