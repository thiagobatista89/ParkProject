import { Cards } from "@/components/custom/Card";
import { Header } from "@/components/custom/Header";
import albums from "../../utils/albums.json";

export function Discs() {
  return (
    <div className="bg-base w-full h-full min-h-screen pb-10">
      <Header isAuth={true}/>
      <div className="m-20">
        <h2 className="text-white text-3xl ml-16">Meus Discos</h2>
        <div className="ml-12">
          <Cards />
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          { albums?.map((album, i) => (
              <div key={i}>
                <div style={{'--bg-fundo': `url(${album.images[0]})`} as React.CSSProperties} className="bg-[image:var(--bg-fundo)] bg-cover bg-no-repeat w-[220px] h-[220px] rounded-md hover:scale-[1.15] transition">
                  <div className="flex flex-col h-full justify-center items-center backdrop-brightness-50 shadow-white">
                    <h1 className="text-2xl font-semibold text-center text-white mb-[70px] pt-[90px]">{album.name}</h1>
                    <div className="flex justify-between items-center w-full mb-2">
                      <div></div>
                      <h1 className="text-2xl font-semibold text-center text-white mr-4">R$ {album.value}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}