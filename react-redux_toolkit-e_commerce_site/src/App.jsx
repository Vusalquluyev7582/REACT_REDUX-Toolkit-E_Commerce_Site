import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector, } from 'react-redux';
import { calculateBasket, setDrawer } from './redux/slice/basketSlice';
import { useEffect } from 'react';


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])


  return (

    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />

        <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((product) => {

              return (

                <div key={product.id}>

                  <div style={{ padding: "20px" }} className="flex-row">
                    <img style={{ marginRight: "5px" }} src={product.image} width={50} height={50} alt="" />
                    <p style={{ width: "320px", marginRight: "5px" }}>{product.title} - ({product.count})</p>
                    <h2 style={{ marginRight: "10px" }}>{product.price} $</h2>
                    <button style={{ padding: "5px", borderRadius: "5px", color: "#fff", backgroundColor: "red", border: "none" }}>Səbətdən çıxar</button>

                  </div>

                </div>

              )

            })

          }

          <div style={{ textAlign: "center" }}>Ümumi miqdar : <h3>{totalAmount} $</h3></div>
        </Drawer>
      </PageContainer>
    </>

  );

};

export default App