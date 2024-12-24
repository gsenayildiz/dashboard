import { TiHome } from "react-icons/ti";

import { FaUsers, FaHeart, FaBox, FaChartArea, FaDiceD6, FaCog, FaShareAlt } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";


export const sections = [
    {
        icon: <TiHome />,
        name: "Anasayfa",
        url: "/",
    },
    {
        icon: <FaDiceD6 />,
        name: "Ürünler",
        url: "/products",
    },
    {
        icon: <FaUsers />,
        name: "Kullanıcılar",
        url: "/users",
    },
    {
        icon: < IoIosPricetags />,
        name: "Siparişler",
        url: "/orders",
    },
    {
        icon: <FaHeart />,
        name: "Favoriler",
        url: "",
    },
    {
        icon: <FaBox />,
        name: "Envanter",
        url: ""
    },
    {
        icon: <FaShareAlt />,
        name: "Grafikler",
        url: "",
    },
    {
        icon: <FaCog />,
        name: "Ayarlar",
        url: "",
    }
];

export const inputs = [
    {
        label: "İsim",
        name: "name",
    },
    {
        label: "Marka",
        name: "brand",
    },
    {
        label: "Kategori",
        name: "category",
    },
    {
        label: "Fiyat",
        name: "price",
        type: "number",
    },
    {
        label: "Stok",
        name: "stock",
        type: "number",
    },
    {
        label: "Açıklama",
        name: "description",
    },
];