import Modal from "react-modal";
import teste from "../../assets/init_background.jpg";

interface Props {
  isOpen: boolean;
  title: string;
  value: number;
  onClose: () => void;
}

export function CustomModal({ isOpen, title, value, onClose }: Props) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      ariaHideApp={false}
      className="flex justify-center items-center border-none"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="flex bg-white w-[600px] h-[300px] rounded-[10px] shadow-[0px 2px 4px] shadow-black/10">
        <div className='h-full w-[280px] overflow-hidden'>
          <img src={teste} alt="Imagem" className="w-full h-full object-cover rounded-l-lg" />
        </div>
        <div className='flex flex-col w-[300px] items-center mx-2 justify-between'>
          <div className='flex my-1'>
            <h2 className="text-3xl w-[250px] my-5 ml-6 font-semibold text-center">{title}</h2>
            <button onClick={onClose} className="bg-gray-200/50 h-10 w-10 rounded-[30px] text-3xl">x</button>
          </div>
          <p className="text-gray-700 bg-white">Valor do álbum: R$ {value}</p>
          <button onClick={onClose} className="bg-customYellow text-white rounded-[30px] h-10 w-[260px] hover:bg-yellow-600 my-4">Comprar</button>
        </div>
      </div>
    </Modal>
  );
}