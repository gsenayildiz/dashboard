"use client";

import { Order } from "@/types";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const Graph = ({ data }: { data: Order[] }) => {
    console.log(data);
// grafik kütüphanesinin istediği veri formatı
    const gData = {
        labels: data.map((i => i.order_date)),

        datasets: [
            {
                id: 1,
                label: "Fiyat",
                data: data.map((i) => i.total_price),
            },
        ],
    };
    
    return (
        <Line data={gData} />
    )
}

export default Graph;
