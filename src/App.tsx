import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";

function App() {
 
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()
  

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black text-white">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black ">Menú</h2>

          <div className=" space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-500 p-5 rounded-lg space-y-10">

        {order.length === 0 ?
        <p className="font-black text-2xl text-center mt-2">La Orden esta vacia</p>
        : (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentage 
                setTip={setTip}
              />

              <OrderTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
            
          
        
        ) }
            
          
        </div>
      </main>
    </>
  )
}

export default App
