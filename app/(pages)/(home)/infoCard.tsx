import Image, { StaticImageData } from "next/image";

type Props = {
    label: string;
    icon: StaticImageData;
    value: number | string;
}


const InfoCard = ({ label, icon, value }: Props) => {
    return (
        <div className="bg-white rounded-lg p-3 flex justify-between items-center">
           <div>
            <h4 className="text-gray-700 whitespace-nowrap text-xs md:text-base">{label}</h4>
            <p className="font-bold text-xl md:text-2xl">{value.toLocaleString()}</p>
            </div>

            <Image className="size-14" src={icon} alt="icon"/>
        </div>
    )
}

export default InfoCard;
