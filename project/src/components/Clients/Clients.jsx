import React from "react";
import { ClientColumn, ClientImgWrapper, ClientWrapper } from "./ClientStyle";
import { RowDisplayWrapper } from "../StyleJS/StyleJS";
import SectionTitle from "../SectionTitle/SectionTitle";
import paymoImg from "../../assets/img/resume/clients/paymo.jpg";

const Clients = () => {
  return (
    <ClientWrapper>
      <SectionTitle title="Clients" />
      <RowDisplayWrapper>
        <ClientColumn>
          <ClientImgWrapper>
            <img src={paymoImg} />
          </ClientImgWrapper>
        </ClientColumn>
        <ClientColumn>
          <ClientImgWrapper>
            <img src={paymoImg} />
          </ClientImgWrapper>
        </ClientColumn>
        <ClientColumn>
          <ClientImgWrapper>
            <img src={paymoImg} />
          </ClientImgWrapper>
        </ClientColumn>
        <ClientColumn>
          <ClientImgWrapper>
            <img src={paymoImg} />
          </ClientImgWrapper>
        </ClientColumn>
      </RowDisplayWrapper>
    </ClientWrapper>
  );
};

export default Clients;
