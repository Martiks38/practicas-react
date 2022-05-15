const PRODUCTS = [
  {
    id: 'tv-1',
    name: 'ANDROID SMART TV NOBLEX 50" 4K',
    price: 89061.55,
  },
  {
    id: 'tv-2',
    name: 'Smart TV Samsung LED Full HD 43"',
    price: 69999,
  },
  {
    id: 'tv-3',
    name: 'Smart TV TCL S60A LED HD 32"',
    price: 36999,
  },
  {
    id: 'tv-4',
    name: 'Smart TV Noblex Led Full Hd 43',
    price: 46826,
  },
  {
    id: 'tv-5',
    name: 'Smart TV Noblex LED HD 32"',
    price: 36799,
  },
  {
    id: 'tv-6',
    name: 'Smart TV BGH LED HD 32"',
    price: 33300,
  },
  {
    id: 'up-1',
    name: 'Intel Core i3-10100F',
    price: 13472,
  },
  {
    id: 'up-2',
    name: 'Intel Celeron G5905',
    price: 6978,
  },
  {
    id: 'up-3',
    name: 'AMD Ryzen 7 5700G',
    price: 52699,
  },
  {
    id: 'up-4',
    name: 'Intel Core i7-10700F',
    price: 45999,
  },
  {
    id: 'up-5',
    name: 'AMD Ryzen 5 5600X',
    price: 41599,
  },
  {
    id: 'up-6',
    name: 'Intel Core i5-11400F',
    price: 26979,
  },
]

export default {
  catalog: () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        res(PRODUCTS)
      }, 1000)
    }),
}
