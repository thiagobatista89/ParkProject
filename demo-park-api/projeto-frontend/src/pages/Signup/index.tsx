import React, { FormEvent, useState } from 'react'
import Input from '../../components/Input'
import { user_api } from '../../services/apiService'
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSigup(event : FormEvent) {
    setLoading(true);
    const toastId = toast.loading("Criando conta...");
    event.preventDefault();

    const data = {
      name,
      email,
      tel,
      password
    };

    console.log(data);

    await user_api.post("/api/v1/users/create", data)
    .then(resp => {
      console.log(resp.data);
      toast.dismiss(toastId);
      toast.success("Conta criada com sucesso!");
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      toast.error("Erro ao criar conta!");
      console.log(err);
    });
  }

  return (
    <div className="w-full h-screen  bg-fundo bg-cover bg-no-repeat ">
      <div className='flex items-center justify-center h-full w-full backdrop-brightness-50 backdrop-blur-sm'>
        <div className="flex flex-col bg-white rounded-md h-fit w-full max-w-[320px] items-center p-10 shadow-md ">
          <h1 className="text-2xl font-bold">Inscreva-se</h1>
          <form onSubmit={handleSigup} className="flex flex-col w-full mt-8 gap-2">
            <Input type='text' onChange={event => setName(event.target.value)}>Nome</Input>
            <Input type='email' required onChange={event => setEmail(event.target.value)}>Email</Input>
            <Input type='tel' onChange={event => setTel(event.target.value)}>Telefone</Input>
            <Input type='password' required onChange={event => setPassword(event.target.value)}>Senha</Input>

            { loading ? 
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando...
              </Button>
              :
              <Button type='submit' disabled={false} className="bg-zinc-900 text-white hover:bg-zinc-900/75 transition">
                Inscrever-se
              </Button>
            }
          </form>
        </div>
      </div>
    </div>
  )
}