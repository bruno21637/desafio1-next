import Image from 'next/image'

export default function Home() {
  return (
    <div>


      <nav className="bg-gray-800 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-white text-lg font-semibold">
                <Image
                  src="/wave.png"
                  alt="wave"
                  width={100}
                  height={24}

                />
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Mais</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Serviços</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contato</a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1 className="uppercase mt-20 font-light tracking-[1em] ml-10 text-left text-5xl  text-black">Empresa y</h1>
      </div>
      <div className="inline-flex items-baseline">
        <div>
          <h2 className="text-left text-black text-2xl ml-10 mt-10  w-4/6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At laudantium mollitia commodi eveniet saepe sint consequatur quaerat fuga vel corrupti natus facere repudiandae, beatae dicta, voluptatem modi rerum! Maxime, numquam.</h2>
        </div>
      </div>
      <div className='bg-black text-white mt[2%]'>
        <div className='w-[45%] mt-[20%] mx-auto'>
          <br />
          <h1 >TITULO 1</h1>
          <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam sapiente repellendus! Pariatur nesciunt soluta beatae sed alias officiis. Non eos iure dolorem iusto, error dolor quibusdam qui cumque sequi. </p>
        </div>
        <div className='w-[45%] mt-[10%] mx-auto'>
          <h1 >TITULO 2</h1>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus velit nulla. Praesentium voluptatem repellendus, explicabo a molestiae modi tenetur fugiat reiciendis! Minima ullam, atque a excepturi modi molestias adipisci?
          </p>
          <br />
        </div>

      </div>
      <div className="bg-gradient-to-b from-gray-800 to-blue-200 font-source-sans-pro p-[8% 15%] flex flex-col h-180 items-center ">
        <h1 className="font-montserrat font-bold text-4xl h-16 mt-[16vh] text-white">Clique aqui man</h1>
        <div className="w-[27vw] mb-[12vh] bg-blue-500 text-black cursor-pointer border-none font-bold text-lg transition-all duration-300 ease-in-out rounded-lg whitespace-nowrap hover:bg-blue-800">
          <button className="w-full h-[10vh] text-white flex justify-center items-center">Conheça</button>
        </div>
      </div>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-white text-center">
          <p>&copy; 2023 Seu Nome. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>


  )
}
