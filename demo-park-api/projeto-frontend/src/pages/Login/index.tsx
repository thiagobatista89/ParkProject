import React, { FormEvent, useState } from 'react'
import logo from '../../assets/logo.svg';
import Input from '../../components/Input'
import { useAuth } from '@/hooks/UseAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const _navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    login(email, password)
    .then(() => { 
      toast.success("Login efetuado com sucesso!");
      
      setTimeout(() => {
        _navigate('/dashboard');
      }, 2000);

    }).catch(() => {
      setLoading(false);
      toast.error("Erro ao efetuar login!");
    });
  }

  return (
    <>
      {isAuthenticated && <Navigate to='page01' />}
      <div className="bg-fundo bg-cover bg-no-repeat h-screen">
        <div className="flex items-center justify-center h-screen backdrop-brightness-50 backdrop-blur-sm">
          {/* Container */}
          <div className="flex max-w-[544px] bg-white p-10 rounded-md">
            <div className="flex flex-col items-center w-full gap-2">
              <img src={logo} className="h-12" />
              <h1 className="text-xl font-semibold">Acesse sua conta</h1>
              {/* From */}
              <form onSubmit={handleLogin} className="flex flex-col w-72">
                <Input onChange={event => setEmail(event.target.value)} type='email' required>Email:</Input>
                <Input onChange={event => setPassword(event.target.value)} required type='password'>Senha:</Input>
                { loading ? 
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Carregando...
                  </Button>
                  :
                  <Button type='submit' disabled={false} className="bg-zinc-900 text-white hover:bg-zinc-900/75 transition mt-3">
                    Entrar
                  </Button>
                }   
              </form>
              <p className="text-xs font-light">Ainda não tem conta ? <a href="/signup" className="font-semibold underline">Inscrever-se</a></p>
              {/* From */}
            </div>
          </div>
          {/* Container */}
        </div>
      </div>
    </>
  )
}