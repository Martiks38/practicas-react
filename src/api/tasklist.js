export default {
  list: () =>
    new Promise((res, rej) =>
      setTimeout(() => {
        res([
          { task: 'lavar los platos', id: 1, complete: false },
          { task: 'ordenar el ático', id: 2, complete: false },
          { task: 'lavar la ropa', id: 3, complete: true },
        ])
      }, 1000)
    ),
}
