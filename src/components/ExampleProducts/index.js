import { memo } from 'react'

function ExampleProducts({ products }) {
  const example = []

  for (let i = 0; i < 2; i++) {
    let ind = Math.floor(Math.random() * products.length)

    example.push(products[ind])
  }

  return (
    <div className="exampleProducts">
      {example.map((product) => (
        <section key={Date.now()} className="product">
          <h2 className="product__title">{product.name}</h2>
          <p className="product__price">
            {new Intl.NumberFormat('es-AR', {
              style: 'currency',
              currency: 'ARS',
            }).format(product.price)}
          </p>
        </section>
      ))}
    </div>
  )
}

export default memo(ExampleProducts)
