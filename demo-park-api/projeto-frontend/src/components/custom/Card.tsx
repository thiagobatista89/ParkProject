import { Album } from "lucide-react";
import money from "../../assets/money.svg";


export function Cards() {
  return (
    <div className="flex gap-3">
    <div className="flex items-center bg-white h-[88px] w-[237px] rounded-lg mt-10">
        <div className="mb-4">
            <img src="../../assets/album.svg" alt="Disc" className="rounded-[30px] bg-black h-[40px] w-[40px] mx-4" />
        </div>
        <div>
            <h2 className="text-black font-semibold text-[14px]">Total de Albuns</h2>
            <p className="text-black text-[26px]">5</p>
        </div>
    </div>
      <div className="flex items-center bg-white h-[88px] w-[237px] rounded-lg mt-10">
        <div className="mb-4">
          <img src={money} alt="Disc" className="rounded-[30px] h-[40px] w-[40px] mx-4" />
        </div>
        <div>
          <h2 className="text-black font-semibold text-[14px]">Valor Investido</h2>
          <p className="text-black text-[26px]">R$ 5</p>
        </div>
      </div>
    </div>
  );
}