'use client';
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa6';
import { MdPassword } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

export default function CardAcess() {
	const [isRegister, setRegister] = useState(false);
	if (!isRegister) {
		return (
			<div className="relative flex flex-col sm:justify-center items-center py-25">
				<div className="relative sm:max-w-sm w-full">
					<div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
					<div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
					<div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
						<label
							htmlFor=""
							className="block mt-3 text-lg text-gray-700 text-center font-semibold">
							Fazer Login
						</label>
						<form
							method="#"
							action="#"
							className="mt-10">
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Qual o seu email?</legend>
								<label className="input">
									<TfiEmail />
									<input
										type="text"
										required
										placeholder="Username"
									/>
								</label>
							</fieldset>

							<fieldset className="fieldset">
								<legend className="fieldset-legend">Sua senha</legend>
								<label className="input">
									<MdPassword />
									<input
										type="password"
										placeholder="******"
										required
									/>
								</label>
							</fieldset>

							<div className="mt-7 flex">
								<label
									htmlFor="remember_me"
									className="inline-flex items-center w-full cursor-pointer">
									<input
										id="remember_me"
										type="checkbox"
										className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										name="remember"
									/>
									<span className="ml-2 text-sm text-gray-600">Manter conectado</span>
								</label>

								<div className="w-full text-right">
									<a
										className="underline text-sm text-gray-600 hover:text-gray-900"
										href="#">
										Esqueceu sua conta?
									</a>
								</div>
							</div>

							<div className="mt-7">
								<button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
									Login
								</button>
							</div>

							<div className="flex mt-7 items-center text-center">
								<hr className="border-gray-300 border-1 w-full rounded-md" />
								<label className="block font-medium text-sm text-gray-600 w-full">Acesse com</label>
								<hr className="border-gray-300 border-1 w-full rounded-md" />
							</div>

							<div className="flex mt-7 justify-center w-full">
								<button className="bg-red-500 border-none p-4 p rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
									<FaGoogle />
								</button>
							</div>

							<div className="mt-7">
								<div className="flex justify-center items-center">
									<label className="mr-2">Não tem uma conta?</label>
									<button
										onClick={() => setRegister(!isRegister)}
										className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
										Crie uma agora
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="relative flex flex-col sm:justify-center items-center py-20">
				<div className="relative w-full">
					<div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
					<div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
					<div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
						<label
							htmlFor=""
							className="block mt-3 text-lg text-gray-700 text-center font-semibold">
							Fazer Registro
						</label>
						<form
							method="#"
							action="#"
							className="mt-10">
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Qual é seu nome?</legend>
								<label className="input">
									<BsPerson />
									<input
										placeholder="Carlinho Maia"
										type="text"
										required
									/>
								</label>
							</fieldset>
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Qual o seu email?</legend>
								<label className="input">
									<TfiEmail />
									<input
										type="text"
										required
										placeholder="shaolinmatadordeporco@gmail.com"
									/>
								</label>
							</fieldset>

							<fieldset className="fieldset">
								<legend className="fieldset-legend">Qual será sua senha?</legend>
								<label className="input">
									<MdPassword />
									<input
										placeholder="******"
										type="password"
										required
									/>
								</label>
							</fieldset>

							<fieldset className="fieldset">
								<legend className="fieldset-legend">Repita sua senha</legend>
								<label className="input">
									<MdPassword />
									<input
										placeholder="******"
										type="password"
										required
									/>
								</label>
							</fieldset>

							<div className="mt-7">
								<button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
									Cadatrar-se
								</button>
							</div>

							<div className="flex mt-7 items-center text-center">
								<hr className="border-gray-300 border-1 w-full rounded-md" />
								<label className="block font-medium text-sm text-gray-600 w-full">Se registrar com</label>
								<hr className="border-gray-300 border-1 w-full rounded-md" />
							</div>

							<div className="flex mt-7 justify-center w-full">
								<button className="bg-red-500 border-none p-4 p rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
									<FaGoogle />
								</button>
							</div>

							<div className="mt-7">
								<div className="flex justify-center items-center">
									<label className="mr-2">Já tem uma conta?</label>
									<button
										onClick={() => setRegister(!isRegister)}
										className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
										Faça login
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
