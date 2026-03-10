import { useEffect, useState } from "react";
import type { Pizza } from "../type/Pizza";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const Cart = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]"),
  );

  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/pizza")
      .then((res) => setPizzak(res.data))
      .catch(() => toast.error("Sikertelen megjelenítés"));
  });

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  return <></>;
};

export default Cart;
