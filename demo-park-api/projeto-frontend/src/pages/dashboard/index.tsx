import { Header } from '@/components/custom/Header'
import './style.css'
import React, { useEffect, useState } from 'react';
// import { album_api } from '@/services/apiService';
// import { AlbumModel } from '@/models/AlbumModel';
import { CustomModal } from '@/components/custom/modal';
import albums from '../../utils/albums.json';

export function Dashboard() {
  // const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [albumModals, setAlbumModals] = useState<{ [key: string]: boolean }>({});

  const openModal = (albumName: string) => {
    setAlbumModals(prevState => ({ ...prevState, [albumName]: true }));
  };
  const closeModal = (albumName: string) => {
    setAlbumModals(prevState => ({ ...prevState, [albumName]: false }));
  };

  // useEffect(() => {
  //   album_api.defaults.headers.common.Authorization = "Basic YWx2ZXNyZW5hbnNhbnRvc0Bob3RtYWlsLmNvbTokMmEkMTAkZU5vblNhaDZHMGEvNnA2T2ZOVk1nZWUxRVlOY2RWOUZHQm5OaHp0azJhYU9odlg3OS80Slc"
  //   album_api.get('/albums/all?searchText=Neffex')
  //   .then((resp) => {
  //     setAlbums(resp.data);
  //     console.log(albums);
  //   })
  // }, []);

  return (
    <>
      <div className="bg-dashBackground bg-cover bg-no-repeat h-screen">
        <main className="flex flex-wrap gap-[130px] backdrop-brightness-50">
          <Header isAuth={true}/>
          <section className='flex flex-col items-start max-w-[504px] gap-8 ml-7'>
            <div className='gap-6'>
              <h1 className='text-white font-semibold text-[40px]'>A história da música não pode ser esquecida!</h1>
              <h3 className='text-white font-medium text-2xl max-w-[633px]'>Sucessos que marcaram o tempo.</h3>
            </div>
          </section>
          <section className='bg-gradient-to-b from-transparent to-base w-full h-[96px]'/>
        </main>
        <section className='bg-base w-full h-full px-[100px]'>
          <div className='flex flex-wrap'>
            PESQUISA
          </div>
          <div className='items-start'>
            <h1 className='font-bold text-5xl text-white'>Trends</h1>
            <div className="flex items-center justify-center h-[400px] relative overflow-hidden">
              <div className="carousel-home absolute left-0 flex items-center w-full">
                {albums.map((album, i) => (
                  <div key={i}>
                    <div className="pr-8">
                      <div style={{ '--bg-fundo': `url(${album.images[0]})` } as React.CSSProperties} className="bg-[image:var(--bg-fundo)] bg-cover bg-no-repeat w-[220px] h-[220px] rounded-md hover:scale-[1.15] transition">
                        <div onClick={() => openModal(album.name)} className="flex flex-col h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer">
                          <h1 className="text-2xl font-semibold text-center text-white">{album.name}</h1>
                          <h1 className="text-3xl font-bold">R$ {album.value}</h1>
                        </div>
                      </div>
                      {albumModals[album.name] && (
                        <div><CustomModal isOpen={true} title={album.name} value={album.value} onClose={() => closeModal(album.name)} /></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
)


}

{/* <div onClick={() => _navegate(album.url)} className="flex h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer"> */}