import shoplist from 'api/shoplist'
import ExampleProducts from 'components/ExampleProducts/index'
import { useEffect, useState } from 'react'
import './shop.css'

function Shop() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState(
    () => localStorage.getItem('queryDigitalShop') ?? ''
  )

  useEffect(() => {
    shoplist.catalog().then((products) => {
      setProducts(products)
    })
  }, [])

  useEffect(() => {
    const saveQuery = setTimeout(() => {
      localStorage.setItem('queryDigitalShop', query)
    }, 500)

    return () => clearTimeout(saveQuery)
  }, [query])

  const handleChange = (event) => {
    setQuery(event.currentTarget.value)
  }

  if (!products.length)
    return (
      <div className="containerShop containerShop_loading">
        <span>Loading...</span>
      </div>
    )

  return (
    <>
      <div className="containerShop">
        <h1 className="shop__title">Digital Shop</h1>
        <form className="shop__form">
          <input
            type="text"
            name="product"
            className="shop__search"
            value={query}
            placeholder="tv o marca de procesador"
            onChange={handleChange}
          />
        </form>
        <ul className="listProduct">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((product) => (
              <li key={product.id} className="itemProduct">
                <h2 className="itemProduct__title">{product.name}</h2>
                <p className="itemProduct__price">
                  {new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                  }).format(product.price)}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <ExampleProducts products={products} />
    </>
  )
}

export default Shop
