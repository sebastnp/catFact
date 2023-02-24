import { useCatFact } from './hooks/useCatFact'
import { useCatImg } from './hooks/useCatImg'

const CAT_ENDPOINT_GIFT = `https://cataas.com`

function App() {
  // custom hooks
  const { fact, refreshFact } = useCatFact()
  const { catimg } = useCatImg({ fact })

  function handleClick() {
    refreshFact() // funcion que realizaba el fetch y resolvia la promesa
  }

  return (
    <div className='w-full h-screen bg-[url("../assets/catprueba.jpg")] bg-[length:400px_400px]'>
      <main className='flex flex-col justify-center items-center my-0 w-full h-full backdrop-blur-md'>
        <div className='min-w-full text-center'>
          <h1 className='text-5xl font-bold text-slate-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] my-3'>
            HOW MUCH DO YOU KNOW ABOUT CATS
          </h1>
          <label className='text-slate-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-xl'>
            Click here to get a random cat fact
          </label>
          <button
            className='text-black text-lg bg-slate-100 hover:bg-slate-200 focus:outline-none font-medium rounded-lg px-5 py-2 text-center mx-3 shadow-2xl'
            onClick={handleClick}
          >
            Fact
          </button>
        </div>
        <section className='shadow-2xl bg-slate-100 mt-9 rounded-md w-96'>
          {catimg && (
            <img
              className='w-full max-h-96 rounded-t-md'
              src={`${CAT_ENDPOINT_GIFT}${catimg}`}
              alt={`A random gift whit a description`}
            />
          )}
          {fact && (
            <p className='text-center  text-gray-500 mt-2 py-2 px-2 text-xl'>
              {fact}
            </p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
