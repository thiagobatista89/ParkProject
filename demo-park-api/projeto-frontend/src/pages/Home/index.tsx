import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/custom/Header';

export function Home() {
  const _navigate = useNavigate();
  return (
    <>
      <div className="bg-fundo bg-cover bg-no-repeat">
        <section className="flex flex-wrap h-screen gap-4 backdrop-brightness-50">
          <Header />
          <main className='flex flex-col items-start max-w-[800px] gap-8 pl-[100px]'>
            <div className='gap-6'>
                <h1 className='text-white font-semibold text-[64px]'>A história da música não pode ser esquecida!</h1>
                <h3 className='text-white text-2xl max-w-[633px]'>Crie já sua conta e curta os sucessos que marcaram os tempos no Vinil.</h3>
            </div>
            <Button onClick={() => _navigate('/signup')} className="text-black bg-sysmapLight font-semibold text-2xl rounded-[32px] h-16 w-[269px]">Inscrever-se</Button>
          </main>
        </section>
      </div>
    </>
)}